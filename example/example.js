/* eslint-disable */

import Inferno from 'inferno';
import { Router, Route } from 'inferno-router';
import { MenuBar, MenuItem, MenuLinkItem, Menu, MenuSeparator, MenuAnchorItem } from '../src/lib';

import createBrowserHistory from 'history/createBrowserHistory';

const browserHistory = createBrowserHistory();

const onSelect = selected => console.log(`"${selected}" clicked!`);

const TheMenuBar = (props) => (
    <div>
        <MenuBar onSelect={onSelect}>
            <MenuLinkItem to='/'>Home</MenuLinkItem>
            <MenuItem command='clicker'>Logger</MenuItem>
            <MenuAnchorItem href='https://github.com/doytch'>My Github</MenuAnchorItem>
            <MenuItem label='Tools'>
                <Menu>
                    <MenuLinkItem className='tool-menu-item' to='/a'>Tool A</MenuLinkItem>
                    <MenuLinkItem className='tool-menu-item' to='/b'>Tool B</MenuLinkItem>
                    <MenuLinkItem className='tool-menu-item' to='/c'>Tool C</MenuLinkItem>
                    <MenuSeparator />
                    <MenuItem label='External Links...'>
                        <Menu>
                            <MenuAnchorItem href='https://ddg.gg'>Duck Duck Go</MenuAnchorItem>
                            <MenuAnchorItem href='https://news.ycombinator.com/'>Hacker News</MenuAnchorItem>
                            <MenuAnchorItem href='https://www.reddit.com/r/hockey/'>Reddit</MenuAnchorItem>
                        </Menu>
                    </MenuItem>
                </Menu>
            </MenuItem>
        </MenuBar>
        { props.children }
    </div>
);

const Home = () => <div>Home</div>;
const A = () => <div>Page A</div>;
const B = () => <div>Page B</div>;
const C = () => <div>Page C</div>;

const Routes = () => (
    <Router history={browserHistory}>
        <Route component={ TheMenuBar }>
            <Route path='/' component={ Home } />
            <Route path='/a' component={ A } />
            <Route path='/b' component={ B } />
            <Route path='/c' component={ C } />
            <Route path='*' component={ Home } />
        </Route>
    </Router>
);

Inferno.render(<Routes />, document.getElementById('app'));
