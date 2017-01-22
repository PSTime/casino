import React, {Component} from 'react';
import OneTable from './OneTable.component';

/*
list of tables
 */
class Tables extends Component {

  static get propTypes() {
    return {
      tables: React.PropTypes.array.isRequired,
      getTables: React.PropTypes.func
    };
  }

  componentDidMount() {
    const {getTables} = this.props;
    getTables();
  }

  render() {
    return (<div className="row column">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
            <th>Players</th>
            <th>MaxPlayers</th>
          </tr>
        </thead>
        <tbody>
        {this.props.tables.map(table => {
          return (<OneTable table={table} key={table.id}/>);
        })}
        </tbody>
      </table>
    </div>);
  }
}
export default Tables;
