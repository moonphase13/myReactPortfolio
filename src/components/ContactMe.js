import React, { useState } from 'react';

function ContactMe() {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setInput('');
  };

  return (
    <div className="flex flex-col justify-center items-center z-0">
      <h1 className="text-5xl font-bold mb-5">Contact Me</h1>
      <form className="flex flex-col justify-center items-center" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={input}
          onChange={handleInputChange}
          className="border-bk border-2 rounded-md p-2"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={input}
          onChange={handleInputChange}
          className="border-bk border-2 rounded-md p-2"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          value={input}
          onChange={handleInputChange}
          className="border-bk border-2 rounded-md p-2"
        />
        <button type="submit" className="border-bk border-2 rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
