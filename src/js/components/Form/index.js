import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle, changeCurrentTitle, removeArticle } from "../../actions/index";



class Form extends Component {
    render() {
        const { currentTitle, onSave, onTitleChange,onRemove } = this.props;
        return (
            <form >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTitle}
                        onChange={onTitleChange}
                    />
                </div>
                <button onClick={(evt) => onSave(currentTitle, evt)} className="btn btn-success btn-lg">
                    SAVE
                </button>
                <button onClick={(evt) => onRemove(currentTitle, evt)} className="btn btn-success btn-lg">
                    REMOVE
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSave: (title, event) => {
            event.preventDefault();
            const id = uuidv1();
            if (title) {
                dispatch(addArticle({ title, id }));
                dispatch(changeCurrentTitle(""));
            }
        },
        onRemove: (title, event) => {
            event.preventDefault();
            if (title) {
                dispatch(removeArticle( title ));
            }
        },
        onTitleChange: (event) => {
            dispatch(changeCurrentTitle(event.target.value));
        }
    };
};

const mapStateToProps = state => {
    return { currentTitle: state.currentTitle }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);
