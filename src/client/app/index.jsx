import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Card from 'material-ui/lib/card/card';
import DailyData from './components/DailyData.jsx'
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class App extends React.Component {
  render () {
    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
      },
    };
    return (
        <Card>
        <h1>Please enter your information.</h1>
        <Tabs>
          <Tab label="Add Daily Data" >
            <div>
                <DailyData/>
            </div>
          </Tab>
          <Tab label="View Current Cycle" >
            <div>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab label="View Previous Cycle" >
            <div>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
        </Card>
        );
  }
}

render(<App/>, document.getElementById('app'));
