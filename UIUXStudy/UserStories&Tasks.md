# User Stories & Tasks

#### Students can view jobs on a job board
Students can view the jobs available to them on a job board similar to Handshake or LinkedIn
**Priority: 1**
- Task: Create View Page for listings
  - Create an HTML page to display job listings on
  - Estimate: 3
- Task: Pull Job information from database (or dictionary, etc.)
  - Query database (or dictionary, etc) for information about job which can be displayed to user
  - Estimate: 2
- Task: Place retrieved job information onto created listing
  - Estimate: 1

#### Job Information
Each job posting will contain a job title, description, and company name.
**Priority: 1**
- Task: 
  - Build container that will store job information
    - Possible fields: job title, description, company name
    - Estimate: 2

#### “OPT Helper Timeline”
Students are able to see important VISA-related dates in a timeline (such as when their student Visa expires). The timeline will include reminders such as “45 days left”, to remind the user to apply for OPT status.
**Priority: 1**
- Task: Research OPT/VISA-related timelines and dates to form a list of useful reminders
  - This information could come from informal research and interviews with possible users, and includes any reminders and when they should happen
  - Estimate: 2
- Task: Create timeline page for app
  - Create an HTML page that will display the timeline with reminders
  - Estimate: 3
- Task: Create reminder mechanism
  - Add functionality that will remind the student of events on the timeline
  - Estimate: 3
- Task: Create user inputs to personalize timeline
  - user may input major (STEM/not STEM, graduation date, and home country) which in turn generates a personalized OPT timeline
  - Estimate: 3

#### Students can create a profile
Students can create a profile that shows experiences, projects (such as I.S.), social links, name, age, major, and education/school. 
**Priority: 2**
- Task: Create data container for student information
  - Create dictionary containing information such as name, age, work experiences, and education which can be queried
  - Estimate: 2
- Task: Create view page for displaying student information
  - Create HTML page to display student info
  - Estimate: 3

#### Students can edit their profile
Students can edit any displayed field on their profile.
**Priority: 2**
- Task: Create function to modify student information data structure
  - create a system which allows for direct editing of the information stored in the student information data structure
  - Estimate: 2

#### Students can import profile information from LinkedIn
Have a “link account” button on the user profile which imports data from a linkedin profile to the OhiOPT app
**Priority: 3**
- Task: Create a field that will accept a LinkedIn profile link
  - Create a function that accepts “secure” a link, verify that the link leads to a LinkedIn profile
  - Estimate: 2
- Task: Turn LinkedIn information into a profile
  - Create a function that will read the information from LinkedIn & distribute it to the fields in the user’s profile
  - Estimate: 2

#### Students can access a company's external website
Each job description will include a link to the company’s profile. This link could be to their LinkedIn, company website, etc.
**Priority: 4**
- Task: Include a field on job descriptions that holds a link to company profiles
  - Estimate: 1
- Task: Include button on job description that pulls up company information dialog
  - Company information dialog in turn contains buttons that link to the company website and message the company representative, respectively (does this make the existing task moot?)
  - Estimate: 2

#### Students can message the company’s representative
Students may message a company’s representative directly through this application. The messaging/contact information will be accessible from the job description
**Priority: 5**
- Task: Create page where student can message company representative
  - Create HTML page which include features such as a text input box and a message history
  - Estimate: 3
- Task: Create mechanism for alerting students to messages from recruiters
  - this could use the same alert system as the reminder mechanism, but links to the messaging page instead of the timeline page
  - Estimate: 3

#### Students can save jobs
Students can save jobs as they’re looking at them. Students can view these saved jobs from the sidebar or the job board page.
**Priority: 2**
- Task: Create button for saving jobs
  - A button in the corner of the job description
  - Estimate: 1
- Task: Create saved job page that displays saved jobs
  - A page where students can view their saved jobs in a list
  - Estimate: 2