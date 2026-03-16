# Vehicle Service Tracker Application

## Project Overview

The Vehicle Service Tracker is a dynamic cloud-based web application that allows users to manage vehicle information and track vehicle service records.

The purpose of this project is to demonstrate the development, deployment and secure operation of a cloud-hosted web application using modern DevOps practices. The project was developed as part of the Cloud DevOpsSec module in the MSc Cloud Computing programme.

The application allows users to store vehicle information such as make, model, year and mileage. Users can add new vehicles, view existing vehicles and remove vehicles from the system. All information is stored in a cloud database.

The application demonstrates the following concepts:

• Full stack web application development  
• Cloud database integration  
• CRUD operations  
• Input validation  
• Continuous Integration and Continuous Deployment (CI/CD)  
• Static code analysis and security vulnerability scanning  
• Cloud application deployment  

---

## Application Features

The application provides the following functionality:

Create – Users can add a new vehicle  
Read – Users can view stored vehicles  
Update – Vehicle information can be updated  
Delete – Vehicles can be removed from the system  

Vehicle information stored in the system includes:

Make  
Model  
Year  
Mileage  

The system validates user input to ensure that incorrect or invalid data cannot be stored in the database.

---

## Technology Stack

Frontend  
ReactJS  
CSS  

Backend  
Node.js  
ExpressJS  

Database  
MongoDB Atlas (Cloud Database)

DevOps Tools  
GitHub  
GitHub Actions  
Static Code Analysis Tools  
Security Vulnerability Scanning Tools  

Cloud Platform  
Render Cloud Hosting Platform

---

## System Architecture

User Browser  
↓  
React Frontend  
↓  
Express Backend API  
↓  
MongoDB Atlas Cloud Database  

The React frontend communicates with the Express backend using HTTP API requests. The backend processes these requests and performs database operations using MongoDB.

---

## Running the Application Locally

### Step 1 – Clone the Repository

git clone <repository-url>


---

### Step 2 – Install Backend Dependencies

Navigate to the backend folder.

cd backend
npm install


---

### Step 3 – Configure Environment Variables

Create a file called `.env` inside the backend folder.

Add the following values:

MONGO_URI=<your-mongodb-atlas-connection-string>
PORT=5000


---

### Step 4 – Start Backend Server


The backend API will run on:

http://localhost:5000


---

### Step 5 – Install Frontend Dependencies

Navigate to the frontend folder.

cd frontend
npm install


---

### Step 6 – Start React Application

npm start


The frontend will run on:

http://localhost:3000


---

## Cloud Deployment

The application is deployed to the cloud using a CI/CD pipeline.

Deployment process:

1. Developer modifies the application code locally using an IDE.
2. The code is pushed to a private GitHub repository.
3. A CI/CD pipeline automatically runs.
4. Static code analysis is performed to detect code issues.
5. Security vulnerability scanning checks for security risks.
6. The application is built and deployed to the cloud platform.
7. The deployed application becomes available through a public URL.

---

## Learning Outcomes Demonstrated

This project demonstrates the following key concepts:

Development of a dynamic web application  
Implementation of CRUD functionality  
Secure input validation  
Cloud database integration  
CI/CD pipeline implementation  
Static code analysis  
Security vulnerability detection and remediation  
Deployment of applications to a public cloud environment

---

## Author

Bharat Kishanlal Sharma 
24246115  
MSc Cloud Computing  
National College of Ireland