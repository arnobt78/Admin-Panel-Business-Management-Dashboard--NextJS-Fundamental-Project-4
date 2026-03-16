# Admin Panel Business Management Dashboard - React Frontend

A modern, fully-featured, and customizable admin dashboard built with React, Material-UI, Nivo charts, and more. This project is designed for learning, rapid prototyping, and real-world admin panel use cases.

- **Live-Demo:** [https://admin-panel-user-dashboard.netlify.app/](https://admin-panel-user-dashboard.netlify.app/)

![Screenshot 2025-08-05 at 02 20 11](https://github.com/user-attachments/assets/683ecb88-f092-4dac-9d0f-15f677caf62f)
![Screenshot 2025-08-05 at 02 22 24](https://github.com/user-attachments/assets/972c4883-9351-4d6c-9937-d973c9972637)
![Screenshot 2025-08-05 at 02 22 53](https://github.com/user-attachments/assets/9742e5e5-3255-4d7b-b240-bc70d0121045)
![Screenshot 2025-08-05 at 02 23 10](https://github.com/user-attachments/assets/7c28d515-cc9e-47a4-a50c-09ee22a7f26e)
![Screenshot 2025-08-05 at 02 23 24](https://github.com/user-attachments/assets/9f5b896b-4928-46f8-9007-d7f3a80b5900)
![Screenshot 2025-08-05 at 02 23 39](https://github.com/user-attachments/assets/d9729cc3-2f96-44a0-bf2b-e512950eef3d)
![Screenshot 2025-08-05 at 02 24 14](https://github.com/user-attachments/assets/9f7556e6-3814-44c8-8cbe-5df5af0549ce)
![Screenshot 2025-08-05 at 02 24 36](https://github.com/user-attachments/assets/105b1e35-db8e-4ab1-8b6c-0ab81418eab5)
![Screenshot 2025-08-05 at 02 24 56](https://github.com/user-attachments/assets/cf1dbb4d-eca5-4eed-9866-ce1fb6f7930e)
![Screenshot 2025-08-05 at 02 25 10](https://github.com/user-attachments/assets/0b081ee8-f992-498c-9a3f-80c6e3df72fa)
![Screenshot 2025-08-05 at 02 25 24](https://github.com/user-attachments/assets/afd638bf-ad41-43a4-9b41-9b81885ad747)
![Screenshot 2025-08-05 at 02 25 48](https://github.com/user-attachments/assets/438916a2-0972-4144-87bf-a86f17df5132)

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Component Walkthrough](#component-walkthrough)
- [Pages & Routes](#pages--routes)
- [Customization & Theming](#customization--theming)
- [Reusing Components](#reusing-components)
- [Example Usage](#example-usage)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [Happy Coding! 🎉](#happy-coding-)

---

## Project Overview

A modern, fully featured, customizable admin panel/dashboard provides a robust foundation for building data-driven applications built with React, Material-UI, Nivo, Pie, Line, geography charts. It features a responsive sidebar, topbar, multiple data visualization charts, data grids, forms, file export, calendar, user/employee management, and more. The project demonstrates best practices in React, state management, theming, and component reuse.

---

## Features

- Responsive sidebar navigation with collapse/expand
- Dashboard with summary stats and charts
- Team management with data grid
- Contacts and invoices tables
- Profile form and calendar
- FAQ accordion
- Multiple chart types (Bar, Line, Pie, Geography) using Nivo
- Light/dark theme toggle
- Context-based sidebar state
- Fully customizable and extendable

---

## Tech Stack

- **React** (v18+)
- **Material-UI** (MUI v5)
- **Nivo** (charts)
- **react-pro-sidebar** (sidebar navigation)
- **react-router-dom** (routing)
- **Formik & Yup** (forms and validation)
- **FullCalendar** (calendar)
- **@mui/x-data-grid** (data tables)
- **Custom theming** (context, tokens)
- **Mock data** for demonstration

---

## Project Structure

```bash
admin-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── user.png
├── src/
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   ├── theme.js
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── StatBox.jsx
│   │   ├── ProgressCircle.jsx
│   │   ├── LineChart.jsx
│   │   ├── BarChart.jsx
│   │   ├── PieChart.jsx
│   │   └── GeographyChart.jsx
│   ├── data/
│   │   ├── mockData.js
│   │   └── mockGeoFeatures.js
│   └── scenes/
│       ├── global/
│       │   ├── Sidebar.jsx
│       │   ├── SidebarContext.js
│       │   └── Topbar.jsx
│       ├── dashboard/
│       │   └── index.jsx
│       ├── team/
│       │   └── index.jsx
│       ├── contacts/
│       │   └── index.jsx
│       ├── invoices/
│       │   └── index.jsx
│       ├── form/
│       │   └── index.jsx
│       ├── calendar/
│       │   └── calendar.jsx
│       ├── faq/
│       │   └── index.jsx
│       ├── bar/
│       │   └── index.jsx
│       ├── pie/
│       │   └── index.jsx
│       ├── line/
│       │   └── index.jsx
│       └── geography/
│           └── index.jsx
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard
npm install
# or
yarn install
```

### Running the App

```bash
npm start
# or
yarn start
```

The app will run at [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm test` — Runs tests (if any are defined).

---

## Component Walkthrough

### Sidebar & Topbar

- **Sidebar.jsx**: Responsive navigation with collapse/expand, user profile, and menu items. Uses `react-pro-sidebar` and Material-UI for styling. The sidebar state is managed via React context (`SidebarContext.js`).
- **Topbar.jsx**: Contains theme toggle and user actions. Uses Material-UI icons and context for theme switching.

### Dashboard

- **Dashboard/index.jsx**: Main landing page with summary stats, charts, and recent transactions. Uses `StatBox`, `ProgressCircle`, and chart components for a rich overview.

### Data Grids

- **Team, Contacts, Invoices**: Use MUI DataGrid for tabular data, sorting, and filtering. Data is provided via mock data files for demonstration.

### Charts

- **BarChart, LineChart, PieChart, GeographyChart**: Nivo-powered, theme-aware, and reusable. Each chart component receives props for dashboard or standalone use, and is styled to match the current theme.

### Other Pages

- **Form**: Profile form with Formik/Yup validation, demonstrating controlled forms and validation.
- **Calendar**: Interactive calendar with event management, using FullCalendar and plugins for day, week, and list views.
- **FAQ**: Accordion-based FAQ section using Material-UI's Accordion components.

---

## Pages & Routes

| Route        | Component | Description                |
| ------------ | --------- | -------------------------- |
| `/`          | Dashboard | Main dashboard overview    |
| `/team`      | Team      | Team management grid       |
| `/contacts`  | Contacts  | Contacts data grid         |
| `/invoices`  | Invoices  | Invoices data grid         |
| `/form`      | Form      | Profile form               |
| `/calendar`  | Calendar  | Full-featured calendar     |
| `/faq`       | FAQ       | FAQ accordion              |
| `/bar`       | Bar       | Bar chart visualization    |
| `/pie`       | Pie       | Pie chart visualization    |
| `/line`      | Line      | Line chart visualization   |
| `/geography` | Geography | Geography/choropleth chart |

---

## Customization & Theming

- Theme is managed via `theme.js` and Material-UI's ThemeProvider. The `tokens` function provides color palettes for light and dark modes.
- Light/dark mode toggle is available in the topbar and is managed via React context (`ColorModeContext`).
- All components use theme tokens for consistent styling and easy customization.

---

## Reusing Components

All components are modular and can be reused in other projects:

- **Charts**: Import any chart component and pass your own data/props. Example:

```jsx
import BarChart from "./components/BarChart";

<BarChart isDashboard={false} />;
```

- **StatBox, ProgressCircle, Header**: Use for summary stats, progress indicators, and section headers. Example:

```jsx
import StatBox from "./components/StatBox";

<StatBox
  title="1,000"
  subtitle="New Users"
  progress="0.8"
  increase="+20%"
  icon={<YourIcon />}
/>;
```

- **Sidebar/Topbar**: Adapt for your own navigation needs. The sidebar is context-aware and can be collapsed/expanded from anywhere in the app.

---

## Example Usage

To add a new page:

1. Create a new folder and `index.jsx` in `src/scenes/yourpage/`.
2. Add a route in `App.js`:

```jsx
<Route path="/yourpage" element={<YourPage />} />
```

1. Add a menu item in `Sidebar.jsx`:

```jsx
<Item title="Your Page" to="/yourpage" icon={<YourIcon />} ... />
```

---

## Code Explanation & Learning Content

- **App.js**: The root component. Sets up theme, context, sidebar state, and routes. Example:

```jsx
<ColorModeContext.Provider value={colorMode}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>{/* ...routes... */}</Routes>
        </main>
      </div>
    </SidebarContext.Provider>
  </ThemeProvider>
</ColorModeContext.Provider>
```

- **Sidebar.jsx**: Uses `react-pro-sidebar` for navigation. The `Item` component is used for each menu entry. The sidebar can be collapsed/expanded, and the selected menu is highlighted.

- **theme.js**: Exports color tokens and theme configuration. The `tokens` function provides a palette for both light and dark modes, and the theme is created using Material-UI's `createTheme`.

- **Charts**: All chart components use Nivo's responsive chart components and are styled with the current theme. Example for `LineChart.jsx`:

```jsx
<ResponsiveLine
  data={data}
  theme={{
    axis: {
      /* ... */
    },
    legends: {
      /* ... */
    },
    tooltip: {
      /* ... */
    },
  }}
  colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
  /* ...other props... */
/>
```

- **Context**: Sidebar and theme state are managed via React context, making it easy to access and update from any component.

- **Data**: All data is mocked for demonstration and can be replaced with real API calls as needed.

---

## Keywords

React, Admin Dashboard, Material-UI, Nivo, DataGrid, Sidebar, Theming, Charts, Responsive, Context, Formik, FullCalendar, Data Visualization, SPA, Modern UI, Reusable Components, Learning, Boilerplate

---

## Conclusion

This project is a complete, modern admin dashboard template and learning resource. It demonstrates best practices in React, theming, component design, and dashboard UX. Use it as a starting point for your own admin panels or as a reference for learning advanced React patterns.

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
