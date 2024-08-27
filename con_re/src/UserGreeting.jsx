import PropTypes from 'prop-types'
function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h2 className="welcome-message">Welcome {props.username}</h2>
    }
    else {
        return <h2 className="error">Error</h2>
    }
    // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Error</h2>)

}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    usernameL: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting