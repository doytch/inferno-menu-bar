import Inferno from 'inferno'; // eslint-disable-line no-unused-vars

const MenuSeparator = props => <hr className={props.className} />;

MenuSeparator.defaultProps = {
    className: '',
};

export default MenuSeparator;
