import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const SuggestPage = React.lazy(() => import('pages/SuggestPage'));
//const CourseSearchPage = React.lazy(() => import('pages/CourseSearchPage'));
const RequestPage = React.lazy(() => import('pages/RequestPage'));
const StuSearchPage = React.lazy(() => import('pages/StuSearchPage'));
//const InsSearchPage = React.lazy(() => import('pages/InsSearchPage'));
const NewsBoardPage = React.lazy(() => import('pages/NewsBoardPage'));
const FAQsPage = React.lazy(() => import('pages/FAQsPage'));
const AcaCalenderPage = React.lazy(() => import('pages/AcaCalenderPage'));
const GPAPage = React.lazy(() => import('pages/GPAPage'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const ProfessorProfile = React.lazy(()=> import('pages/ProfessorProfile'));
const StudentSchedule = React.lazy(()=>import('pages/StudentCourseList'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};


class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={NewsBoardPage} />
                <Route exact path="/login-modal" component={AuthModalPage} />
                <Route exact path="/request" component={RequestPage} />
                <Route exact path="/suggest" component={SuggestPage} />
                <Route exact path="/stu-search" component={StuSearchPage}/>
                <Route exact path="/news-board" component={NewsBoardPage}/>
                <Route exact path="/faqs" component={FAQsPage}/>
                <Route exact path="/aca-calender" component={AcaCalenderPage}/>
                <Route exact path="/gpa" component={GPAPage}/>
                <Route exact path="/profiles" component={ProfilePage}/>
                <Route exact path="/studentCourseList" component={StudentSchedule}/>
                <Route exact path="/prof-profiles" component={ProfessorProfile}/>
                
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
