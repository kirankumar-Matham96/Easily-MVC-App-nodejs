# Easily Job Search App (NODE-MVC)

A Node.js application to search, apply for jobs, and create and post new jobs for recruiters. Built with the MVC (Model-View-Controller) pattern.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- Job search functionality
- Apply for jobs
- Recruiters can create, post new jobs and manage them by utilizing resource-based authorization
- Pagination for job listings

## Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kirankumar-Matham96/Easily-MVC-App-nodejs.git

   cd job-portal-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

[comment]: <> (This is a comment, it will not be included)
[comment]: <> 3. Set up environment variables:
[comment]: <> - Create a `.env` file in the root directory and add the following:
[comment]: <> `env
[comment]: <>        PORT=3000
[comment]: <>        DATABASE_URL=mongodb://localhost:27017/job-portal
[comment]: <>        SESSION_SECRET=your_secret_key
[comment]: <>        `

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3200`

## Usage

- **Search for Jobs**: Use the search bar on the homepage to find jobs by keywords.
- **Apply for Jobs**: Click on a job listing and fill out the application form.
- **Create and Post Jobs**: Recruiters can log in and use the 'Create Job' button to post new job listings.

## Project Structure

job-portal-app/
├── src/
│ ├── controllers/
│ │ └── jobs.controller.js
│ │ └── user.controller.js
│ ├── middlewares/
│ │ └── auth.middleware.js
│ │ └── jobValidation.middleware.js
│ │ └── lastVisit.middleware.js
│ │ └── mailer.middleware.js
│ │ └── multer.middleware.js
│ │ └── userValidation.middleware.js
│ ├── models/
│ │ └── applicant.model.js
│ │ └── jobs.model.js
│ │ └── user.model.js
│ ├── views/
│ │ └── applicants.ejs
│ │ └── error.ejs
│ │ └── home.ejs
│ │ └── job-details.ejs
│ │ └── jobs.ejs
│ │ └── index.ejs
│ │ └── layout.ejs
│ │ └── login.ejs
│ │ └── post-new-job.ejs
│ │ └── update-job.ejs
│ └── index.js
├──public/
| ├── assets/
│ │ └── icon.svg
│ ├── CSS/
│ │ └── main.css
│ ├── files/
│ │ └── resume.pdf
│ ├── images/
│ │ └── image.png
│ └── JS/
│ └── main.js
├── .gitignore
├── package.json
└── README.md

## API Endpoints

### User Routes

- `POST /register`: Register a new user
- `POST /login`: Login a user
- `GET /logout`: Logout a user

### Job Routes

- `GET /jobs`: Get all job listings with pagination
- `POST /jobs`: Create a new job (Recruiter only)
- `GET /jobs/:id`: Get a specific job by ID
- `POST /jobs/:id/applicants`: Apply for a job

## Technologies Used

- Node.js
- Express
- Express-ejs-layouts (Embedded JavaScript Templates)
- Express-session (for authentication)
- express-validator (for validation)
- Cookie-parses (for tracking last visit)
- Multer (for file handling)
- Nodemailer (for email confirmation)
- uuid (for unique id generation)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

### NOTE:

    please use prefixes for the commit messages as fallowing:

    - feat: for adding a feature
    - bug-fix: for fixing a bug
    - update: for any update
    - refractor: for any logic or syntax modifications

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
