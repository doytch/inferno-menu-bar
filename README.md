# inferno-menu-bar
A library of menu bar components for [Inferno](https://github.com/infernojs/inferno).

- Supports dropdowns and nested menus.
- Basic styling out of the box.
- Classes all over the place to let you CSS your heart out.

##Modules Provided
###MenuBar
The top-level component that actually creates the bar itself.
####onSelect: `function(command)`
This function will get called every time a descendant `MenuItem` is clicked. The `command` argument's value will be the value of `command` for the clicked `MenuItem`.

###MenuItem
Used for JS callbacks and submenus.
`<MenuItem command='foo'>Foo</MenuItem>`
####command: `string`
The value to pass to the `onSelect` callback.

`<MenuItem label='Opens a Menu'><Menu>...</Menu></MenuItem>`
####label: `string`
Normally, a `MenuItem`'s children will be used for the label. However, if the children are supposed to be a `Menu`, use this property to set the label.

###MenuLinkItem
Used for links that should be created using `<Link>` components from `inferno-router`.
`<MenuLinkItem to='/apage'>A Page</MenuLinkItem>`
####props
All props are passed directly to the `<Link>` created.

###MenuAnchorItem
Used for links that should be created using a raw `<a>` node.
`<MenuAnchorItem title='Weee' href='https://github.com/doytch'>My Github</MenuAnchorItem>`
####props
All props are passed directly to the `<a>` created.

###Menu
Used to create a dropdown menu. Nest other components inside it.

###MenuSeparator
Creates an `<hr />` element.

##Requirements
- `inferno >= 1.0.0`
- `inferno-router >= 1.0.0`

##Installation
`npm install --save inferno-menu-bar`

##Usage
```
import { MenuBar, MenuItem, MenuLinkItem, Menu, MenuSeparator, MenuAnchorItem } from 'inferno-menu-bar';

const onSelect = command => console.log(`Selection: ${command}`);

const MyMenu = () => (
    <MenuBar onSelect={onSelect}>
        <MenuLinkItem to='/' unpadded>
            <img alt='home' src='/path/to/logo.png' />
        </MenuLinkItem>
        <MenuLinkItem to='/about'>About</MenuLinkItem>
        <MenuItem label='Tools'>
            <Menu>
                <MenuItem command='A'>Tool A</MenuItem>
                <MenuItem command='B'>Tool B</MenuItem>
                <MenuItem command='C'>Tool C</MenuItem>
                <MenuSeparator />
                <MenuAnchorItem href='http://externalsite.com' title='Visit External Site!'>External Site</MenuAnchorItem>
            </Menu>
        </MenuItem>
    </MenuBar>
);
