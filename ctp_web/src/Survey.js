import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Survey.css";

const Survey = () => {
  const [formData, setFormData] = useState({
    isCunyStudent: "",
    campus: "",
    foodInsecurity: "",
    housingInstability: "",
    mentalHealth: "",
    healthcareAccess: "",
    awareness: {
      foodInsecurity: "",
      housingInstability: "",
      mentalHealth: "",
      healthcareAccess: "",
    },
    adequateResources: {
      foodInsecurity: "",
      housingInstability: "",
      mentalHealth: "",
      healthcareAccess: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedChange = (section, field, value) => {
    setFormData({
      ...formData,
      [section]: { ...formData[section], [field]: value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //change form keys to match those in database
    const submissionData = {
      isCunyStudent: formData.isCunyStudent,
      campus: formData.campus,
      foodInsecurityAffect: formData.foodInsecurity,
      housingInsecurityAffect: formData.housingInstability,
      mentalHealthAffect: formData.mentalHealth,
      healthcareAccessAffect: formData.healthcareAccess,
      foodInsecurityAware: formData.awareness.foodInsecurity,
      housingInsecurityAware: formData.awareness.housingInstability,
      mentalHealthAware: formData.awareness.mentalHealth,
      healthcareAccessAware: formData.awareness.healthcareAccess,
      foodInsecurityAdequate: formData.adequateResources.foodInsecurity,
      housingInsecurityAdequate: formData.adequateResources.housingInstability,
      mentalHealthAdequate: formData.adequateResources.mentalHealth,
      healthcareAccessAdequate: formData.adequateResources.healthcareAccess,
    };

    //form submission logic, send POST request with survey data and indicate to the user if it was submitted succesfully
    try {
      const response = await axios.post(
        "http://localhost:3001/api/submit-survey",
        submissionData
      );
      if (response.status === 201) {
        alert("Survey submitted successfully!");
        window.location.href = '/analysis'; // Redirect to /analysis
      } else {
        alert("Error submitting survey");
      }
    } catch (error) {
      console.error("There was an error submitting the survey:", error);
      alert("Error submitting survey");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const surveyQuestions = document.querySelectorAll(".survey-question");
      surveyQuestions.forEach((question) => {
        const rect = question.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isVisible) {
          question.classList.add("visible");
        } else {
          question.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Bootstrap CSS */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style>
        {`
          .nav-color {
            background: #73937E;
          }
          body {
            background: #fcfefe;
          }
          .nav-link {
            color: aliceblue;
          }
          .custom-border-top {
            border-top: 0.5px solid #4c4b4b; /* Change to your desired color */
          }
          .footer-color {
            background: #f76b8a;
          }
          .survey-container {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            margin: 80px auto; /* Adjusted for navbar */
          }
          .survey-question {
            margin-bottom: 20px;
          }
          .survey-question label {
            font-weight: bold;
            color: #333;
          }
          .survey-question input,
          .survey-question select {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
          .survey-section h3 {
            color: #73937E;
            margin-top: 30px;
          }
          .survey-submit-button {
            background-color: #73937E;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
          }
          
        `}
      </style>

      {/* Nav Bar */}
      <section id="Header" className="nav-color fixed-top">
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/discussion" className="nav-link">
                  Discussion
                </a>
              </li>
              <li className="nav-item">
                <a href="/aboutus" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/survey" className="nav-link active">
                  Survey
                </a>
              </li>
              <a href="/analysis" className="nav-link">
                Analysis
              </a>
            </ul>
          </header>
        </div>
      </section>

      <form className="survey-container" onSubmit={handleSubmit}>
        <h2 className="text-center" style={{ color: "#73937E" }}>
          CUNY Resources Survey
        </h2>

        <div className="survey-question">
          <h3>1. Are you a current CUNY student?</h3>
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
          <h3>2. What is your CUNY campus?</h3>
          <select name="campus" value={formData.campus} onChange={handleChange}>
            <option value="">Select your campus</option>
            <option value="Baruch College">Baruch College</option>
            <option value="Borough of Manhattan Community College">
              Borough of Manhattan Community College
            </option>
            <option value="Bronx Community College">
              Bronx Community College
            </option>
            <option value="Brooklyn College">Brooklyn College</option>
            <option value="College of Staten Island">
              College of Staten Island
            </option>
            <option value="Craig Newmark Graduate School of Journalism">
              Craig Newmark Graduate School of Journalism
            </option>
            <option value="CUNY Graduate Center">CUNY Graduate Center</option>
            <option value="CUNY Graduate School of Public Health and Health Policy">
              CUNY Graduate School of Public Health and Health Policy
            </option>
            <option value="CUNY School of Labor and Urban Studies">
              CUNY School of Labor and Urban Studies
            </option>
            <option value="CUNY School of Law">CUNY School of Law</option>
            <option value="CUNY School of Professional Studies">
              CUNY School of Professional Studies
            </option>
            <option value="Guttman Community College">
              Guttman Community College
            </option>
            <option value="Hostos Community College">
              Hostos Community College
            </option>
            <option value="Hunter College">Hunter College</option>
            <option value="John Jay College of Criminal Justice">
              John Jay College of Criminal Justice
            </option>
            <option value="Kingsborough Community College">
              Kingsborough Community College
            </option>
            <option value="LaGuardia Community College">
              LaGuardia Community College
            </option>
            <option value="Lehman College">Lehman College</option>
            <option value="Macaulay Honors College">
              Macaulay Honors College
            </option>
            <option value="Medgar Evers College">Medgar Evers College</option>
            <option value="New York City College of Technology">
              New York City College of Technology
            </option>
            <option value="Brooklyn College">Brooklyn College</option>
            <option value="Queens College">Queens College</option>
            <option value="Queensborough Community College">
              Queensborough Community College
            </option>
            <option value="The City College of New York">
              The City College of New York
            </option>
            <option value="York College">York College</option>
          </select>
        </div>

        <div className="survey-section">
          <h3>
            3. On a scale of 1-5, rate how much you are personally negatively
            affected by each of the following:
          </h3>
          <div className="survey-question">
            <label>3.1 Food insecurity</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="foodInsecurity"
                    value={value}
                    checked={formData.foodInsecurity === String(value)}
                    onChange={(e) => handleChange(e)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="survey-question">
            <label>3.2 Housing instability</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="housingInstability"
                    value={value}
                    checked={formData.housingInstability === String(value)}
                    onChange={(e) => handleChange(e)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="survey-question">
            <label>3.3 Lack of mental health treatment</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="mentalHealth"
                    value={value}
                    checked={formData.mentalHealth === String(value)}
                    onChange={(e) => handleChange(e)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="survey-question">
            <label>3.4 Lack of healthcare access</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="healthcareAccess"
                    value={value}
                    checked={formData.healthcareAccess === String(value)}
                    onChange={(e) => handleChange(e)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="survey-section">
          <h3>
            4. On a scale of 1-5, rate how aware you are about CUNY resources
            for each of the following:
          </h3>
          <div className="survey-question">
            <label>4.1 Food insecurity</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="awareness.foodInsecurity"
                    value={value}
                    checked={formData.awareness.foodInsecurity === value}
                    onChange={(e) =>
                      handleNestedChange("awareness", "foodInsecurity", value)
                    }
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="survey-question">
            <label>4.2 Housing instability</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="awareness.housingInstability"
                    value={value}
                    checked={formData.awareness.housingInstability === value}
                    onChange={(e) =>
                      handleNestedChange(
                        "awareness",
                        "housingInstability",
                        value
                      )
                    }
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="survey-question">
            <label>4.3 Lack of mental health treatment</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="awareness.mentalHealth"
                    value={value}
                    checked={formData.awareness.mentalHealth === value}
                    onChange={(e) =>
                      handleNestedChange("awareness", "mentalHealth", value)
                    }
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="survey-question">
            <label>4.4 Lack of healthcare access</label>
            <div className="radio-group">
              {[1, 2, 3, 4, 5].map((value) => (
                <label key={value}>
                  <input
                    type="radio"
                    name="awareness.healthcareAccess"
                    value={value}
                    checked={formData.awareness.healthcareAccess === value}
                    onChange={(e) =>
                      handleNestedChange("awareness", "healthcareAccess", value)
                    }
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="survey-section">
          <h3>
            5. For each of the following, would you say that your campus has
            adequate resources?
          </h3>
          <div className="survey-question">
            <label>5.1 Food insecurity</label>
            <select
              name="adequateResources.foodInsecurity"
              value={formData.adequateResources.foodInsecurity}
              onChange={(e) =>
                handleNestedChange(
                  "adequateResources",
                  "foodInsecurity",
                  e.target.value
                )
              }
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div className="survey-question">
            <label>5.2 Housing instability</label>
            <select
              name="adequateResources.housingInstability"
              value={formData.adequateResources.housingInstability}
              onChange={(e) =>
                handleNestedChange(
                  "adequateResources",
                  "housingInstability",
                  e.target.value
                )
              }
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div className="survey-question">
            <label>5.3 Lack of mental health treatment</label>
            <select
              name="adequateResources.mentalHealth"
              value={formData.adequateResources.mentalHealth}
              onChange={(e) =>
                handleNestedChange(
                  "adequateResources",
                  "mentalHealth",
                  e.target.value
                )
              }
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div className="survey-question">
            <label>5.4 Lack of healthcare access</label>
            <select
              name="adequateResources.healthcareAccess"
              value={formData.adequateResources.healthcareAccess}
              onChange={(e) =>
                handleNestedChange(
                  "adequateResources",
                  "healthcareAccess",
                  e.target.value
                )
              }
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
        </div>

        <a href="/analysis"  style={{ textDecoration: 'none' }}>
          <button type="submit" className="survey-submit-button">
            Submit Survey
          </button>
          </a>
      </form>
    </div>
  );
};

export default Survey;
