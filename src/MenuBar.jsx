import Inferno from 'inferno'; // eslint-disable-line no-unused-vars

require('./MenuBar.css');

const MenuBar = props => (
    <nav>
        <ul className={`menu-bar ${props.className}`}>
            {
                props.children.map(Node =>
                    <Node.type {...props} {...Node.props}>
                        {Node.props.children || Node.children}
                    </Node.type>)
            }
        </ul>
    </nav>
);

MenuBar.defaultProps = {
    className: '',
};

export default MenuBar;
