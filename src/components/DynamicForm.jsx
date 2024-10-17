import React from 'react';

const DynamicForm = ({ form, onFormChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {form.map((field) => (
        <div key={field.id} className="flex flex-col">
          <label htmlFor={field.id} className="text-sm font-semibold">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              className="border rounded p-2"
              onChange={(e) => onFormChange(field.id, e.target.value)}
            />
          ) : (
            <input
              id={field.id}
              type={field.type}
              className="border rounded p-2"
              onChange={(e) => onFormChange(field.id, e.target.value)}
            />
          )}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;