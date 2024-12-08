import React, { useState } from 'react';
import fore_cleanup from "../assets/fore_cleanup.png";
const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    standard: '',
    age: '',
    interests: '',
    course: '',
    skills: '',
    targetingExams: '',
    lookingFor: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        lookingFor: checked
          ? [...prev.lookingFor, value]
          : prev.lookingFor.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div
      className="w-[100vw] min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      <h1 className="text-2xl font-bold text-center mb-4">User Information Form</h1>
     
    </div>
  );
};

export default Form;
