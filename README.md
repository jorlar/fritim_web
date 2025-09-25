# Fritim AS Promo Website

A modern, responsive React website for Fritim AS showcasing their innovative mobile application and capturing sales leads.

## Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **One-Page Layout**: Smooth scrolling navigation between sections
- **Lead Generation**: Contact form for capturing potential customers
- **Team Showcase**: About section displaying team members
- **App Features**: Highlighting key app capabilities with visual cards
- **Performance**: Optimized React components with modern CSS

## Sections

1. **Hero**: Eye-catching landing section with call-to-action buttons
2. **App Showcase**: Feature highlights and app screenshots placeholder
3. **About Us**: Team member profiles and company story
4. **Contact**: Lead generation form and contact information
5. **Footer**: Company links and additional information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd /Users/jornlarsen/Desktop/Fritim/web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder. The build is optimized for the best performance.

## Customization

### Updating Content

- **Company Information**: Update contact details in `src/components/Contact.js` and `src/components/Footer.js`
- **Team Members**: Modify the team array in `src/components/AboutUs.js`
- **App Features**: Edit the features array in `src/components/AppShowcase.js`
- **Branding**: Update colors and styling in `src/App.css`

### Adding Real Images

Replace the placeholder images in the app showcase section with actual app screenshots:
- Update the app screenshots section in `src/components/AppShowcase.js`
- Add team member photos to `src/components/AboutUs.js`

### Contact Form Integration

The contact form currently simulates submission. To integrate with a real backend:
1. Update the `handleSubmit` function in `src/components/Contact.js`
2. Add your preferred form handling service (Netlify Forms, Formspree, etc.)

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with Flexbox and Grid
- **Google Fonts**: Inter font family for typography
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Fritim AS. All rights reserved.
