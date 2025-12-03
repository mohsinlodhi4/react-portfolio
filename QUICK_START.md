# Quick Start Guide - React Portfolio

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates optimized production build in the `build` folder

---

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── Header.jsx    # Navigation header
│   ├── Banner.jsx    # Hero section
│   ├── About.jsx     # Work experience
│   ├── Project.jsx   # Projects showcase
│   ├── Skills.jsx    # Technical skills
│   ├── Education.jsx # Education details
│   └── Footer.jsx    # Contact footer
├── styles/           # Component styles
│   ├── global.css    # Global variables & utilities
│   ├── animations.css# Animation definitions
│   ├── Header.css
│   ├── Banner.css
│   ├── About.css
│   ├── Project.css
│   ├── Skills.css
│   ├── Education.css
│   └── Footer.css
├── Page/             # Page components
│   └── Main.jsx      # Main page layout
├── App.js            # App entry point
└── index.js          # React root
```

---

## 🎨 Customization Guide

### 1. **Update Personal Information**

#### Banner/Hero Section (`src/components/Banner.jsx`)
```javascript
// Update name, title, and description
<h1 className="hero-title mb-4">
  Hi, I'm <span className="text-gradient">Your Name</span>
</h1>

// Update social links
<a href="YOUR_LINKEDIN_URL" ...>
<a href="YOUR_GITHUB_URL" ...>
```

#### About/Experience (`src/components/About.jsx`)
```javascript
// Update the experiences array with your work history
const experiences = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'Location',
    period: 'Start - End',
    logo: '/path/to/logo.png',
    current: true, // or false
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ]
  },
  // Add more experiences...
];
```

#### Projects (`src/components/Project.jsx`)
```javascript
// Update the projects array
const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description...',
    image: '/path/to/image.png',
    category: 'Category',
    featured: true, // or false
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    links: {
      demo: 'https://demo-url.com',
      github: 'https://github.com/user/repo' // or null
    }
  },
  // Add more projects...
];
```

#### Skills (`src/components/Skills.jsx`)
```javascript
// Update skillsData array with your skills
const skillsData = [
  {
    category: 'Category Name',
    icon: <YourIcon />,
    color: '#yourcolor',
    skills: [
      { name: 'Skill', icon: '/path/to/icon.png', level: 'Expert' },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

#### Education (`src/components/Education.jsx`)
```javascript
// Update degree information
<h3 className="degree-title">Your Degree</h3>
<p className="university-name">Your University</p>
<span className="gpa-value">Your GPA</span>

// Update courses
<div className="course-item">
  <div className="course-bullet"></div>
  <span>Course Name</span>
</div>
```

#### Footer Contact (`src/components/Footer.jsx`)
```javascript
// Update email and social links
<a href="mailto:your.email@example.com" ...>
<a href="YOUR_LINKEDIN_URL" ...>
<a href="YOUR_GITHUB_URL" ...>
```

---

### 2. **Update Colors**

Edit `src/styles/global.css`:

```css
:root {
  /* Change these values */
  --primary-purple: #662d91;
  --dark-purple: #4a1f6a;
  --light-bg: #f7f7f9;
  --accent-bg: #f0e9f7;
  --text-dark: #222222;
  --text-gray: #555555;
}
```

---

### 3. **Add Your Images**

1. Place images in `public/images/` folder
2. Reference them in components:
   ```javascript
   <img src="/images/your-image.png" alt="Description" />
   ```

#### Recommended Image Sizes:
- **Profile/Hero Image**: 500x500px (square)
- **Project Images**: 1200x800px (landscape)
- **Company Logos**: 200x200px (square, transparent background)
- **Skill Icons**: 48x48px or 64x64px

---

### 4. **Customize Animations**

AOS is configured in `src/App.js`:

```javascript
AOS.init({
  duration: 1000,    // Animation duration
  once: true,        // Animate only once
  easing: 'ease-out',// Easing function
  offset: 100        // Offset from trigger point
});
```

Available AOS animations:
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `flip-left`, `flip-right`
- `slide-up`, `slide-down`

Use in components:
```javascript
<div data-aos="fade-up" data-aos-delay="100">
  Content
</div>
```

---

## 🎯 Common Tasks

### Add a New Section

1. Create component file: `src/components/YourSection.jsx`
2. Create styles file: `src/styles/YourSection.css`
3. Import and add to `src/Page/Main.jsx`:

```javascript
import YourSection from '../components/YourSection';

const Main = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <YourSection/> {/* Add here */}
      <Footer/>
    </>
  );
};
```

---

### Update Navigation Links

Edit `src/components/Header.jsx`:

```javascript
const navItems = [
  { href: '/', label: 'Home', icon: <FaHome />, id: 'home' },
  { href: '#your-section', label: 'Your Section', icon: <YourIcon />, id: 'your-section' },
  // Add more items...
];
```

Make sure your section has the matching ID:
```javascript
<section id="your-section">
  {/* Section content */}
</section>
```

---

### Change Fonts

1. Add font files to `src/front/webfonts/`
2. Update `src/App.css`:

```css
@font-face {
  font-family: "YourFont";
  src: url("./front/webfonts/YourFont.ttf");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

3. Update `src/styles/global.css`:

```css
:root {
  --font-primary: 'YourFont', sans-serif;
}
```

---

## 🐛 Troubleshooting

### Issue: Styles not loading
**Solution**: Make sure all CSS imports are in the correct order in `App.js`:
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/animations.css';
import './App.css';
```

### Issue: Images not showing
**Solution**: 
- Check image paths (use `/images/name.png` for public folder)
- Verify images exist in `public/images/`
- Check console for 404 errors

### Issue: Animations not working
**Solution**:
- Verify AOS is initialized in `App.js`
- Check that `data-aos` attributes are correct
- Ensure `aos/dist/aos.css` is imported

### Issue: Mobile menu not working
**Solution**:
- Clear browser cache
- Check console for JavaScript errors
- Verify React Icons are installed

---

## 📦 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com)

### Deploy to GitHub Pages
1. Install: `npm install gh-pages --save-dev`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Run: `npm run deploy`

---

## 💡 Tips

1. **Test Responsiveness**: Use browser DevTools (F12) to test different screen sizes
2. **Optimize Images**: Use tools like TinyPNG or Squoosh to compress images
3. **Check Performance**: Use Lighthouse in Chrome DevTools
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Cross-browser Testing**: Test in Chrome, Firefox, Safari, and Edge

---

## 📚 Resources

- **Bootstrap 5 Docs**: https://getbootstrap.com/docs/5.3/
- **React Icons**: https://react-icons.github.io/react-icons/
- **AOS Library**: https://michalsnik.github.io/aos/
- **Color Palette Tools**: https://coolors.co/
- **Image Optimization**: https://squoosh.app/

---

## 🆘 Need Help?

Check the detailed documentation in `UPGRADE_SUMMARY.md` for:
- Complete list of improvements
- Component-by-component breakdown
- Technical specifications
- Design features
- File structure

---

## 🎉 You're All Set!

Your modern portfolio is ready to showcase your work! 🚀

**Remember to**:
- Update all personal information
- Add your projects and experience
- Replace placeholder images
- Test on different devices
- Deploy to your hosting platform

Good luck with your portfolio! 💼✨

