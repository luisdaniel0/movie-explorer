Movie Explorer App

A React-based movie discovery application that fetches and displays movies from The Movie Database (TMDB) API. Users can browse movies by category and navigate through a custom-built carousel.

## Features Implemented

### Core Functionality

- **Dynamic Movie Fetching**: Integrates with TMDB API to fetch trending movies and movies by genre
- **Category Filtering**: Browse movies by different genres (Trending, Action, Romance, Animation, Horror, TV Film, Fantasy)
- **Custom Carousel**: Built-from-scratch carousel with Previous/Next navigation showing 7 movies per page
- **Hero Section**: Displays 2 featured movies with backdrop images
- **Loading States**: Proper handling of async data with loading indicators

### React Concepts Covered

- **Component Architecture**: Organized into reusable components (Navbar, Hero, Categories, MovieCard)
- **State Management**: Using `useState` for managing movies, selected category, loading state, and carousel pagination
- **Side Effects**: Using `useEffect` for API calls and watching state changes
- **Props**: Passing data and functions between parent and child components
- **Conditional Rendering**: Showing/hiding content based on state (loading, active categories)
- **Event Handling**: onClick handlers for navigation and category selection
- **Lists and Keys**: Mapping over arrays to render multiple components

### Styling Techniques

- **Flexbox**: Used for layouts (navbar, categories, movie grids)
- **Conditional CSS Classes**: Dynamic styling based on active state
- **CSS Positioning**: Overlaying text on hero images
