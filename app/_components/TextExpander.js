
"use client"
import { useState } from 'react';

// **TextExpander Component**
// This React component allows users to control the display of long text content.
// It provides a way to truncate the text to a specified length (default: 40 words)
// and offer a "Show more" or "Show less" button for expansion/collapse functionality.

function TextExpander({ children }) {
  // **isExpanded State**
  // Tracks the current expansion state of the text content (true: expanded, false: collapsed)
  const [isExpanded, setIsExpanded] = useState(false);

  // **displayText Calculation**
  // Determines the text to be displayed based on the current expansion state
  const displayText = isExpanded
    ? children // Show full content if expanded
    : children.split(' ').slice(0, 40).join(' ') + '...'; // Truncate to 40 words and add ellipsis if collapsed

  return (
    <span>
      {displayText}
      <button
        className='text-primary-700 border-b border-primary-700 leading-3 pb-1'
        onClick={() => setIsExpanded(!isExpanded)} // Toggle expansion on button click
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </span>
  );
}

export default TextExpander;
