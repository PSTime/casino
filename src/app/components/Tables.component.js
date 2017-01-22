import React, {Component} from 'react';

class Tables extends Component {

  static get propTypes() {
    return {
      tables: React.PropTypes.array.isRequired,
      getTables: React.PropTypes.func
    };
  }

  handleOnGetTables() {
    const {getTables} = this.props;
    getTables();
  }

  render() {
    return (<h1>Tables {this.props.tables}<button className="btn" onClick={this.handleOnGetTables}>Button</button></h1>);
  }
}
export default Tables;
