# Travel App Advisor
<br/>

## Table of Contents  

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Demo](#demo)
- [Technologies - Librairies](#technologies-librairies)
- [Installation](#installation)
<br/>

## Introduction

Welcome to our travel advisor app, a dynamic and interactive platform built with React.js and integrated with the Google Maps API. This application allows users to explore restaurants, hotels, and attractions within a specific area. You can view detailed cards for each restaurant, complete with the name, address, rating, price level, type of food, and links to their website and TripAdvisor page. The app also features powerful filtering options, enabling you to refine your search based on rating and price. Experience the convenience of navigating through your favorite destinations with ease.

<br/>

## Project Structure

### 1. API (Backend)

**File: `index.js`**  
- Contains the `getPlacesData` function, which makes API calls to fetch data for restaurants, hotels, and attractions within the specified geographical boundary.
- Uses `axios` for making HTTP requests to the Travel Advisor API.
- Handles API response and error handling for fetching places data.

### 2. Frontend Components (React)

#### a. Header Component
**File: `Header.js`**  
- Displays the header section of the app, including the logo and title "Travel Advisor."
- Includes a search input field for exploring new places and a login button.
- Uses FontAwesome icons for the search icon.

#### b. List Component
**File: `List.js`**  
- Displays a list of places (restaurants, hotels, and attractions) based on the selected type and filters (rating and price).
- Contains dropdowns for filtering places by type, rating, and price.
- Filters the displayed places based on the selected rating and price.
- Maps over the filtered places and renders each one using the `PlaceDetails` component.

#### c. Map Component
**File: `Map.js`**  
- Integrates Google Maps using the `GoogleMapReact` component.
- Displays the map centered on the user’s current coordinates.
- Handles map changes (zoom, pan) and updates the geographical boundaries (coordinates and bounds) for fetching nearby places.

#### d. PlaceDetails Component
**File: `PlaceDetails.js`**  
- Displays detailed information about each place, including:
  - Name
  - Image (fallback if no image is provided)
  - Price level
  - Ranking
  - Rating
  - Cuisine type (chips displaying types of food)
  - Address and phone number (using FontAwesome icons for location and phone)
- Includes buttons that link to the place's TripAdvisor and website.
- Ensures graceful handling of missing data by conditionally rendering components.

<br/>

## Demo

https://github.com/user-attachments/assets/ad3d1134-14f1-4bf6-95b8-7c662711951c


<br/>

## Technologies-Librairies
<br/>
. **react**: The core library for building the user interface.
. **axios**: For making HTTP requests to fetch data from the Travel Advisor API.
. **google-map-react**: A library to integrate Google Maps into the app.
. **@fortawesome**: For including FontAwesome icons in the project.
. **@react-google-maps/api**: For handling Google Maps-related functionality.
. **axios-retry**: For adding retry logic to axios requests in case of failures.
. **Other dependencies**: Includes `react-dom`, `react-scripts`, `web-vitals`, and testing libraries such as `@testing-library/react`.


## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/travel-advisor-app.git
   cd travel-advisor-app

2. **Install dependencies**: Ensure you have Node.js installed, then run:
    ```bash
    npm install

3. **Set up environment variables**:
    . Obtain a Google Maps API key and RapidAPI key for the Travel Advisor API.
    . Create a .env file in the root directory and add your keys:
    ```bash
    REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
    REACT_APP_RAPIDAPI_KEY=your-rapidapi-key

4. **Start the development server**:
    ```bash
    npm start

5. **Access the app**: Once the server is running, open your browser and navigate to:
    ```bash
    http://localhost:3000
    

Your app should now be up and running locally!


