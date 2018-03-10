import React from 'react';

export default class Range extends React.Component {
  render() {
    const name = this.props.name;
    const min = this.props.min;
    const max = this.props.max;
    const step = this.props.step;
    const value = this.props.value;
    return (
      <div className="form-group">
        <label htmlFor={name}> {name} </label> : {value}
        <input type="range" id={name} min={min} max={max} step={step} value={value} className="form-control"
          onChange={(e) => this.props.onRangeChange(e)}/>
      </div>
    );
  }
}

