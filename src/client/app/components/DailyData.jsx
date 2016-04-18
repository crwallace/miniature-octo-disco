import React from 'react';

import TextField from 'material-ui/lib/text-field';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';


class DailyData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 2};
  }

  handleChange (value) {
    this.setState({value});
  }

  render () {
    return (
      <div>
      <p>This is our daily data form.</p>
      <TextField hintText="e.g. Day 1" floatingLabelText="Day of Cycle"/><br/>
      <DatePicker floatingLabelText="Today's Date" hintText="Portrait Dialog" />
      <TextField hintText="e.g. Monday" floatingLabelText="Day of the Week"/><br/>
      <TextField hintText="e.g. Full Moon" floatingLabelText="Phase of the Moon"/><br/>
      </div>);
  }
}

export default DailyData;