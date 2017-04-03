import Inferno, { linkEvent } from 'inferno'; // eslint-disable-line no-unused-vars

const MenuItem = (props) => {
    const contents = [
        <a href='#' onClick={linkEvent(props.command, props.onSelect)}>
            {props.label || props.children}
        </a>,
    ];

    if ((typeof props.label !== 'undefined') && (typeof props.children === 'object')) {
        props.children.props.onSelect = props.onSelect;
        contents.push(props.children);
    }

    return (
        <li className={`menu-item ${props.unpadded ? 'menu-item__unpadded' : ''}`}>
            {contents}
        </li>
    );
};

export default MenuItem;
