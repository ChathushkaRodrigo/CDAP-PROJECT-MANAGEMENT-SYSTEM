import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";





import ViewFeedback from "./components/screens/ViewFeedback";
import ViewMarks from "./components/screens/ViewFeedback";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
        
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route exact path="/viewfeedback" component={ViewFeedback} />
         <Route exact path="/viewmarks" component={ViewMarks}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
