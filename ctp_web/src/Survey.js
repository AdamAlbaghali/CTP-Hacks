import React, { useState, useEffect } from 'react';
import './Survey.css';

const Survey = () => {
  const [formData, setFormData] = useState({
    isCunyStudent: '',
    campus: '',
    foodInsecurity: '',
    housingInstability: '',
    mentalHealth: '',
    healthcareAccess: '',
    academicImpact: {
      foodInsecurity: '',
      housingInstability: '',
      mentalHealth: '',
      healthcareAccess: '',
    },
    awareness: {
      foodInsecurity: '',
      housingInstability: '',
      mentalHealth: '',
      healthcareAccess: '',
    },
    adequateResources: {
      foodInsecurity: '',
      housingInstability: '',
      mentalHealth: '',
      healthcareAccess: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: { ...formData[section], [field]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Survey submitted successfully!');
  };

  useEffect(() => {
    const handleScroll = () => {
      const surveyQuestions = document.querySelectorAll('.survey-question');
      surveyQuestions.forEach(question => {
        const rect = question.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          question.classList.add('visible');
        } else {
          question.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <form className="survey-container" onSubmit={handleSubmit}>
      <h2>CUNY Resources Survey</h2>

      <div className="survey-question">
        <label>1. Are you a current CUNY student?</label>
        <select
          name="isCunyStudent"
          value={formData.isCunyStudent}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="survey-question">
        <label>2. What is your CUNY campus?</label>
        <select
          name="campus"
          value={formData.campus}
          onChange={handleChange}
        >
          <option value="">Select your campus</option>
          <option value="Baruch College">Baruch College</option>
          <option value="Brooklyn College">Brooklyn College</option>
          <option value="City College">City College</option>
          <option value="Hunter College">Hunter College</option>
          <option value="Queens College">Queens College</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="survey-section">
        <h3>3. On a scale of 1-10, rate how much you are personally affected by each of the following:</h3>
        <div className="survey-question">
          <label>3.1 Food insecurity</label>
          <input
            type="text"
            name="foodInsecurity"
            value={formData.foodInsecurity}
            onChange={handleChange}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>3.2 Housing instability</label>
          <input
            type="text"
            name="housingInstability"
            value={formData.housingInstability}
            onChange={handleChange}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>3.3 Lack of mental health treatment</label>
          <input
            type="text"
            name="mentalHealth"
            value={formData.mentalHealth}
            onChange={handleChange}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>3.4 Lack of healthcare access</label>
          <input
            type="text"
            name="healthcareAccess"
            value={formData.healthcareAccess}
            onChange={handleChange}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
      </div>

      <div className="survey-section">
        <h3>4. On a scale of 1-10, rate how much each of the following negatively impacts your academic experience:</h3>
        <div className="survey-question">
          <label>4.1 Food insecurity</label>
          <input
            type="text"
            name="academicImpact.foodInsecurity"
            value={formData.academicImpact.foodInsecurity}
            onChange={(e) => handleNestedChange('academicImpact', 'foodInsecurity', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>4.2 Housing instability</label>
          <input
            type="text"
            name="academicImpact.housingInstability"
            value={formData.academicImpact.housingInstability}
            onChange={(e) => handleNestedChange('academicImpact', 'housingInstability', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>4.3 Lack of mental health treatment</label>
          <input
            type="text"
            name="academicImpact.mentalHealth"
            value={formData.academicImpact.mentalHealth}
            onChange={(e) => handleNestedChange('academicImpact', 'mentalHealth', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>4.4 Lack of healthcare access</label>
          <input
            type="text"
            name="academicImpact.healthcareAccess"
            value={formData.academicImpact.healthcareAccess}
            onChange={(e) => handleNestedChange('academicImpact', 'healthcareAccess', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
      </div>

      <div className="survey-section">
        <h3>5. On a scale of 1-10, rate how aware you are about CUNY resources for each of the following:</h3>
        <div className="survey-question">
          <label>5.1 Food insecurity</label>
          <input
            type="text"
            name="awareness.foodInsecurity"
            value={formData.awareness.foodInsecurity}
            onChange={(e) => handleNestedChange('awareness', 'foodInsecurity', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>5.2 Housing instability</label>
          <input
            type="text"
            name="awareness.housingInstability"
            value={formData.awareness.housingInstability}
            onChange={(e) => handleNestedChange('awareness', 'housingInstability', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>5.3 Lack of mental health treatment</label>
          <input
            type="text"
            name="awareness.mentalHealth"
            value={formData.awareness.mentalHealth}
            onChange={(e) => handleNestedChange('awareness', 'mentalHealth', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
        <div className="survey-question">
          <label>5.4 Lack of healthcare access</label>
          <input
            type="text"
            name="awareness.healthcareAccess"
            value={formData.awareness.healthcareAccess}
            onChange={(e) => handleNestedChange('awareness', 'healthcareAccess', e.target.value)}
            placeholder="Enter a number between 1 and 10"
          />
        </div>
      </div>

      <div className="survey-section">
        <h3>6. For each of the following, would you say that your campus has adequate resources?</h3>
        <div className="survey-question">
          <label>6.1 Food insecurity</label>
          <select
            name="adequateResources.foodInsecurity"
            value={formData.adequateResources.foodInsecurity}
            onChange={(e) => handleNestedChange('adequateResources', 'foodInsecurity', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div className="survey-question">
          <label>6.2 Housing instability</label>
          <select
            name="adequateResources.housingInstability"
            value={formData.adequateResources.housingInstability}
            onChange={(e) => handleNestedChange('adequateResources', 'housingInstability', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div className="survey-question">
          <label>6.3 Lack of mental health treatment</label>
          <select
            name="adequateResources.mentalHealth"
            value={formData.adequateResources.mentalHealth}
            onChange={(e) => handleNestedChange('adequateResources', 'mentalHealth', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
        <div className="survey-question">
          <label>6.4 Lack of healthcare access</label>
          <select
            name="adequateResources.healthcareAccess"
            value={formData.adequateResources.healthcareAccess}
            onChange={(e) => handleNestedChange('adequateResources', 'healthcareAccess', e.target.value)}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
      </div>

      <button type="submit" className="survey-submit-button">Submit Survey</button>
    </form>
  );
};

export default Survey;


