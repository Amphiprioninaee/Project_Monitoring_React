
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import LoginPage from "./components/LoginPage";

// function App() {
//   const action = useNavigate();
//   const location = useLocation();
//   const pathname = location.pathname;

//   useEffect(() => {
//     if (action !== "POP") {
//       window.scrollTo(0, 0);
//     }
//   }, [action, pathname]);

//   useEffect(() => {
//     let title = "";
//     let metaDescription = "";

//     switch (pathname) {
//       case "/":
//         title = "";
//         metaDescription = "";
//         break;
//     }

//     if (title) {
//       document.title = title;
//     }

//     if (metaDescription) {
//       const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
//       if (metaDescriptionTag) {
//         metaDescriptionTag.content = metaDescription;
//       }
//     }
//   }, [pathname]);

//   return (
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//     </Routes>
//   );
// }

// function MainApp() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default MainApp;

import React from "react";
// import { Loginn } from "./path-to-your-Loginn-component"; // Sesuaikan dengan path yang benar
import { Loginn } from "./components/loginn";

function App() {
  return (
    <div>
      {/* Isi dengan komponen Loginn */}
      <Loginn />
    </div>
  );
}

export default App;
