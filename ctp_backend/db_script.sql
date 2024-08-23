SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;

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
COMMIT;