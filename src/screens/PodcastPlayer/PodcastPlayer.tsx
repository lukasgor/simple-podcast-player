import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components/macro';
import EpisodePlayer from './screens/EpisodePlayer';
import EpisodesList from './screens/EpisodesList';
import NoMatch from './screens/NoMatch';

const PodcastPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

const PodcastPlayer = () => (
  <Router>
    <PodcastPlayerWrapper>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => <Redirect to="/episodes" />}
        />
        <Route exact={true} path="/episodes" component={EpisodesList} />
        <Route path="/episodes/:episodeId" component={EpisodePlayer} />
        <Route component={NoMatch} />
      </Switch>
    </PodcastPlayerWrapper>
  </Router>
);

export default PodcastPlayer;
