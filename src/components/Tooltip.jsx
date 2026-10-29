import { cloneElement, useId } from "react";

// Hover/focus tooltip styled to match the dark footer surface
export const Tooltip = ({ title, content, children }) => {
  const tooltipId = useId();

  return (
    <span className="group/tooltip relative inline-flex">
      {cloneElement(children, { "aria-describedby": tooltipId })}
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 translate-y-1 rounded-xl border border-gray-700/50 bg-gray-800/95 p-4 text-left text-xs leading-relaxed text-gray-300 opacity-0 shadow-2xl backdrop-blur invisible transition-all duration-300 group-hover/tooltip:visible group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100"
      >
        {title && (
          <span className="mb-1 block text-sm font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </span>
        )}
        {content}
        <span className="absolute left-1/2 top-full -mt-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-700/50 bg-gray-800"></span>
      </span>
    </span>
  );
};
