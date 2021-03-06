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
  Label,
} from 'reactstrap';

import firebase from '../firebase';


class SuggestPage extends React.Component{

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
        var textt = document.getElementById('selectText').value;
        var proff = document.getElementById('selectProf').value;
        var newRequestRef = requestRef.push();
        newRequestRef.set({
          std_id: id,
          text: textt,
          prof: proff
        });
      }
    
      var requestRef = firebase.database().ref('Suggest');
      var today = new Date();
      var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  return (
    <Page title="Suggestion Forms" breadcrumbs={[{ name: 'suggest', active: true }]}>
      <Card>
        <CardHeader>Please Suggest & Comment</CardHeader>
        <CardBody>
        <Form>
          <Label>{date.toString()}</Label>
          <br></br>
          <FormGroup>
            <Label for="exampleText">Suggestion Sentence (You can specify up to 255 Characters.)</Label>
            <Input type="textarea" name="selectText" id="selectText" rows="10"/>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Answer : </Label>
            <Input type="select" name="selectProf" id="selectProf">
              <option>Not Specified</option>
              <option>Mr.Aaron Larsen</option>
              <option>Dr.Asawin Sinsarp</option>
              <option>Assoc. Prof. Dr.Cholwich Nattee</option>
              <option>Assoc. Prof. Dr.Denduang Pradubsuwun</option>
              <option>Dr.Egill Bragason</option>
              <option>Assoc. Prof. Dr.Ekawit Nantajeewarawat</option>
              <option>Assoc. Prof. Dr.Gun Srijuntongsiri</option>
              <option>Assoc. Prof. Dr.Itthisek Nilkhamhang</option>
              <option>Assoc. Prof. Dr.Komwut Wipusitwarakun</option>
              <option>Dr.Kriengkrai Techakanont</option>
              <option>Aj.Mark Refsdal</option>
              <option>Assoc. Prof. Dr.Narameth Nananukul</option>
              <option>Assoc. Prof. Dr.Nattaporn Chattham</option>
              <option>Dr.Natthaphon Raengthon</option>
              <option>Assoc. Prof. Dr.Nguyen Duy Hung</option>
              <option>Assoc. Prof. Dr.Nirattaya Khamsemanan</option>
              <option>Assoc. Prof. Dr.Paiboon Sreearunothai</option>
              <option>Assoc. Prof. Dr.Pakinee Aimmanee</option>
              <opton>Assoc. Prof. Dr.Pakorn Opaprakasit</opton>
              <option>Mr.Piya Limcharoen</option>
              <option>Assoc. Prof. Dr.Prapun Suksompong</option>
              <option>Assoc. Prof. Dr.Rachnarin Nitisoravut</option>
              <option>Prof. Dr.Sandhya Babel</option>
              <option>Mr.Sasawat Mahavan</option>
              <option>Assoc. Prof. Dr.Sasiporn Usanavasin</option>
              <option>Dr.Seksan Laitrakun</option>
              <option>Mr.Simon Stewart</option>
              <option>Dr.Somchart Fugkeaw</option>
              <option>Prof. Dr.Stanislav S. Makhanov</option>
              <option>Dr.Sumeth Yuenyong</option>
              <option>Assoc. Prof. Dr.Teerayut Horanont</option>
              <option>Prof. Dr.Thanaruk Theeramunkong</option>
              <option>Assoc. Prof. Dr.Toshiaki Kondo</option>
              <option>Dr.Virach Sornlertlamvanich</option>
              <option>Aj.Willem Van Amarongen</option>
              <option>Dr.Withoon Chunwachirasiri</option>
            </Input>
          </FormGroup>
          <Label for="exampleSelect">Click for Submit Suggestion Form :</Label>
          <br></br>
          <Button onClick={handleSubmit}>Submit</Button>
        </Form>
        </CardBody>
      </Card>
    </Page>
  );
};
};
export default SuggestPage;
