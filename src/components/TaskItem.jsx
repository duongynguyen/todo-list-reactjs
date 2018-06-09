import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }

  render() {
    var { task, index } = this.props; // var task = this.props.task;
    return (      
        <tr>
            <td>{ index }</td>
            <td>{ task.name }</td>
            <td className="text-center">
                <span className={ task.status ? "label label-success" : "label label-danger" } onClick={this.onUpdateStatus}>
                    { task.status ? "Kích Hoạt" : "Ẩn" }
                </span>
            </td>
            <td className="text-center">
                <button type="button" className="btn btn-warning" onClick={this.onUpdate}>
                    <span className="fa fa-pencil mr-5"></span>Sửa
                </button>
                &nbsp;
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.onDelete}
                >
                    <span className="fa fa-trash mr-5"></span>Xóa
                </button>
            </td>
        </tr>
    );
  }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteTask: (id) => {
            dispatch(actions.deleteTask(id));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        },
        onUpdateStatus: (id) => {
            dispatch(actions.updateStatus(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
