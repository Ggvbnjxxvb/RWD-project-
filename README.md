# Resource Hub

A modern, full-stack web application for organizing and discovering useful tools and websites. Built with React, Node.js, and Express.

## Features

- 🎯 **6 Main Categories**: Technical Help, Creative, General Help, YouTube Channels, Learning Resources, and Job Platforms
- 🎨 **Modern UI**: Beautiful, responsive design with smooth animations
- 🔍 **Easy Navigation**: Click on any category to view all resources in that category
- 🌐 **Website Previews**: Visual previews for each resource
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Backend**: Node.js, Express
- **Styling**: CSS3 with modern design patterns

## Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

## Development

To run the application in development mode:

```bash
npm run dev
```

This will start both the React development server and the Express server concurrently.

Or run them separately:

```bash
# Terminal 1: Start React dev server
npm run client

# Terminal 2: Start Express server
npm run server
```

The React app will be available at `http://localhost:3000`
The Express server will run on `http://localhost:5000`

## Building for Production

1. Build the React application:
```bash
npm run build
```

This creates an optimized production build in the `build` directory.

2. Start the production server:
```bash
npm start
```

The application will be available at `http://localhost:5000` (or the port specified in the PORT environment variable).

## Deployment

### Deploy to Heroku

1. Create a Heroku app:
```bash
heroku create your-app-name
```

2. Set the buildpack (if needed):
```bash
heroku buildpacks:set heroku/nodejs
```

3. Deploy:
```bash
git push heroku main
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Railway

1. Connect your GitHub repository to Railway
2. Railway will automatically detect Node.js and deploy
3. Make sure to set the build command: `npm run build`
4. Set the start command: `npm start`

### Deploy to Render

1. Create a new Web Service on Render
2. Connect your repository
3. Set:
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Environment: Node

### Environment Variables

For production, you may want to set:
- `PORT`: Server port (defaults to 5000)
- `NODE_ENV`: Set to `production`

## Project Structure

```
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── HomePage.js     # Homepage with category cards
│   │   ├── HomePage.css
│   │   ├── CategoryPage.js # Category page with resources
│   │   └── CategoryPage.css
│   ├── App.js              # Main app component with routing
│   ├── App.css             # Global app styles
│   ├── data.js             # Categories and resources data
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── server.js               # Express server
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Adding New Resources

To add new resources, edit `src/data.js`:

```javascript
export const resources = [
  {
    name: "Resource Name",
    desc: "Description of the resource",
    url: "https://example.com",
    cat: 1  // Category ID (1-6)
  },
  // ... more resources
];
```

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue on the repository.
