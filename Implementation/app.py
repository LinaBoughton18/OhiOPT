from flask import Flask, render_template, request, redirect, url_for, g
import os

app = Flask(__name__)

# user info
global loggedIn
loggedIn = False

global currentPage

userProfileInfo = {
   "fName":None,
   "lName":None,
   "bDate":None,
   "asMDY":None,
   "school":None,
   "major":None,
   "gradYear":None,
   "email": None,
   "phone": None,
   "password": None
}

fakeUserInfo = {
   "fName":"Gary",
   "lName":"McCready",
   "bDate":"2002-10-01",
   "asMDY":"10-01-2002",
   "school":"Ivy Tech Community College Logansport",
   "major":"Gambling",
   "gradYear":2020,
   "email": "garygambles02@gmail.com",
   "phone": "555-555-5555",
   "password": "Gary2002"
}

# Jobs to be displayed on job board
jobsList = [
   {
      "jobTitle": "Cybersecurity Analyst",
      "location": "Columbus",
      "field": "Computer Science",
      "pay": 15
   },
   {
      "jobTitle": "Data Scientist",
      "location": "Wooster",
      "field": "Data Science",
      "pay": 15
   },
   {
      "jobTitle": "Mathy Person",
      "location": "Dayton",
      "field": "Math",
      "pay": 2000
   },
   {
      "jobTitle": "Software Engineer",
      "location": "Cleveland",
      "field": "Computer Science",
      "pay": 30
   }
]
locationFilterValue = "None"
fieldFilterValue = "blah"
payFilterValue = 0

@app.route('/')
def Home():
   print("Home reached, user is "+str(loggedIn))
   return render_template('homePage.html',
                          loggedIn = loggedIn, currentPage = 'homePage')

@app.route('/timeline')
def timeline():
   print("Timeline reached, user is "+str(loggedIn))
   return render_template('timeline.html',
                          loggedIn = loggedIn, currentPage = 'timeline')

@app.route('/userProfile')
def userProfile():
   print(userProfileInfo["asMDY"])
   return render_template(
      'userProfile.html', 
      fName = userProfileInfo["fName"],
      lName = userProfileInfo["lName"],
      bDate = userProfileInfo["bDate"],
      asMDY = userProfileInfo["asMDY"],
      school = userProfileInfo["school"],
      major = userProfileInfo["major"],
      gradYear = userProfileInfo["gradYear"],
      email = userProfileInfo["email"],
      phone = userProfileInfo["phone"],
      password = userProfileInfo["password"],
      loggedIn = loggedIn,
      currentPage = 'userProfile'
      )

@app.route('/credentialsLogIn', methods=["GET","POST"])
def credentailsLogIn():
   global loggedIn
   loggedIn = True
   global userProfileInfo
   userProfileInfo = fakeUserInfo
   return redirect(url_for("userProfile"))

# THIS ONE STILL NEEDS TO BE UPDATED WITH EMAIL, PHONE, & PASSWORD
@app.route('/editProfile', methods=["GET","POST"])
def editProfile():
   if request.method == "POST":
      userProfileInfo["fName"]    = request.form.get("fName")
      userProfileInfo["lName"]    = request.form.get("lName")
      userProfileInfo["bDate"]    = request.form.get("bDate")
      userProfileInfo["school"]   = request.form.get("school")
      userProfileInfo["major"]    = request.form.get("major")
      userProfileInfo["gradYear"] = request.form.get("gradYear")
      userProfileInfo["email"] = request.form.get("email")
      userProfileInfo["phone"] = request.form.get("phone")
      userProfileInfo["password"] = request.form.get("password")
      dateInputToString(userProfileInfo["bDate"])
      return redirect(url_for("userProfile"))
   populatedData = [None]*10
   itt = 0
   for value in userProfileInfo.values():
      if value != None:
         populatedData[itt] = value
      else:
         populatedData[itt] = ""
      itt+=1
   return render_template(
      'editProfile.html',
      fName = populatedData[0],
      lName = populatedData[1],
      bDate = populatedData[2],
      # asMDY is a generated value so it isnt used in the html
      # it just sits here to let you know theres something in slot
      # three which needs to be worked around
      asMDY = populatedData[3],
      school = populatedData[4],
      major = populatedData[5],
      gradYear = populatedData[6],
      loggedIn = loggedIn,
      currentPage = 'editProfile'
      )

@app.route('/companyProfile')
def companyProfile():
   return render_template('companyProfile.html',
                          loggedIn = loggedIn, currentPage = 'companyProfile')

@app.route('/jobBoard', methods=["GET", "POST"])
def jobBoard():
   # Tried to get the dropdown menus to keep their last selected value, but it wasn't working
   # print("job board loaded")
   # if request.method == "POST":
   #    print(request.form.get("fieldDropdown"))
   #    fieldFilterValue = request.form.get("inField")
   # print(fieldFilterValue)
   return render_template('jobBoard.html',
                          loggedIn = loggedIn, jobs = jobsList, currentField = "None", currentPage = 'jobBoard')

@app.route('/savedJobs')
def savedJobs():
   return render_template('savedJobs.html',
                          loggedIn = loggedIn, currentPage = 'savedJobs')

@app.route('/gooseTime')
def gooseTime():
   return render_template('gooseTime.html',
                          loggedIn = loggedIn, currentPage = 'gooseTime') 

@app.route('/logIn', methods=["GET", "POST"])
def logIn():
   # If we're submitting log-in information, redirect to the user profile page
   if request.method == "POST":
      global loggedIn
      loggedIn = True
      return redirect(url_for("userProfile"))
   # Otherwise, direct to the login page
   return render_template('logIn.html',
                          loggedIn = loggedIn, currentPage = 'logIn')

@app.route('/logOut')
def logOut():
   # clear user profile info
   global userProfileInfo
   userProfileInfo = {
      "fName":None,
      "lName":None,
      "bDate":None,
      "asMDY":None,
      "school":None,
      "major":None,
      "gradYear":None,
      "email": None,
      "phone": None,
      "password": None,
   }
   global loggedIn
   loggedIn = False
   print("Logging user out: Redirecting to home")
   return redirect(url_for("Home"))


@app.route('/createProfile', methods=["GET","POST"])
def createProfile():
   if request.method == "POST":
      userProfileInfo["fName"]    = request.form.get("fName")
      userProfileInfo["lName"]    = request.form.get("lName")
      userProfileInfo["bDate"]    = request.form.get("bDate")
      userProfileInfo["school"]   = request.form.get("school")
      userProfileInfo["major"]    = request.form.get("major")
      userProfileInfo["gradYear"] = request.form.get("gradYear")
      userProfileInfo["email"]    = request.form.get("email")
      userProfileInfo["phone"]    = request.form.get("phone")
      userProfileInfo["password"] = request.form.get("password")
      dateInputToString(userProfileInfo["bDate"])
      global loggedIn
      loggedIn = True
      return redirect(url_for("userProfile"))
   return render_template('createProfile.html', currentPage = 'createProfile')

def dateInputToString(dateInput):
   items = dateInput.split("-")
   day = items[2]
   month = items[1]
   year = items[0]
   newDateString = month+"-"+day+"-"+year
   print("here: " + newDateString)
   userProfileInfo["asMDY"] = newDateString

if __name__ == '__main__':
   app.run(debug=True)