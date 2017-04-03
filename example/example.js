/* eslint-disable */

import Inferno from 'inferno';
import { Router, Route } from 'inferno-router';
import { MenuBar, MenuItem, MenuLinkItem, Menu, MenuSeparator, MenuAnchorItem } from '../src/lib';

import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const onSelect = selected => console.log(`Selected "${selected}`);

const Example = (
    <MenuBar onSelect={onSelect}>
        <MenuAnchorItem href='https://github.com/doytch'>My Github</MenuAnchorItem>
        <MenuItem label='Tools'>
            <Menu>
                <MenuAnchorItem href='http://google.com'>Tool D</MenuAnchorItem>
                <MenuAnchorItem href='http://bbc.com'>Tool E</MenuAnchorItem>
                <MenuAnchorItem href='http://reddit.com'>Tool F</MenuAnchorItem>
                <MenuSeparator />
                <MenuItem label='More Tools...'>
                    <Menu>
                        <MenuAnchorItem href='http://google.com'>Tool D</MenuAnchorItem>
                        <MenuAnchorItem href='http://bbc.com'>Tool E</MenuAnchorItem>
                        <MenuAnchorItem href='http://reddit.com'>Tool F</MenuAnchorItem>
                    </Menu>
                </MenuItem>
            </Menu>
        </MenuItem>
    </MenuBar>
);

const Home = () => <div>Home</div>;
const A = () => <div>a</div>;
const B = () => <div>b</div>;
const C = () => <div>c</div>;
const About = () => <div>About</div>;

const routes = (
    <Router history={browserHistory}>
        <Route component={ Example }>
            <Route path='/' component={ Home } />
            <Route path='/a' component={ A } />
            <Route path='/b' component={ B } />
            <Route path='/c' component={ C } />
            <Route path='/about' component={ About } />
        </Route>
    </Router>
);

Inferno.render(Example, document.getElementById('app'));
