// AdminPanel.jsx
import React, { useRef } from 'react';
import MenuColumn from './MenuColumn';
import DetailsColumn from './DetailsColumn';

const AdminPanel = () => {
  const detailsRef = useRef(null);

  const handleMenuItemClick = id => {
    const element = document.getElementById(id);
    detailsRef.current.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };

  // Sample data for sections
  const sections = [
    { id: 'section1', title: 'Section 1', content: 'Details about section 1...' },
    { id: 'section2', title: 'Section 2', content: 'Details about section 2...' },
    // Add more sections as needed
  ];

  return (
    <div className="flex h-screen">
      <MenuColumn sections={sections} onMenuItemClick={handleMenuItemClick} />
      <DetailsColumn sections={sections} ref={detailsRef} />
    </div>
  );
};

export default AdminPanel;
