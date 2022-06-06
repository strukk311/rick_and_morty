import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import { Characters } from '../Characters/Characters';
import { Episodes } from '../Episodes/Episodes';
import { Locations } from '../Locations/Locations';
import { WatchList } from '../WatchList/WatchList';

export const Main = () => {

  return (
    <main className="Main">
      <Switch>
        <Route exact path="/episodes">
          <Episodes />
        </Route>

        <Route exact path="/locations">
          <Locations />
        </Route>

        <Route exact path="/my_list">
          <WatchList />
        </Route>

        <Route path="/">
          <Characters />
        </Route>
      </Switch>
    </main>
  )
}
