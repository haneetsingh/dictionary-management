import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../helpers/history';

import Home from './Home';
import NotFound from './404';
import Header from './Header';
import DictionaryItem from './DictionaryItem';
import EditDictionary from './EditDictionary';
import AddDictionaryItem from './AddDictionaryItem';
import EditDictionaryItem from './EditDictionaryItem';

const App = () => (
  <div className="page-wrapper">
    <Router history={history}>
      <Header />
      <main id="content" className="main-content" role="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dictionary/:dictionaryId" exact component={DictionaryItem} />
          <Route path="/dictionary/:dictionaryId/edit" component={EditDictionary} />
          <Route path="/dictionary/:dictionaryId/add" component={AddDictionaryItem} />
          <Route path="/item/:itemId/edit" component={EditDictionaryItem} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  </div>
);

export default App;