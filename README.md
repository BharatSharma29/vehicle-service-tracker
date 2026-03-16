# Vehicle Service Tracker Application

## Running the Application (Local Development)

Follow these steps to run the application on your local machine.

### Step 1 — Clone the Repository

Clone the project repository from GitHub.

git clone https://github.com/BharatSharma29/vehicle-service-tracker

Move into the project directory.

cd vehicle-service-tracker

---

## Backend Setup

### Step 2 — Install Backend Dependencies

Navigate to the backend folder.

cd backend
npm install

---

### Step 3 — Configure Environment Variables

Create a file called `.env` inside the **backend** directory.

Example `.env` file:

PORT=5001
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/vehicleTracker

Explanation:

- **PORT** defines the port where the backend server will run.
- **MONGO_URI** is the connection string for the MongoDB Atlas database.

---

### Step 4 — Start Backend Server

Run the backend server.

npm run dev

The backend API will run at: http://localhost:5001

---

## Frontend Setup

Open a new terminal and navigate to the frontend folder.

cd frontend

---

### Step 5 — Install Frontend Dependencies

npm install

---

### Step 6 — Configure Frontend Environment Variables

Create a `.env` file inside the **frontend** folder.

Example:

REACT_APP_API_URL=http://localhost:5001/api

This variable tells the React application where the backend API is located.

---

### Step 7 — Start React Application

npm start

The frontend will run at: http://localhost:3000

Open the browser and navigate to this address to use the application.

---

# Project Description

The **Vehicle Service Tracker** is a full-stack web application designed to store and manage vehicle information.

Users can add vehicles, view stored vehicles and remove vehicles from the system. The application demonstrates a dynamic cloud-based web system where user input is processed by a backend API and stored in a cloud database.

The system was developed as part of the **Cloud DevOpsSec module project** and demonstrates how modern web applications can be built, deployed and maintained using DevOps practices.

---

# Application Features

The system supports the following functionality:

Create — Add a new vehicle  
Read — View all stored vehicles  
Update — Modify vehicle information  
Delete — Remove vehicles from the database  

Each vehicle record contains:

- Vehicle Make
- Vehicle Model
- Vehicle Year
- Vehicle Mileage

All data is stored in a cloud database and retrieved dynamically via API requests.

---

# Technology Stack

## Frontend

- ReactJS
- HTML
- CSS
- Axios (API communication)

The frontend provides the user interface and communicates with the backend API.

---

## Backend

- Node.js
- Express.js

The backend handles API requests, processes user input and communicates with the database.

---

## Database

- MongoDB Atlas (Cloud Database)

MongoDB Atlas stores vehicle information in a managed cloud database.

---

# Cloud Deployment Architecture

The application is deployed using AWS cloud services.

Architecture overview:

User Browser
│
▼
AWS S3 (React Frontend Hosting)
│
▼
AWS EC2 (Node.js Express Backend)
│
▼
MongoDB Atlas Cloud Database

### AWS Services Used

**Amazon S3**

Hosts the React frontend as a static website.

**Amazon EC2**

Runs the Node.js Express backend server.

**IAM**

Provides secure authentication between GitHub Actions and AWS resources.

**MongoDB Atlas**

Stores application data in a managed cloud database.

---

# CI/CD Pipeline

The project uses a Continuous Integration and Continuous Deployment pipeline implemented with **GitHub Actions**.

Pipeline workflow:

1. Developer modifies code locally.
2. Code is pushed to the GitHub repository.
3. GitHub Actions pipeline is automatically triggered.
4. Static code analysis is performed.
5. Security vulnerability scanning is executed.
6. React frontend is built.
7. The frontend build is deployed to AWS S3.
8. Backend updates are deployed to the EC2 instance.

This process ensures that the application can be updated automatically whenever new code is pushed.

---

# Static Code Analysis

Static code analysis is performed using **ESLint** to identify potential coding issues and enforce code quality standards.

This helps detect:

- syntax errors
- unused variables
- inconsistent code patterns

---

# Security Vulnerability Scanning

Security scanning is performed using **npm audit**.

This tool checks project dependencies for known vulnerabilities and recommends secure versions.

---

# API Endpoints

The backend provides REST API endpoints for vehicle management.

### Get all vehicles

GET /api/vehicles

Returns a list of all vehicles stored in the database.

---

### Add a vehicle

POST /api/vehicles

Adds a new vehicle record.

---

### Update a vehicle

PUT /api/vehicles/:id

Updates vehicle information.

---

### Delete a vehicle

DELETE /api/vehicles/:id

Removes a vehicle from the database.

---

# Project Structure

vehicle-service-tracker
│
├── backend
│ ├── config
│ │ └── db.js
│ ├── models
│ │ └── Vehicle.js
│ ├── routes
│ │ └── vehicleRoutes.js
│ ├── server.js
│ └── package.json
│
├── frontend
│ ├── public
│ ├── src
│ │ ├── components
│ │ ├── App.js
│ │ ├── App.css
│ │ └── index.js
│ └── package.json
│
├── .github/workflows
│ └── pipeline.yml
│
├── .gitignore
└── README.md

---

# Learning Outcomes Demonstrated

This project demonstrates the following skills:

- Development of a full stack web application
- Implementation of CRUD functionality
- Integration of cloud database services
- Deployment of applications to AWS cloud infrastructure
- Implementation of CI/CD pipelines
- Static code analysis and vulnerability scanning
- Secure configuration using environment variables

---

# Author

Bharat Kishanlal Sharma
24246115  
MSc Cloud Computing  
National College of Ireland