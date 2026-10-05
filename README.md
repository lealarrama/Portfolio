# Leandro Larrama Klam — Developer Portfolio

Personal portfolio of a Dublin-based Computing Science student seeking a first professional opportunity in software development. The website introduces my background, showcases personal web applications and provides a way to get in touch.

**Live website:** [portfolio-leandro-larrama-klam.netlify.app](https://portfolio-leandro-larrama-klam.netlify.app/)

The live website reflects the latest deployment; local changes appear there after being deployed.

## Features

- Responsive layout with desktop and mobile navigation.
- Introduction and About me sections covering my education, technical interests and previous experience.
- Two project cards covering a Veterinary Patient Manager and an Expense Planner, with features, involvement, learning focus, GitHub links and live demos.
- Light and dark themes, with the user's preference saved in localStorage. On a first visit, the theme follows the device setting.
- Contact form with required-field validation, a sending indicator and protection against duplicate submissions.
- In-page confirmation after a successful submission, cleared form fields and a Back to Home button. If a submission cannot be confirmed, the entered message is retained.

## Technologies

React 18, JavaScript, Vite, Tailwind CSS, React Icons and React Type Animation. Contact submissions use the existing Getform endpoint. Typography uses DM Sans and Manrope from Google Fonts; the cover photograph is hosted on Unsplash.

## Run locally

Install a Node.js version compatible with Vite 4 and npm, then run:

```bash
git clone https://github.com/lealarrama/Portfolio.git
cd Portfolio
npm ci
npm run dev
```

If the repository is already cloned, open its folder and start with `npm ci`.
Open the local URL displayed in the terminal. Vite updates the page as source files are saved.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`. The preview command serves that build locally.

For Netlify, use `npm run build` as the build command and `dist` as the publish directory. If automatic deployments are configured, pushing to the connected deployment branch triggers a new deployment.

## Edit the portfolio

| File | Purpose |
| --- | --- |
| `src/components/First.jsx` | Introduction, cover image and social links |
| `src/components/Resume.jsx` | About me text |
| `src/components/Project.jsx` | Project descriptions and demo links |
| `src/components/PojectItem.jsx` | Shared project card layout |
| `src/components/Contact.jsx` | Contact fields, endpoint and submission handling |
| `src/components/ThemeToggle.jsx` | Theme switch and saved preference |
| `src/components/Sidenav.jsx` | Desktop and mobile navigation |
| `src/components/Footer.jsx` | Footer |
| `src/index.css` | Typography, layout details and theme styles |
| `index.html` | Page metadata, font loading and initial theme |

The `PojectItem.jsx` filename retains its original spelling.

## Contact form configuration

The endpoint is defined in `src/components/Contact.jsx`. Replace it with your own form endpoint if reusing the project. Submissions are sent with `fetch` and request a JSON response so visitors stay on the portfolio.

Successful delivery depends on the form provider, its account configuration and permitted domains. Verify a real submission after deployment, including receipt in the provider's dashboard or configured inbox. A successful build alone does not verify delivery.

## External resources

The cover image and fonts require an internet connection. System fonts are provided as a fallback. The theme preference is stored only in the visitor's browser; theme switching still works if browser storage is unavailable.

## Author

[Leandro Larrama Klam on GitHub](https://github.com/lealarrama) · [LinkedIn](https://www.linkedin.com/in/leandro-larrama-klam-743691131/)
