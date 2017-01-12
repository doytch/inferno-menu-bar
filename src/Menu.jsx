import Inferno from 'inferno'; // eslint-disable-line no-unused-vars

const Menu = (props) => {
    const children = props.children;
    children.forEach((child) => {
        child.props.onSelect = props.onSelect;
    });

    return <ul className='menu'>{children}</ul>;
};

export default Menu;
