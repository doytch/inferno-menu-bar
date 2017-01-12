import Inferno from 'inferno'; // eslint-disable-line no-unused-vars
import MenuItem from './MenuItem';
import MenuLinkItem from './MenuLinkItem';
import Menu from './Menu';
import MenuSeparator from './MenuSeparator';
import MenuAnchorItem from './MenuAnchorItem';

require('./MenuBar.css');

const MenuBar = props => (
    <nav>
        <ul className='menu-bar'>
            {
                props.children.map(Node =>
                    <Node.type {...props} {...Node.props}>
                        {Node.props.children || Node.children}
                    </Node.type>)
            }
        </ul>
    </nav>
);

export default MenuBar;
export {
    MenuItem,
    MenuLinkItem,
    Menu,
    MenuSeparator,
    MenuAnchorItem,
};
