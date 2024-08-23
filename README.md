CTP Hackathon 2024
You have to deploy the backend using localhost while the front end is already deployed.
FrontEnd: (Is Deployed --> https://ctp-hacks-code-rangers.vercel.app)
-(For LocalHost only) First Cd into ctp_web and then do npm install
-Then do npm start

Backend:
Step 1: cd into /ctp_backend>
step 2 : run "npm install body-parser cors express mysql2 nodemon axios"
step 3: copy paste all of db_script.sql into your MySQL 
CREATE DATABASE my_database;

CREATE TABLE survey_answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    isCunyStudent VARCHAR(10) NOT NULL,            -- 'Yes' or 'No'
    campus VARCHAR(100) NOT NULL,                  -- Campus name
    foodInsecurityAffect TINYINT NOT NULL,         -- Rating (1-5)
    housingInsecurityAffect TINYINT NOT NULL,      -- Rating (1-5)
    mentalHealthAffect TINYINT NOT NULL,           -- Rating (1-5)
    healthcareAccessAffect TINYINT NOT NULL,       -- Rating (1-5)
    foodInsecurityAware TINYINT NOT NULL,          -- Rating (1-5)
    housingInsecurityAware TINYINT NOT NULL,       -- Rating (1-5)
    mentalHealthAware TINYINT NOT NULL,            -- Rating (1-5)
    healthcareAccessAware TINYINT NOT NULL,        -- Rating (1-5)
    foodInsecurityAdequate VARCHAR(10) NOT NULL,   -- 'Yes', 'No', or 'Not Sure'
    housingInsecurityAdequate VARCHAR(10) NOT NULL,-- 'Yes', 'No', or 'Not Sure'
    mentalHealthAdequate VARCHAR(10) NOT NULL,     -- 'Yes', 'No', or 'Not Sure'
    healthcareAccessAdequate VARCHAR(10) NOT NULL  -- 'Yes', 'No', or 'Not Sure'
);

step 4: if your local MySQL has a password, change the value of   "password: ' ' " in server.js
step 5: run "node server.js" 



