import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false
        }
    }

    componentWillMount() {
        if (this.props.itemEditting && this.props.itemEditting.id !== null) {
            this.setState ({
                id : this.props.itemEditting.id,
                name : this.props.itemEditting.name,
                status : this.props.itemEditting.status
            });
        } else {
            this.onClear();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditting) {
            this.setState ({
                id : nextProps.itemEditting.id,
                name : nextProps.itemEditting.name,
                status : nextProps.itemEditting.status
            });
        } else if (!nextProps.itemEditting) {
            this.setState ({
                id : '',
                name : '',
                status : false
            });
        }
    }

    onExitForm = () => {
        this.props.onCloseForm();
    }

    onHandleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;

        if (name === 'status') {
            value = value === 'true' ? true : false;
        }

        this.setState({
            [name] : value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
        // Cancel and close form
        this.onClear();
        this.props.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name : '',
            status : false
        });
    }

  render() {
    var { id, name, status } = this.state;
    var { isDisplayForm } = this.props;

    if (!isDisplayForm) return null;
    return (        
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    { id !== '' ? "Chỉnh Sửa Công Việc" : "Thêm Công Việc"}
                    <span className="fa fa-times-circle text-right" onClick={ this.onExitForm }></span>                    
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input type="text" className="form-control" name="name" value={ name } onChange={ this.onHandleChange } />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" required="required" name="status" value={ status } onChange={ this.onHandleChange } >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={ this.onClear }>Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditting: state.itemEditting 
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask : (task) => {
            dispatch(actions.addTask(task));
        },
        onCloseForm: () => {
            dispatch(actions.closeForm());
        }
        
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
