import { Switch, Route } from 'react-router-dom';

import HomeFeed from './HomeFeed.js';

function App() {
  return (
    <div className='app-container'>
      <h1 className='app-title'>Spacestagram</h1>
      <p className='app-description'>
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </p>
      <Switch>
        <Route exact path='/' component={HomeFeed} />
      </Switch>
    </div>
  );
}

export default App;
