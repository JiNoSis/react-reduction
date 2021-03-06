import React from 'react';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

import Page from 'components/Page';

class ButtonPage extends React.Component {
  state = {
    rSelected: null,
    cSelected: [],
  };

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Page
        className="ButtonPage"
        title="Academic Calender"
        breadcrumbs={[{ name: 'aca-calender', active: true }]}
      >
        <Card className="mb-3">
          <CardHeader>Academic Year 2020</CardHeader>
          <CardBody>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2020_1.pdf'>
            Semester : 1
            </Button>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2020_2.pdf'>
            Semester : 2
            </Button>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2020_3.pdf'>
            Semester : 3
            </Button>
          </CardBody>
        </Card>
        <Card className="mb-3">
          <CardHeader>Academic Year 2019</CardHeader>
          <CardBody>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2019_1.pdf'>
            Semester : 1
            </Button>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2019_2.pdf'>
            Semester : 2
            </Button>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2019_3.pdf'>
            Semester : 3
            </Button>
          </CardBody>
        </Card>
        <Card className="mb-3">
          <CardHeader>Academic Year 2018</CardHeader>
          <CardBody>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2018_1.pdf'>
            Semester : 1
            </Button>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2018_2.pdf'>
            Semester : 2
            </Button>
            <Button outline color="link" href='http://reg.siit.tu.ac.th/registrar/download/calendar/calendar_2018_3.pdf'>
            Semester : 3
            </Button>
          </CardBody>
        </Card>
      </Page>
    );
  }
}

export default ButtonPage;
