import Topbar from "./Scenes/global/topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./Scenes/dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Scenes/global/sidebar";
// import Team from "./Scenes/team";
// import Invoices from "./Scenes/invoices";
// import Contacts from "./Scenes/contacts";
// import Bar from "./Scenes/bar";
// import Form from "./Scenes/form";
// import Line from "./Scenes/line";
// import Pie from "./Scenes/pie";
// import FAQ from "./Scenes/faq";
// import Geography from "./Scenes/geography";

// import { Calendar } from "@fullcalendar/core/index.js";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </div>
          ;
        </ThemeProvider>
      </ColorModeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
