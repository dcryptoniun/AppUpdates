# AppUpdates

A simple web application to display current public versions of games and apps using GitHub Pages.

## 🌐 Live Demo

Visit the live page: `https://dcryptoniun.github.io/AppUpdates/`

## 📋 Features

- 🎮 Display current versions of games and apps
- 📊 Color-coded status badges (Stable, Beta, Alpha)
- 📱 Responsive design for mobile and desktop
- 🎨 Modern gradient UI with card-based layout
- 📅 Shows release dates for each version
- ⚡ Fast loading with vanilla JavaScript

## 🚀 Setup for GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages section
3. Under "Source", select the branch (e.g., `main` or `copilot/add-basic-html-js-css`)
4. Click Save
5. Your site will be published at `https://dcryptoniun.github.io/AppUpdates/`

## 📝 Usage

### Updating Version Information

Edit the `appupdate.json` file to update game and app versions:

```json
{
  "games": [
    {
      "name": "Your Game Name",
      "version": "1.0.0",
      "releaseDate": "2024-01-15",
      "status": "stable",
      "description": "Description of your game"
    }
  ],
  "apps": [
    {
      "name": "Your App Name",
      "version": "2.0.0",
      "releaseDate": "2024-06-20",
      "status": "beta",
      "description": "Description of your app"
    }
  ]
}
```

### Status Types

- `stable` - Production-ready releases (green badge)
- `beta` - Testing releases (yellow badge)
- `alpha` - Early development releases (red badge)

## 📁 File Structure

- `index.html` - Main HTML page
- `styles.css` - Styling and layout
- `script.js` - JavaScript for fetching and displaying data
- `appupdate.json` - Version data for games and apps

## 🛠️ Local Development

To test locally:

```bash
# Start a local web server
python3 -m http.server 8000

# Visit http://localhost:8000 in your browser
```

## 📄 License

This project is open source and available for use.