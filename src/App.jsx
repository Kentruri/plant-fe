import React, { useEffect, useState, useMemo, useCallback } from 'react';
import DynamicForm from './components/DynamicForm';
import './styles/index.css';

const App = ({ siteId }) => {
  const [siteConfig, setSiteConfig] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch('/config/sites.json')
      .then((response) => response.json())
      .then((data) => {
        const config = data[siteId];
        setSiteConfig(config);
      })
      .catch((error) => {
        console.error('Error loading configuration:', error);
      });
  }, [siteId]);

  const handleFormChange = useCallback((id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    alert(`Thank you, ${formData.name || 'User'}!`);
  }, [formData]);

  if (!siteConfig) {
    return <div>Loading configuration...</div>;
  }

  return (
    <div
      style={{ backgroundColor: siteConfig.primaryColor }}
      className="p-4 rounded shadow-md"
    >
      <img src={siteConfig.logo} alt="Site Logo" className="mb-4 h-12" />
      <DynamicForm
        form={siteConfig.form}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;