# Order management task - Frontend

This is the frontend application for the Order Management System. It is built with Angular and Angular Material components.

## Getting Started

Follow these steps to get the frontend application up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.
- Angular CLI installed globally (`npm install -g @angular/cli`).

### Installation

1. Clone the frontend repository to your local machine:

```
git clone <frontend_repository_url>
```

2. Navigate to the root directory of the frontend project:

```
cd <frontend_project_directory>
```

3. Install dependencies:

```
npm install
```

### Configuration

If you need to change the API URL, you can modify it in the `environment.ts` file located in the `src/environments` directory.

### Development Server

To start the development server, run the following command:

```
ng serve
```

Navigate to `http://localhost:4200/` in your web browser to view the application.

### Build

To build the project, run the following command:

```
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

To execute unit tests via [Karma](https://karma-runner.github.io), run the following command:

```
ng test
```

To execute end-to-end tests via [Protractor](http://www.protractortest.org/), run the following command:

```
ng e2e
```

### Further Help

To get more help on the Angular CLI or the frontend application in general, run:

```
ng help
```
