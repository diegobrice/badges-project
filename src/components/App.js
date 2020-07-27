import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import Home from "../pages/Home";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          {/* <Route component={NotFound} /> */}
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
