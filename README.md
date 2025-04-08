# TDD String Calculator

A simple React-based string calculator built using Test Driven Development (TDD).  
This project demonstrates a calculator that accepts a string of numbers (and custom delimiters) and returns their sum, along with proper error handling for invalid inputs such as negative numbers.

## Overview

This project uses TDD practices with Jest and React Testing Library.  
The application consists of a UI component that interacts with a string calculator service.  
It validates the input string, processes different delimiters, and handles errors gracefully.

The application is automatically built and deployed to GitHub Pages.


## Features

- **TDD Development:**  
  Follows the "Red → Green → Refactor" cycle to ensure robust code and tests.
- **Custom Delimiters:**  
  Supports changing delimiters using a syntax like `//[delimiter]\n[numbers]`.
- **Error Handling:**  
  Throws an error with a clear message if negative numbers are provided.
- **Responsive UI:**  
  A simple, clean UI built with React.
- **CI/CD:**  
  Continuous Integration and Deployment set up using GitHub Actions (deploys to GitHub Pages).

## Deployment
  
  This project is automatically deployed to GitHub Pages using GitHub Actions.

  **Deployed URL: https://nvaneethm.github.io/tdd-sample/**

  
  **The deployment workflow:**
  - Runs tests on pushes and pull requests to the main branch.
  - Builds the project.
  - Deploys the contents of the build folder to the gh-pages branch, which is then served by GitHub Pages.


  
