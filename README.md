# 🧪 Cypress Testing Playground

This repository contains a series of personal projects where I apply my knowledge of **Cypress**, a powerful tool for end-to-end (E2E) testing of web applications. Here, you'll find different approaches to interacting with UIs and APIs, automating testing tasks efficiently and with clear structure.

## 📁 Project Structure

This repository includes the following test files:

### 1. `sauces1.cy.js`
Automated tests on the [Sauce Demo](https://www.saucedemo.com/) website:

- Login with various users (`standard_user`, `locked_out_user`, `problem_user`, etc.).
- Error validation for incorrect credentials.
- Use of custom commands like `cy.typeLogin()` and `cy.logout()` for better code reusability and clarity.

### 2. `todo.cy.js`

Tests for handling HTTP requests using Cypress (API Testing):

- Response validation (`status`, `headers`, `response body`).
- Use of aliases to manage request responses (`@getTodos`).
Tests for the to-do list functionality at [example.cypress.io](https://example.cypress.io/todo):

- Checking and deleting tasks.
- Automatically adding new tasks.
- Verifying completed vs. pending tasks.

## 🚀 Technologies Used

- [Cypress](https://www.cypress.io/) 12.x+
- JavaScript (ES6)

