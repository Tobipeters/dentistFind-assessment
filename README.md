# Oluwatobi Taiwo - DentistFind Assessment


## 1. How to Run the Project

### Clone the repository
git clone https://github.com/Tobipeters/dentistFind-assessment

### Navigate into the project directory 
cd dentistfind-test

### Install the necessary dependencies
npm install

### Start the Development Server
npm run dev

### Once the server is running, open the broswer and visit
http://localhost:5173/


## 2. Project Approach

### 1. Component & Styling Decisions

- Component structure
  - I structured PracticeSummaryCard to be my main component and then nested other subcomponents in it (MetricCard, StatusIndicator, and TrendChart). My folder structure also shows this (Since the subcomponents are meants for just PracticeSummaryCard in this use case)
  - By separating into component and subscomponents, I am able to separate concerns, improve readability, make it testable and reuseable in any other page or components it is needed.

- Styling approach
  - I used Tailwind CSS for styling because of the rapid development benefit (Been using it for a while now), 
  - Tailwind also helped in the respons

- Visual consitency & responsiveness
  - I utilize the provisioning of Tailwind CSS class for consitency in my styling such as spacing, typography, and color.
  - I also applied some smooth subtle hover effect (shadows and transition for smoothness)
  - For my layout, I made use of flexible grid and flexbox patterns, which helped to easily achieve responsiveness acrross all device screen

### 2. Scaling & Real-World Use

- Integration into a Larger Dashboard 
  - The PracticeSummaryCard component was built to be reusable, data-driven and fit into a larger PracticeFuel Dashboard 
  - If there is an existing theming or design system (in Tailwind), I can plug into it by mapping tailwind utilizes to  component
  - Another consideration to fit PracticeSummaryCard in a larger PracticeFuel Dashboard will be to paginate the record showing on the dashboard and either fetch when the user gets to the end or include a load more button

- What I will add if I have an extra day 
  - I will include basic unit and visual test 
  - Subtle animation for metric and trend chart components
  - Possibly create a theming system, so I can implement a dark and light mode for user usability and preference
  - I will also improve accessibilitys (Adding ARIA labels and the likes)


### 3. Time Management
  - Setup: 15 minutes
  - Layout & Structure: 30 minutes
  - Styling & polish: 40 minutes
  - README/explanation: 25-35 minutes