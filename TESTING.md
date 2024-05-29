# Table of Contents

1. [Frontend Testing](#frontend-testing)
   - [Code Validator Checks](#code-validator-checks)
     - [W3C HTML Validation Results](#w3c-html-validation-results)
     - [W3C CSS Validation Results](#w3c-css-validation-results)
   - [Lighthouse Testing](#lighthouse-testing)
   - [Automated Testing](#automated-testing)
   - [Browser Compatibility](#browser-compatibility)
2. [Backend Testing](#backend-testing)
   - [Automated Testing](#automated-testing-backend)
   - [Bugs](#bugs)

---

## Frontend Testing

### Code Validator Checks

#### W3C HTML Validation Results

![HTML testing](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717019538/Screenshot_2024-05-29_at_22.42.23_wagoly.png)

#### W3C CSS Validation Results

![CSS testing](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717019538/Screenshot_2024-05-29_at_22.42.37_ebkfl6.png)

### Lighthouse Testing

![Lighthouse](https://res.cloudinary.com/dbjm35bjd/image/upload/v1717019537/Screenshot_2024-05-29_at_22.45.49_hyy3v0.png)

The Lighthouse testing was done and attempted to rectify the performance however was unsuccessful within the project time span

- Performance: 51
- Accessibility: 91
- Best Practices: 78
- SEO: 100

### Automated Testing

All Django apps were tested with test.py and didn't receive any errors. I have manually tested these and checked all console.logs.

I also used JSLINT to ensure all code was optimal and correct for deployment and performance.

### Browser Compatibility

I used Chrome Developer Tools to ensure responsiveness on all devices and I also tested on all browsers for compatibility:

- Firefox Version
- Safari on macOS 
- Chrome Version

Currently, there is a bug causing unexpected glitches within the entire navigation bar, when interacting with the Explore and Feed navigation dropdown menus.

## Backend Testing

### Automated Testing

Automated tests were written into the drf_api to test user. All apps automated tests were created to cover the following apps: posts, events, comments, likes, and profiles. All tests passed.

### Bugs


#### Development Bugs

- One Major Bug I had found throughout the devlopment was images not being PUT requested and not being updated into CLOUDINARY. This was due to a library not being installed wihtin Heruko to allow the functionality to be accesed.

- Another Major Bug I had was default profiles weren't being loaded as profiles wer created. This was due to the API storing old image default files for older profiles. This meant the images no longer existed hence why there was a placeholder text.

#### Current Bugs 

- There are no current bugs within the website


