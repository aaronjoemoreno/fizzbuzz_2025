import React from 'react';

export const FizzBuzzLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 400 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FizzBuzz Logo"
    >
      <defs>
        <linearGradient id="split-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="50%" stopColor="#F87171" /> {/* Red-400/Pinkish */}
          <stop offset="50%" stopColor="#60A5FA" /> {/* Blue-400 */}
        </linearGradient>
      </defs>
      
      {/* Pixelated Asterisk/Snowflake */}
      <g fill="#93C5FD"> {/* Blue-300ish */}
        <rect x="10" y="20" width="10" height="20" />
        <rect x="0" y="25" width="30" height="10" />
        {/* Diagonals roughly simulated with steps if we want pixel perfect, but simple rects for now or a path */}
        <path d="M5 10 L10 10 L10 15 L15 15 L15 20 L20 20 L20 15 L25 15 L25 10 L30 10" fill="#93C5FD" opacity="0" /> 
      </g>
      {/* Better Asterisk Path */}
      <path 
        d="M15 10 V50 M5 30 H25 M8 16 L22 44 M8 44 L22 16" 
        stroke="url(#split-gradient)" 
        strokeWidth="8" 
        strokeLinecap="square"
      />

      {/* Text approximation using SVG Text with the gradient */}
      <text
        x="40"
        y="45"
        fontFamily="monospace"
        fontWeight="900"
        fontSize="50"
        fill="url(#split-gradient)"
        letterSpacing="4"
      >
        FIZZBUZZ
      </text>
    </svg>
  );
};
