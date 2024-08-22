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
  };
  const maxAffectText = variableDescriptions[maxAffectVar] || 'Unknown';
  const minAffectText = variableDescriptions[minAffectVar] || 'Unknown';
  const maxAwarenessText = variableDescriptions[maxAwarenessVar] || 'Unknown';
  const minAwarenessText = variableDescriptions[minAwarenessVar] || 'Unknown';


  return (
    <header>
      <h1>Analysis page</h1>
      <div>The category with the highest average score for "rate how much you are personally affected by each of the following" was {maxAffectText} with 
        an average score of {maxAffect}</div>
      <div>Surveyed CUNY students feel more affected by a need for assistance with {maxAffectText} than any other category.</div><br />
      <div>The category with the lowest average score for "rate how much you are personally affected by each of the following" was {minAffectText} with 
        an average score of {minAffect}</div>
      <div>Surveyed CUNY students have less issue with access to {minAffectText} than other categories. </div><br />
      <div>The category with the highest average score for "rate how aware you are about CUNY resources for each of the following" was {maxAwarenessText} with 
        an average score of {maxAwareness}</div>
      <div>It seems CUNY should focus on increasing awareness of resources for {maxAwarenessText}.</div><br />
      <div>The category with the lowest average score for "rate how aware you are about CUNY resources for each of the following" was {minAwarenessText} with 
        an average score of {minAwareness}</div>
      <div>It seems CUNY is doing a great job of creating awareness for {minAwarenessText} resources!</div><br />
    </header>
  );
  


};

export default Analysis;