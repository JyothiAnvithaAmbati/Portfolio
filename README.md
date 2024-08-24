# Portfolio
#README

Overview

This is a personal portfolio website built with React and Django. It showcases my experience, skills, projects, and contact information. 
The website is designed to be responsive and user-friendly, featuring a dynamic navigation bar, various sections about my professional background, and a contact interface.

Features:
Navbar: A responsive navigation bar with links to Home, About Me, Projects, and Contact sections.
Home Section: Introduction and contact details with a brief overview of my professional background.
About Section: Detailed information about my education, experience, skills, and publications.
Projects Section: Detailed information about my projects along with link to GitHub.
Contact Section: Options to connect.

Technologies Used
Frontend: React, CSS
Backend: Django (Not detailed in the snippets but used for backend API and data management)
Other Tools: Font Awesome for icons, and responsive design principles

Project Structure
Frontend
Navbar.js: Contains the navigation bar component.
Navbar.css: Styling for the navigation bar.
Home.js: Displays the home section with an introduction and contact information.
Home.css: Styling for the home section.
About.js: Shows detailed information about education, experience, skills, and publications.
About.css: Styling for the about section.

Backend
Django: Used for backend services, such as serving API endpoints and handling data. 

Installation

Frontend

Clone the repository:
git clone <repository-url>
cd <repository-directory>


Install dependencies:
npm install

Start the development server:
npm start


Backend

Clone the repository:
git clone <repository-url>
cd <repository-directory>

Set up a virtual environment and install dependencies:
python -m venv env
source env/bin/activate  # On Windows use `env\Scripts\activate`
pip install -r requirements.txt

Run migrations and start the server:
python manage.py migrate
python manage.py runserver

Usage
Open the website in your browser: http://localhost:3000 (Frontend) and http://localhost:8000.
Navigate through the sections using the navbar.


