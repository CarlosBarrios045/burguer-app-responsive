import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

// Material UI
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

// Theme
import theme from "./theme";
import GlobalResets from "./theme/globalResets";

// Page
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={"Cargando..."}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalResets />
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
