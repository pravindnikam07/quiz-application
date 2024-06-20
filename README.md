# Quiz Application

## Description
This quiz application, built with React.js, allows users to select a subject, take a timed quiz, and receive immediate feedback on their performance with a pass/fail status.

## Features
- Subject Selection
- Timed Quiz Questions
- Dynamic Score Calculation
- Pass/Fail Status Display
- Additional Features:
  - Timer for each question
  - Different difficulty levels (due)
  - Leaderboard to track top scores (due)
 
## Application Flow
- **Visit to home page (TestInfo page)**
  - Enter your name.
  - Select a subject for the test you want to practice.
  - Click on `Start Quiz` button.
    
    ![image](https://github.com/pravindnikam07/quiz-application/assets/101383047/2801b15a-3121-4ee0-8459-cd3f2cba601f)


- **Quiz test starts**
  - You have click on one of the button for answer.
  - You will get 30 seconds to answer any of the question if you miss then it will move to next question.
    
     ![image](https://github.com/pravindnikam07/quiz-application/assets/101383047/111d5a54-11d5-44df-9daf-ec064dc4b27c)

- **Score and Result**
  - For every correct answer: `2`
  - For every missing/wrong answer: `-1`
  - You will be pass if you score if above `60%` 
    
    ![image](https://github.com/pravindnikam07/quiz-application/assets/101383047/93664d36-4891-45e9-b010-0f5a81a3166f)

  - You will be fail if score is less the `60%`

    ![image](https://github.com/pravindnikam07/quiz-application/assets/101383047/558abaf7-262c-4b01-9c2d-3f373d307203)

- **User profile**
  - User details (Store in local storage)
  - Scoring history (store in local storage)

    ![image](https://github.com/pravindnikam07/quiz-application/assets/101383047/1fd80874-b3fb-40ad-9d0d-ffb287cd7d54)
 


## Technologies Used
- React.js
- JavaScript
- CSS

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/pravindnikam07/quiz-application.git
    ```

2. Navigate to the project directory:
    ```bash
    cd quiz-application
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`

## Project Structure
```
quiz-application/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── CustomButton.jsx
│ │ ├── CustomDialog.jsx
│ │ ├── Navbar.jsx
│ │ └── ...
│ ├── data/
│ │ ├── questions.js
│ │ └── ...
│ ├── pages/
│ │ ├── Greeting.jsx
│ │ ├── Profile.jsx
│ │ ├── Ranking.jsx
│ │ ├── StartTest.jsx
│ │ ├── TestInfo.jsx
│ │ └── ...
│ ├── routes/
│ │ ├── AllRoutes.jsx
│ │ └── ...
│ ├── styles/
│ │ ├── CustomButton.css
│ │ ├── Navbar.css
│ │ ├── Profile.css
│ │ ├── Styles.css
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── App.css
├── .gitignore
├── package.json
├── README.md
└── ...
```


## Components

### CustomButton
- A reusable button component with custom styling.

### CustomDialog
- A reusable dialog component for displaying messages and alerts.

## Pages

### TestInfo
- The page showing detailed information about the selected quiz. User has to enter name and select subject.

### StartTest
- The main quiz page where users take the quiz, with each question timed.

### Greeting
- The greeting messeges once users complete test.

### Profile
- The page showing user details along with scores in each test.

  ### Rankings
- The page containing leaderboard of users (currenting in development phase).


## Data

### questions.js
- Contains the quiz questions categorized by subject.


