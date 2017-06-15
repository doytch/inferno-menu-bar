import Inferno from 'inferno'; // eslint-disable-line no-unused-vars

const MenuAnchorItem = props => (
    <li className={`menu-item menu-anchor-item ${props.className} ${props.unpadded ? 'menu-item__unpadded' : ''}`}>
        <a {...props}>{props.children}</a>
    </li>
);

MenuAnchorItem.defaultProps = {
    className: '',
};

export default MenuAnchorItem;

