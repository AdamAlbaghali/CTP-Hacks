# CTP Hackathon 2024

## Project Setup

### Frontend

The frontend is already deployed at: [https://ctp-hacks-code-rangers.vercel.app](https://ctp-hacks-code-rangers.vercel.app)

For local development:

1. **Navigate to the frontend directory**:
    ```bash
    cd ctp_web
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Start the development server**:
    ```bash
    npm start
    ```

### Backend

To set up and run the backend on your local machine:

1. **Navigate to the backend directory**:
    ```bash
    cd ctp_backend
    ```
2. **Install necessary dependencies**:
    ```bash
    npm install body-parser cors express mysql2 nodemon axios
    ```
3. **Set up the database**:
    - Copy and paste the following SQL script into your MySQL database to create the necessary tables:
    ```sql
    CREATE DATABASE my_database;

    USE my_database;

    CREATE TABLE survey_answers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        isCunyStudent VARCHAR(10) NOT NULL, -- 'Yes' or 'No'
        campus VARCHAR(100) NOT NULL, -- Campus name
        foodInsecurityAffect TINYINT NOT NULL, -- Rating (1-5)
        housingInsecurityAffect TINYINT NOT NULL, -- Rating (1-5)
        mentalHealthAffect TINYINT NOT NULL, -- Rating (1-5)
        healthcareAccessAffect TINYINT NOT NULL, -- Rating (1-5)
        foodInsecurityAware TINYINT NOT NULL, -- Rating (1-5)
        housingInsecurityAware TINYINT NOT NULL, -- Rating (1-5)
        mentalHealthAware TINYINT NOT NULL, -- Rating (1-5)
        healthcareAccessAware TINYINT NOT NULL, -- Rating (1-5)
        foodInsecurityAdequate VARCHAR(10) NOT NULL, -- 'Yes', 'No', or 'Not Sure'
        housingInsecurityAdequate VARCHAR(10) NOT NULL, -- 'Yes', 'No', or 'Not Sure'
        mentalHealthAdequate VARCHAR(10) NOT NULL, -- 'Yes', 'No', or 'Not Sure'
        healthcareAccessAdequate VARCHAR(10) NOT NULL -- 'Yes', 'No', or 'Not Sure'
    );
    ```

4. **Update the MySQL password**:
    - If your local MySQL instance requires a password, update the `password` field in `server.js` accordingly.

5. **Run the backend server**:
    ```bash
    node server.js
    ```


