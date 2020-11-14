import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import firebase from '../../firebase'
import React from 'react';
import { STATE_LOGIN} from 'components/AuthForm';
import { FiGitPullRequest,FiChrome } from 'react-icons/fi';
import {
  MdAccountCircle,
  MdSentimentSatisfied,
  MdViewList,
  MdPoll,
  MdBusinessCenter,MdStorage,MdAssignmentLate,
  MdGroup,
  MdLocalLibrary
} from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import {
  // UncontrolledTooltip,
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


const navItemsS = [
  { to: '/profiles', name: 'profile', exact: false, Icon: MdAccountCircle },
  { to: '/studentCourseList', name: 'Class-Schedule', exact: false, Icon: MdLocalLibrary },
  { to: '/', name: 'enrollment', exact: false, Icon: MdLocalLibrary },
  { to: '/', name: 'course-lists', exact: false, Icon: MdViewList },
  { to: '/request', name: 'req-certificate', exact: false, Icon: FiGitPullRequest },
  { to: '/gpa', name: 'gpa info', exact: false, Icon: MdPoll },
  { to: '/suggest', name: 'suggestion form', exact: false, Icon: MdSentimentSatisfied },
];

const navItemsD = [
  { to: '/login-modal', name: 'Login', exact: true, Icon: MdAccountCircle },
  { to: '/news-board', name: 'News-Board', exact: true, Icon: FiChrome },
  { to: '/prof-profiles', name:"Professors-Lists", exact: false, Icon: MdAccountCircle},
  { to: '/course-class', name: 'Course-Class', exact: false, Icon: MdLocalLibrary },
  { to: '/stu-search', name: 'Student-Timetable', exact: false, Icon: MdGroup },
  { to: '/ins-search', name: 'Instructor-Timetable', exact: false, Icon: MdBusinessCenter },
  { to: '/aca-calender', name: 'Academic-Calender', exact: false, Icon: MdStorage },
  { to: '/faqs', name: 'FAQs', exact: false, Icon: MdAssignmentLate },
];


const bem = bn.create('sidebar');


class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    authState: STATE_LOGIN,
    sideBarD: true,
    sideBarT: false,
    sideBarS: false
  };

  handleAuthState = authState => {
    this.setState({
      authState,
    });
  };
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user, sideBarD: false,sideBarS: true
        });
        console.log(this.state)
      }else{
        this.setState({sideBarD: true,sideBarS: false})
      }
    })
  }
  


  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  
  render() {
    console.log(this.state.currentUser);
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

          {(() => {
          if (this.state.sideBarD) {
          return <Nav vertical>
            {navItemsD.map(({ to, name, exact, Icon }, index) => (
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
            }
          })()}

          {(() => {
          if (this.state.sideBarS) {
          return <Nav vertical>
            {navItemsS.map(({ to, name, exact, Icon }, index) => (
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
            }
          })()}
        </div>
      </aside>
      
    );
  }
}

export default Sidebar;



