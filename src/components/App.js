import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import ViewAllItems from './ViewAllItems';
import EditDictionaryItem from './EditDictionaryItem';
import Header from './Header';
import NotFound from './404';

const App = () => (
  <>
    <Router hashType="slash">
      <Header />
      <main id="content" className="main-content container" role="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/all" component={ViewAllItems} />
          <Route path="/edit/:id" component={EditDictionaryItem} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  </>
);

export default App;