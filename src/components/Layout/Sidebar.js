import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { 
  FaUserTimes 
} from 'react-icons/fa';
import { FiGitPullRequest } from 'react-icons/fi';
import {
  MdAccountCircle,
  MdSentimentSatisfied,
  MdViewList,
  MdPoll,
  MdLocalLibrary
} from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};


const navItems1 = [
  { to: '/tables', name: 'TableTutorial', exact: true, Icon: MdAccountCircle },
  { to: '/profiles', name: 'profile', exact: false, Icon: MdAccountCircle },
  { to: '/prof-profiles', name:"Professors", exact: false, Icon: MdAccountCircle},
  { to: '/', name: 'enrollment', exact: false, Icon: MdLocalLibrary },
  { to: '/', name: 'course list', exact: false, Icon: MdViewList },
  { to: '/forms', name: 'req-certificate', exact: false, Icon: FiGitPullRequest },
  { to: '/gpa', name: 'gpa info', exact: false, Icon: MdPoll },
  { to: '/suggest', name: 'suggestion form', exact: false, Icon: MdSentimentSatisfied },
  { to: '/', name: 'logout', exact: false, Icon: FaUserTimes }
];


const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={logo200Image}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">
                - SIIT WebSite - 
              </span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            {navItems1.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;

