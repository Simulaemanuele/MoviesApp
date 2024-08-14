# MoviesApp

**MoviesApp** is a fake streaming application built with React Native. This app allows users to browse and search for movies, providing real-time data fetched from an external API. This is a demo application created for learning purposes.

## Features

- **Real-time Data**: Fetches real-time movie data from an external API.
- **Search Functionality**: Allows users to search for movies.
- **Movie Details**: Displays detailed information about selected movies, including description, release date, and ratings.
- **Navigation**: Smooth navigation between screens using React Router.
- **TypeScript**: Built entirely with TypeScript for robust type-checking and development efficiency.

## Tech Stack

- **React Native**: Cross-platform mobile app development framework.
- **TypeScript**: Strongly-typed superset of JavaScript.
- **React Router**: Used for managing in-app navigation.
- **External API**: Fetches movie data in real-time.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/MoviesApp.git
    cd MoviesApp
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the app:**

    - For iOS:
  
        ```bash
        npx react-native run-ios
        ```

    - For Android:

        ```bash
        npx react-native run-android
        ```

## Usage

- **Home Screen**: Displays a list of popular movies fetched from the external API.
- **Search**: Users can search for specific movies by typing in the search bar.
- **Movie Details**: Clicking on a movie will navigate to a details screen where more information about the movie is displayed.

## External API

This app fetches movie data from an external API. Make sure to configure your API key in the project settings.

## Try It Out

If you want to try out the app without setting up the development environment, you can:

1. **Switch to the `deploy` branch:**

    ```bash
    git checkout deploy
    ```

2. **Download the APK**: 

   After switching to the `deploy` branch, you can find the pre-built APK file available for download. This APK can be installed directly on an Android device.

