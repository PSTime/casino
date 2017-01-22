import React, {Component} from 'react';
import TABLES_TYPES from '../constants/tablesTypes.constant';
import find from 'lodash/find';

/*
one table in list
 */
class OneTable extends Component {

  static get propTypes() {
    return {
      table: React.PropTypes.object.isRequired
    };
  }

  _renderImageByTypeTitle() {
    // i use this method, because in table list I don`t have typeID, or something like that
    const {table} = this.props;
    const type = find(TABLES_TYPES, t => table.type === t.title);
    if (type) {
      return <i className={type.icon}/>;
    }
  }

  render() {
    const {table} = this.props;
    return (<tr className={table.warning ? 'warning' : null}>
      <td>{table.id}</td>
      <td>{this._renderImageByTypeTitle()} {table.type}</td>
      <td>{table.name}</td>
      <td>{table.players}</td>
      <td>{table.maxPlayers}</td>
    </tr>);
  }
}

export default OneTable;
