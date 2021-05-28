import React from 'react';
import{Provider} from 'react-redux';
import store from '../redux/store';
import { CookiesProvider } from 'react-cookie';
import URL from '../URL/url'

import {
    BrowserRouter as Route, 
  } from "react-router-dom";

function App() {
 
  
 return(
  <Provider store={store}>
    <CookiesProvider>
    <Route>
    
     <URL/>
     </Route>
     </CookiesProvider>
     </Provider>
 )

}

export default App;
