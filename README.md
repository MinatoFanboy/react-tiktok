# Tiktok Clone

[![NodeJS Version](https://img.shields.io/badge/node-22.1.0-green)](https://nodejs.org/en/download/package-manager) [![ReactJS Version](https://img.shields.io/badge/react-18.2.0-blue)](https://react.dev)

## Setup

### Terminal Commands

1. [Install Node JS](https://nodejs.org/en/download/)
1. Download or clone this repository
1. Install dependencies

    ```bash
    npm install
    ```

1. Start dev server

    ```bash
    npm run dev
    ```

1. Open `localhost:3000` on your browser and start coding 🔥

## Usage:

The repository contains sample UI components for building your application.

Folder structure:

-   **`src`**: Contains all the logic source code of your ReactJS App. Inside the `src` folder:

    -   **`assets/fonts`**: Fonts for app.
    -   **`assets/images`**: Images that should be imported directly into bundle source code.
    -   **`components`**: Reusable components written in React.JS.
    -   **`config`**: Route definitions for application.
    -   **`hooks`**: Custom hook like debounce, v.v....
    -   **`examples`**: A Example is a component written to layouts.
    -   **`hooks`**: Hook to use global state.
    -   **`layouts`**: A Layout is also a component wrapper pages.
    -   **`pages`**: Views must be registered inside `routes.tsx` as a [Route](https://reactrouter.com/en/main/).
    -   **`services`**: Services manage events API.
    -   **`utils`**: Utility functions/helpers.
    -   **`App.js`**: Your main application component.
    -   **`index.js`**: Entry point of your React App.

The other files (such as `jsconfig.json`) are configurations for libraries used in your application. Visit the library's documentation to learn how to use them.
