import React, { useState, useEffect } from 'react';
import axios from 'axios';

//page meant to perform analysis on the survey data and draw meaningful conclusions from it
const Analysis = () => {
  const [surveyData, setSurveyData] = useState([]);

  useEffect(() => {
    //uses GET request to get our survey data from the database and stores it in a usable format
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/survey-data');
        setSurveyData(response.data);
      } catch (error) {
        console.error('Error fetching survey data', error);
      }
    };

    fetchData();
  }, []);

    //functions to find which of the input values was the and lowest
    const findMaxVariable = (variables) => {
      let maxKey = null;
      let maxValue = -Infinity;
    
      for (const [key, value] of Object.entries(variables)) {
        if (value > maxValue) {
          maxValue = value;
          maxKey = key;
        }
      }
    
      return maxKey;
    };
    const findMinVariable = (variables) => {
      let minKey = null;
      let minValue = Infinity;
    
      for (const [key, value] of Object.entries(variables)) {
        if (value < minValue) {
          minValue = value;
          minKey = key;
        }
      }
    
      return minKey;
    };

  //calculate average rating for each of the questions we are interested in
  //sums up (accumulates) all values from our database
  const avgFoodInsecurityAffect = surveyData.reduce((acc, survey) => acc + survey.foodInsecurityAffect, 0) / surveyData.length;
  const avgHousingInsecurityAffect = surveyData.reduce((acc, survey) => acc + survey.housingInsecurityAffect, 0) / surveyData.length;
  const avgMentalHealthAffect = surveyData.reduce((acc, survey) => acc + survey.mentalHealthAffect, 0) / surveyData.length;
  const avgHealthcareAccessAffect = surveyData.reduce((acc, survey) => acc + survey.healthcareAccessAffect, 0) / surveyData.length;
  const avgFoodInsecurityAware = surveyData.reduce((acc, survey) => acc + survey.foodInsecurityAware, 0) / surveyData.length;
  const avgHousingInsecurityAware = surveyData.reduce((acc, survey) => acc + survey.housingInsecurityAware, 0) / surveyData.length;
  const avgMentalHealthAware = surveyData.reduce((acc, survey) => acc + survey.mentalHealthAware, 0) / surveyData.length;
  const avgHealthcareAccessAware = surveyData.reduce((acc, survey) => acc + survey.healthcareAccessAware, 0) / surveyData.length;

  //finds max and min values from our data
  const maxAffect = Math.max(avgFoodInsecurityAffect, avgHousingInsecurityAffect, avgMentalHealthAffect, avgHealthcareAccessAffect);
  const maxAwareness = Math.max( avgFoodInsecurityAware, avgHousingInsecurityAware, avgMentalHealthAware, avgHealthcareAccessAware);
  const minAffect = Math.min(avgFoodInsecurityAffect, avgHousingInsecurityAffect, avgMentalHealthAffect, avgHealthcareAccessAffect);
  const minAwareness = Math.min( avgFoodInsecurityAware, avgHousingInsecurityAware, avgMentalHealthAware, avgHealthcareAccessAware);

  //store averages in objects for comparison
  const affectVariables = {avgFoodInsecurityAffect, avgHousingInsecurityAffect, avgMentalHealthAffect, avgHealthcareAccessAffect,};
  const awarenessVariables = {avgFoodInsecurityAware, avgHousingInsecurityAware, avgMentalHealthAware, avgHealthcareAccessAware,};

  //store the names of the max and min variables for display
  const maxAffectVar = findMaxVariable(affectVariables);
  const minAffectVar = findMinVariable(affectVariables);
  const maxAwarenessVar = findMaxVariable(awarenessVariables);
  const minAwarenessVar = findMinVariable(awarenessVariables);

  //mapping from variable names to descriptive text
  const variableDescriptions = {
    avgFoodInsecurityAffect: 'Food Insecurity',
    avgHousingInsecurityAffect: 'Housing Insecurity',
    avgMentalHealthAffect: 'Mental Health Treatment',
    avgHealthcareAccessAffect: 'Healthcare Access',
    avgFoodInsecurityAware: 'Food Insecurity',
    avgHousingInsecurityAware: 'Housing Insecurity',
    avgMentalHealthAware: 'Mental Health Treatment',
    avgHealthcareAccessAware: 'Healthcare Access',
    foodInsecurityInadequateCount: 'Food Insecurity',
    housingInsecurityInadequateCount: 'Housing Insecurity',
    mentalHealthInadequateCount: 'Mental Health Treatment',
    healthcareAccessInadequateCount: 'Healthcare Access',
    
  };
  const maxAffectText = variableDescriptions[maxAffectVar] || 'Unknown';
  const minAffectText = variableDescriptions[minAffectVar] || 'Unknown';
  const maxAwarenessText = variableDescriptions[maxAwarenessVar] || 'Unknown';
  const minAwarenessText = variableDescriptions[minAwarenessVar] || 'Unknown';

  //function to count the # of respondents that answered 4 or 5 to a subsection of question 3 and responded 'no' to the corresponding subcategory of question 5
  const countMatches = (affectKey, adequateKey) => {
    return surveyData.filter(survey => survey[affectKey] >= 4 && survey[adequateKey] === 'No').length;
  };

  //calculate the # of people matching the criteria for each category
  const foodInsecurityInadequateCount = countMatches('foodInsecurityAffect', 'foodInsecurityAdequate');
  const housingInsecurityInadequateCount = countMatches('housingInsecurityAffect', 'housingInsecurityAdequate');
  const mentalHealthInadequateCount = countMatches('mentalHealthAffect', 'mentalHealthAdequate');
  const healthcareAccessInadequateCount = countMatches('healthcareAccessAffect', 'healthcareAccessAdequate');
  
  //store the above values in an object for comparison and find the max and min #s
  const matchesVariables = {foodInsecurityInadequateCount, housingInsecurityInadequateCount, mentalHealthInadequateCount, healthcareAccessInadequateCount}
  const maxInadequate = Math.max(foodInsecurityInadequateCount, housingInsecurityInadequateCount, mentalHealthInadequateCount, healthcareAccessInadequateCount);
  const minInadequate = Math.min(foodInsecurityInadequateCount, housingInsecurityInadequateCount, mentalHealthInadequateCount, healthcareAccessInadequateCount);

  //feed the above object into the function to find the min and max value of these. then retrieve the proper name
  const maxInadequateVar = findMaxVariable(matchesVariables);
  const minInadequateVar = findMinVariable(matchesVariables);
  const maxInadequateText = variableDescriptions[maxInadequateVar] || 'Unknown';
  const minInadequateText = variableDescriptions[minInadequateVar] || 'Unknown';



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
          .analysis-container {
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 800px;
            margin: 80px auto;
          }
          .analysis-header {
            color: #73937E;
            margin-bottom: 20px;
            text-align: center;
          }
          .analysis-text {
            margin-bottom: 20px;
            color: #333;
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
                <a href="/survey" className="nav-link">
                  Survey
                </a>
              </li>
              <li className="nav-item">
                <a href="/analysis" className="nav-link active">
                  Analysis
                </a>
              </li>
            </ul>
          </header>
        </div>
      </section>

      <div className="analysis-container">
        <h1 className="analysis-header">Analysis Page</h1>
        <div className="analysis-text">
          The category with the highest average score for "rate how much you are personally affected by each of the following" was {maxAffectText} with an average score of {maxAffect}.toFixed(2).
          <br></br>Surveyed CUNY students feel more affected by a need for assistance with {maxAffectText} than any other category.
        </div>
        <div className="analysis-text">
          The category with the lowest average score for "rate how much you are personally affected by each of the following" was {minAffectText} with an average score of {minAffect}.toFixed(2).
          <br></br>Surveyed CUNY students have fewer issues with access to {minAffectText} than other categories.
        </div>
        <div className="analysis-text">
          The category with the highest average score for "rate how aware you are about CUNY resources for each of the following" was {maxAwarenessText} with an average score of {maxAwareness}.toFixed(2).
        <br></br>It seems CUNY is doing a great job of creating awareness for {maxAwarenessText} resources!
        </div>
        <div className="analysis-text">
          The category with the lowest average score for "rate how aware you are about CUNY resources for each of the following" was {minAwarenessText} with an average score of {minAwareness}.toFixed(2).
        <br></br>Surveyed CUNY students were mostly unware about resources for {minAwarenessText}. <br></br>
        </div>
        <div>
          The {maxInadequateText} category had the most respondents who indicated that they are both personally negatively affected by it and that their campus has inadequate resources with {maxInadequate}.
          <br></br>CUNY should focus on increasing widespread assistance for those who need it in this category especially.
        </div>
        <br></br>
        <div>
          The {minInadequateText} category had the least respondents who indicated that they are both personally negatively affected by it and that their campus has inadequate resources with {minInadequate}.
          <br></br>CUNY is doing a great job of providing aid to those who need it in this category!
        </div>
      </div>
    </div>
  );
};

export default Analysis;