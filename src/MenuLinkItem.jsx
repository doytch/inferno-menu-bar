import Inferno from 'inferno'; // eslint-disable-line no-unused-vars
import { Link } from 'inferno-router';

const MenuLinkItem = props => (
    <li className={`menu-item menu-link-item ${props.className} ${props.unpadded ? 'menu-item__unpadded' : ''}`}>
        <Link {...props}>{props.children}</Link>
    </li>
);

MenuLinkItem.defaultProps = {
    className: '',
};

export default MenuLinkItem;

