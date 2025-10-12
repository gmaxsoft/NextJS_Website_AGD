# WEB DEMO

A Next.js 14 project for a service website, featuring optimized images, Google Maps integration, and Bootstrap for styling.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development Dependencies](#development-dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview
This project is a web application built with Next.js 14, designed for a service-based website (Serwis AGD Świebodzin). It includes features like optimized image handling, Google Maps integration, and a responsive design using Bootstrap and Font Awesome icons.
Visit the live demo at [https://www.serwisagd.swiebodzin.pl/](https://www.serwisagd.swiebodzin.pl/).

## Features
- **Next.js 14**: Fast, SEO-friendly React framework with server-side rendering.
- **Optimized Images**: Uses `next-optimized-images` for efficient image loading.
- **Google Maps**: Integrates `@react-google-maps/api` and `@vis.gl/react-google-maps` for map functionality.
- **Responsive Design**: Styled with Bootstrap and custom SCSS.
- **Icons**: Utilizes Font Awesome and Lucide React for icons.
- **Parallax Effects**: Implements `react-parallax` for engaging visuals.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd serwisagd.swiebodzin.pl
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file for environment variables (e.g., Google Maps API key):
   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-api-key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production application.
- `npm run start`: Runs the production server.
- `npm run lint`: Runs the Next.js linter to check for code issues.

## Dependencies
- `@fortawesome/fontawesome`, `@fortawesome/fontawesome-svg-core`, `@fortawesome/free-brands-svg-icons`, `@fortawesome/free-solid-svg-icons`, `@fortawesome/react-fontawesome`: Icon library for UI components.
- `@next/bundle-analyzer`: Analyzes bundle size for optimization.
- `@react-google-maps/api`, `@vis.gl/react-google-maps`: Google Maps integration.
- `bootstrap`, `react-bootstrap`: Styling framework for responsive design.
- `font-awesome`: Additional icon support.
- `imagemin-mozjpeg`, `imagemin-optipng`, `imagemin-svgo`, `next-optimized-images`, `webp-loader`: Image optimization tools.
- `lucide-react`: Modern icon library.
- `next`, `react`, `react-dom`: Core Next.js and React libraries.
- `next-compose-plugins`: Plugin composition for Next.js.
- `react-parallax`: Parallax scrolling effects.

## Development Dependencies
- `@types/node`: TypeScript type definitions for Node.js.
- `file-loader`, `url-loader`: Webpack loaders for assets.
- `sass`: SCSS preprocessor for custom styles.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## License
This project is licensed under the MIT License.