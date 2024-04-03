import PropTypes from 'prop-types';
const AuthProvider = ({children}) => {
   
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}