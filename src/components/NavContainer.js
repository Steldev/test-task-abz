import React from 'react'
import Nav from './Nav'

// State
import { connect } from 'react-redux'

import { navToggle } from "../store/Nav/actions";

const mapStateToProps = state => ({
    isNavOpen: state.nav.isNavOpen
});

const mapDispatchToProps = {
    navToggle
};
//

class NavContainer extends React.Component {
    render() {
        return <Nav isNavOpen={this.props.isNavOpen} navToggle={this.props.navToggle} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);