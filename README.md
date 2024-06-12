# Company's Budget Allocation App (React)

This project is a React application designed to help companies manage and allocate their budget across various departments.

## Features
Budget Setup: Define the total company budget for a specific period.

Department Allocation: Allocate the budget amongst different departments:
* Marketing
* Finance
* Sales
* HR
* IT

![](budget_allocation.png)

## Visualization:

Remaining Budget: View the remaining budget after allocations are made. This updates dynamically.

Spent Amount (Optional): Track actual spending within each department.

Modification Controls:
* Increase/Decrease Buttons: Each department section has buttons to increase or decrease their allocated budget by a 10 monetary unit.
* Currency Selection: Choose the currency unit displayed throughout the app (e.g., USD, EUR).

## Technology Stack
* Frontend: React, bootstrap, and react-icons
* State Management: React Reducer and Context API (for managing budget, allocations, currency)
* Data Storage: Local storage

## Getting Started

This section include instructions on how to clone the repository, install dependencies, and run the application.

Clone the repository:

    git clone https://github.com/RodolfoAndrade/ejtos-react_budget_app.git

Open Visual Studio Code, then open the cloned folder, with a new terminal type the command to install the dependencies:

    npm install

To run the application:

    npm start
