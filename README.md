# Bath Cloth Nappy Library

A website for the Bath Cloth Nappy Library, a not-for-profit organization providing reusable nappy hire kits to families in Bath, UK.

## Features

- Responsive design using Tailwind CSS and DaisyUI
- Information about cloth nappy hire kits
- Contact form and booking system
- Modern, accessible UI components

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with CSS watching:

```bash
npm run dev
```

This will:
- Watch for changes in your HTML files
- Automatically rebuild the CSS when changes are detected
- Output the compiled CSS to `assets/css/style.css`

### Production Build

To create a production build:

```bash
npm run build
```

This will create a minified CSS file for production use.

## Project Structure

```
├── assets/
│   └── css/
│       └── style.css          # Compiled CSS (generated)
├── src/
│   └── input.css              # Tailwind CSS source file
├── *.html                     # HTML pages
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies and scripts
```

## Technologies Used

- **Tailwind CSS v3** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## License

This project is for the Bath Cloth Nappy Library, a not-for-profit organization.
