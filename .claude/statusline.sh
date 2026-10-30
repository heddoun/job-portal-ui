#!/bin/bash
# Status line: model name + context usage with a progress bar.
input=$(cat)

model=$(echo "$input" | jq -r '.model.display_name // "Unknown"')
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

pct=0
[ -n "$used" ] && pct=$(printf '%.0f' "$used")

width=10
filled=$((pct * width / 100))
[ "$filled" -gt "$width" ] && filled=$width
empty=$((width - filled))

bar=""
for ((i = 0; i < filled; i++)); do bar="${bar}█"; done
for ((i = 0; i < empty; i++)); do bar="${bar}░"; done

# Green < 50%, yellow < 80%, red otherwise
if [ "$pct" -lt 50 ]; then color='\033[32m'
elif [ "$pct" -lt 80 ]; then color='\033[33m'
else color='\033[31m'; fi

printf "\033[36m%s\033[0m | ${color}%s\033[0m %s%%" "$model" "$bar" "$pct"
