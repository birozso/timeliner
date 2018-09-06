import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'

const groups = [{ id: 1, title: 'Rock&Roll' }, { id: 2, title: 'Blues' }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'Pink Floyd',
    start_time: moment(),
    end_time: moment().add(1, 'day')
  },
  {
    id: 2,
    group: 2,
    title: 'Muddy Waters',
    start_time: moment().add(-1, 'day'),
    end_time: moment().add(0.5, 'day')
  },
  {
    id: 3,
    group: 1,
    title: 'Red Hot Ch P',
    start_time: moment().add(2, 'day'),
    end_time: moment().add(3, 'day')
  }
]

ReactDOM.render(
  <div>
    Rendered by react!
    <Timeline
      groups={groups}
      items={items}
      defaultTimeStart={moment().add(-1, 'year')}
      defaultTimeEnd={moment().add(1, 'year')}
    />
  </div>,
  document.getElementById('root')
)



registerServiceWorker();
