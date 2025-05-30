# Post-Testing Debrief

#### Issues (Ranked)
1. Editing a profile does not save any user information, user must re-enter everything
    - If there’s already something in the user information dictionary (in app.py), autofill all of the fields
2. Lack of a log-in/log-out button & log-in page
    - Put the log-in & create an account buttons in the top right corner for the whole website
    - Add HTML log-in page: Just asks for email & password
3. Account specific pages (in navigation bar) are visible before the profile has been created
    - Before logged-in: Navbar has OPT Timeline & Job Board. Below the line in the Navbar, add an option for “Log-in to view additional features”. Log-in & create account buttons are in the corner.
    - Once logged in: Navbar additionally has Profile & Saved Jobs under the line. Log-out button replaces the log-in button in the top-right corner.
4. Job board does not have any filters
    - Create a dictionary of jobs in Python, handle filters and sorting in Python, then pass filtered/sorted list to HTML
5. OPT Confusion: What is OPT? Why is OPT important? What is the OPT process?
    - Add text to OPT timeline page that answers these questions (include link to government website) (Explain what OPT is, why it is important, the process)
    - Answer the question “what is the significance of being a STEM major?”
        - Add a small piece of text that says “Why is this important?” → when hovered over, a tooltip appears & explains
6. User does not enter email/phone information or any sort of password
    - Add email/phone and password fields to create account page and log-in page
7. User doesn’t know which majors count as being STEM majors
    - Add a tooltip or dialogue box saying which majors count as STEM majors
8. Site design is too monochrome / plain
    - Create color palette and apply to site