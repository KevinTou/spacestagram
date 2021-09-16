import { Switch, Route } from 'react-router-dom';

import HomeFeed from './HomeFeed.js';

function App() {
  return (
    <>
      <h1>Spacestagram</h1>
      <Switch>
        <Route exact path='/' component={HomeFeed} />
      </Switch>
    </>
  );
}

export default App;
