# Country Info App

## Overview
This project is a full-stack web application that provides information about countries. It uses Express.js for the backend and Next.js for the frontend.

## Prerequisites
- Node.js (recommended version 18.x or later)
- npm or Yarn
- Git

## Project Structure
```
country-info-app/
│
├── back/         # Backend Express.js server
├── front/        # Frontend Next.js application
└── README.md     # Project documentation
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Typhs/country-info-app
cd country-info-app
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd back/

# Install dependencies
npm install

# Start the development server
npm run dev
```
The backend server will start on the default port 3001.

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../front/

# Install dependencies
yarn install

# Start the development server
yarn dev
```
The frontend server will start on the default port 3000.

## Configuration

### Port Configuration
The default ports are:
- Frontend: 3000
- Backend: 3001

If these ports are occupied, you can modify them in the respective `.env` files.

> **Note:** While `.env` files are committed in this demo for ease of setup, it is generally not recommended to commit environment files to version control in production projects.

## Running the Application
After following the setup steps, both the frontend and backend servers should be running:
- Backend: `http://localhost:3001`
- Frontend: `http://localhost:3000`

## Troubleshooting
- Ensure all dependencies are installed correctly
- Check that no other services are using ports 3000 and 3001
- Verify Node.js and npm/yarn are installed and up to date

## Contributing
Please read the contributing guidelines before making any changes or submitting pull requests.

## License
[Add your license information here]