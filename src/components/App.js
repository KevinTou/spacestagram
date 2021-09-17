import { Switch, Route } from 'react-router-dom';

import HomeFeed from './HomeFeed.js';

function App() {
  return (
    <div className='app-container'>
      <h1>Spacestagram</h1>
      <h4>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</h4>
      <Switch>
        <Route exact path='/' component={HomeFeed} />
      </Switch>
    </div>
  );
}

export default App;
