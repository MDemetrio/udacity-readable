import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class CommentsList extends Component {
    render() {
        const { postComments } = this.props;
        return (
            <div style={{'backgroundColor': 'lightGrey'}}>
                <ul>
                    {postComments.map(c => (
                        <div key={c.id}>
                            {c.id}
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}

CommentsList.propTypes = {
    postComments: PropTypes.array.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CommentsList));