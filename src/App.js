import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { NotificationContainer } from 'react-notifications';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layer from './components/UI/Layer/Layer';
import Login from './container/Login/Login';
import Register from './container/Register/Register';

const darkTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

function App() {
  const user = useSelector((state) => state.users.user);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Layer>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          {!user && <Redirect to='login' />}
        </Switch>
      </Layer>
      <NotificationContainer />
    </ThemeProvider>
  );
}

export default App;
