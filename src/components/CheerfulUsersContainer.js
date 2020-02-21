import React from 'react'
import CheerfulUsers from "./CheerfulUsers";

// State
import { connect } from 'react-redux'

import { fetchUsersRequest, fetchPositionsRequest } from "../store/CheerfulUsers/actions";

const mapStateToProps = state => ({
    users: state.cheerfulUsers.users,
    page: state.cheerfulUsers.page,
    total_pages: state.cheerfulUsers.total_pages,
    message: state.cheerfulUsers.message,
    positions: state.page.positions,
});

const mapDispatchToProps = {
    fetchUsersRequest,
    fetchPositionsRequest
};
//

class CheerfulUsersContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPositionsRequest();
        this.props.fetchUsersRequest();
    }

    render() {
        return <CheerfulUsers
            users={this.props.users}
            message={this.props.message}
            positions={this.props.positions}
            showMoreButton={!(this.props.page === this.props.total_pages)}
            fetchUsersRequest={this.props.fetchUsersRequest}
        />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheerfulUsersContainer);