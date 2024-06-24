// MenuColumn.jsx
import React from 'react';

const MenuColumn = ({ sections, onMenuItemClick }) => {
  return (
    <div className="flex-none w-64 bg-gray-200 overflow-y-auto">
      <ul className="p-4">
        {sections.map(section => (
          <li key={section.id} className="mb-2">
            <a
              href={`#${section.id}`}
              onClick={() => onMenuItemClick(section.id)}
              className="block px-2 py-1 rounded hover:bg-gray-300"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuColumn;
