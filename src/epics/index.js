import { Observable } from 'rxjs';
import {fetchStories} from '../services/api';
import { combineEpics } from 'redux-observable';
import { clear, LOAD_STORIES } from '../actions';
import { map } from 'rxjs/operator/map';

function loadStoriesEpic(action$) {
  debugger;
  return action$.ofType(LOAD_STORIES)
  //.map(fetchStories)
   .switchMap(() => {
      return Observable.of(clear()).delay(2000); 
    })
}

export const rootEpic = combineEpics(loadStoriesEpic);
