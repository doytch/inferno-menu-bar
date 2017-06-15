import Inferno from 'inferno'; // eslint-disable-line no-unused-vars

const Menu = (props) => {
    const children = props.children;
    children.forEach((child) => {
        child.props.onSelect = props.onSelect;
    });

    return <ul className={`menu ${props.className}`}>{children}</ul>;
};

Menu.defaultProps = {
    className: '',
};

export default Menu;
