![OhiOPT Logo](/Images/Logos/OhioOPT(Title+Subtitle+Logo).png)
#### By Lina Boughton, Leah Goodall, & Grace Simonson <!-- omit from toc -->

## Table of Contents <!-- omit from toc -->

- [Description, Purpose, \& Motivation](#description-purpose--motivation)
- [UI/UX Study](#uiux-study)
- [How to Build](#how-to-build)
- [How to Use](#how-to-use)
  - [OPT Information Page](#opt-information-page)
  - [Job Board](#job-board)
  - [Sign Up Page (Create Profile)](#sign-up-page-create-profile)
  - [User Profile/Edit Profile Page](#user-profileedit-profile-page)
- [Developer Contributions](#developer-contributions)
    - [Lina](#lina)
    - [Leah](#leah)
    - [Grace](#grace)

## Description, Purpose, & Motivation
OhiOPT is a website for F1 international students to view and apply for OPT (Optional Practical Training) jobs, focused around Ohio. It also provides information on OPT and its application process, and provides tools to aid the process.

During our research on how international students look for work in the U.S. post-graduation, we found that OPT is a popular option, but not an easy one. Information about OPT is hard to find and often presented in a very complex manner, making it hard for students to understand what they need to do. Finding jobs that sponsor OPT jobs is similarly difficult, as that information is not always readily available. This prototype demonstrates how a website could provide students with resources & tools for their OPT job search.

*Please note that this website is still a prototype and thus the information on OPT has not been throughly verified.

## UI/UX Study
As a study in UI/UX design, this repository also contains documentation for our development process.

Please refer to the [UI/UX Study](/UIUXStudy) folder for:
- [Background Research & Needfinding](/UXSUItudy/BackgroundResearch&Needfinding.md) (including interviews)
- [Figma Prototype](/UXSUItudy/FigmaPrototype.md)
- [User Stories & Tasks](/UXSUItudyUserStories&Tasks.md)
- [Usability Testing](/UXSUItudy/UsabilityTesting)

## How to Build
1) Download the source code files in the folder Project Implementation
2) Ensure Flask is installed on your computer
3) Run ‘flask run –debug’ on the command line in the same folder as app.py
4) The output of the command above will tell you the address that you may enter into your browser, where you can find the application running on your local machine

## How to Use
!["Website Homescreen"](/Images/Site/HomePage.png)

From the home page, you can see links to the OPT Information page (where you can see information about OPT and generate a personal timeline for OPT deadlines), OPT job board (where you can see OPT jobs that are hiring), log-in page, and sign up page. 

### OPT Information Page
!["OPT Info Page"](/Images/Site/optInfo.png)

At the top of this page, you can read up about OPT: what it is, why it’s important, and how to apply. 

You can also create a personalized timeline of important dates related to OPT. Simply input your graduation date and whether or not you are a STEM major and hit the ‘Create Timeline!’ button to see your timeline. 

From any page (except the home page), you can use the navigation bar on the left to find other pages on the website. The log in/out and sign up buttons may be found in the top right corner of any page. 

### Job Board
!["Job Board With Selected Job"](/Images/Site/jobBoard2.png)

The Job Board page shows OPT jobs that are currently hiring in Ohio (note: the site is currently populated with example jobs, as there is currently no functionality to link real jobs to the site). Click on one to see the job title, location, and pay. 

### Sign Up Page (Create Profile)
!["Create Profile Page"](/Images/Site/createProfile.png)

To create a profile, click the ‘Sign Up’ button in the top right corner from any page on the site. On this page you may enter relevant information that will be saved on the site for easy reference and allow you to log in later.

### User Profile/Edit Profile Page
!["User Profile Page"](/Images/Site/UserProfilePage.png)

Here, you can see your profile information. By clicking the ‘Edit Profile’ button in the top right corner, you can edit any information you’d like to change.

## Developer Contributions
#### Lina
Lina implemented the log-in/out pages/functions & the "header bar" (the bar that goes across the top of all pages except for the home page), including its dynamic changes. She designed the logo, font set, & color palette & implemented most of the aesthetics for text, headers, buttons, etc. around the website.

#### Leah
Leah implemented much of the backend mostly focusing on `layout.js`, `timeline.js`, and the routing / data work in `app.py`. Asside from that, Leah assisted with many other parts with helping explain code, etc.

#### Grace
Grace implemented the Job Board page, including loading in jobs from a Python dictionary and displaying information about each job when clicked. She also added information about OPT to the OPT Information page, such as information about the application process and why being a STEM major matters.