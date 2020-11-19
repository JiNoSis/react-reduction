import Page from 'components/Page';
import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
import firebase from '../firebase';





class FormPage extends React.Component{

  constructor(props) 
  {
    super(props);
    this.state = 
    {
      studentid: ''
    };

  };

  componentDidMount() {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        });
        //console.log(user);
        const std_id = this.state.currentUser.email.slice(0,10);
        this.setState({studentid:std_id});
      }
    });
  };


  render(){
    const handleSubmit = (e) =>{
      var id = this.state.studentid;
      var doc = document.getElementById('selectDoc').value;
      var num = document.getElementById('selectNum').value;
      var cam = document.getElementById('selectCam').value;
      var newRequestRef = requestRef.push();
      newRequestRef.set({
        std_id: id,
        request_type: doc,
        num_copy: num,
        campus: cam
      });
    }
  
var requestRef = firebase.database().ref('Request');
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  return (
    <Page title="Request Forms" breadcrumbs={[{ name: 'request', active: true }]}>
      <Card>
        <CardHeader>Request Certificate</CardHeader>
        <CardBody>
          <Form id='request_form'>
            <Label>{date.toString()}</Label>
            <br></br>
            <FormGroup>
              <Label>Step 1 : Select Type of Document</Label>
              <Input type="select" name="selectDoc" id='selectDoc'>
                <option>Academic Record (Transcript)</option>
                <option>Bachelor-Rank (Current/English Version)-RS</option>
                <option>Bachelor-Status (Current) - RS (Student Status For Bachelor/English Version)</option>
                <option>Eng-Instruction Certificate - RS (English Version)</option>
                <option>ปริญญาตรี-ใบรับรองสถานภาพนักศึกษาปัจจุบัน - RS (Thai Version)</option>
                <option>Status_Eng_ExpectR (Expected to Graduate for 4 th year student Bachelor/English Version)</option>
                <option>ปริญญาตรี-ใบรับรองคาดว่าจะจบการศึกษา (สำหรับนักศึกษาชั้นปีที่ 4 ขึ้นไป/Thai Version)</option>
                <option>Official Transcript</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Step 2 : Select Number of Copy</Label>
              <Input type="select" name="selectNum" id='selectNum'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label>Step 3 : Select Campus</Label>
              <Input type="select" name="selectCampus" id='selectCam'>
                <option>Rangsit Campus</option>
                <option>Bangkadi Campus</option>
              </Input>
            </FormGroup>
            <Label for="exampleSelect">Step 4 : Click for Submit Request </Label>
            <br></br>
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </Page>
  );
};
};

export default FormPage;
