import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './HOC/ProtectedRoute';
import Login from './container/Login/Login';
import Register from './container/Register/Register';
import NewEventNote from './container/NewEventNote/NewEventNote';
import Layout from './components/UI/Layout/Layout';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

function App() {
  const user = useSelector((state) => state.users.user);
  return (
    <ThemeProvider theme={darkTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <ProtectedRoute
              path='/event-note/new'
              isAllowed={user !== null}
              redirectTo={'/login'}
              exact
              component={NewEventNote}
            />

            {!user && <Redirect to='login' />}
          </Switch>
        </Layout>
        <NotificationContainer />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
