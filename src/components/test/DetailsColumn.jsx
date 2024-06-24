// DetailsColumn.jsx
import React from 'react';

const DetailsColumn = ({ sections }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {sections.map(section => (
        <div key={section.id} id={section.id} className="mb-4">
          <h2 className="text-lg font-bold mb-2">{section.title}</h2>
          <p className="text-gray-700">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DetailsColumn;
