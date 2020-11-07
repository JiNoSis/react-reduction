import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../firebase.js';
const tableTypes = ['', 'bordered', 'striped', 'hover'];

class TeacherProfile extends React.Component{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      Professor: []
    };

  };

  componentDidMount() {
    const teacherRef= firebase.database().ref('Teachers').orderByChild('ID');
    teacherRef.once('value', (snapshot) => {
      console.log(snapshot.key);
      let teacher1 = snapshot.val();
      let newState=[];
      for (let teachers in teacher1){
          newState.push({
              Prof_rank: teacher1[teachers].Prof_rank,
              FName: teacher1[teachers].FName,
              LName: teacher1[teachers].LName,
              Dep: teacher1[teachers].Dep,
              Faculty: teacher1[teachers].Faculty,
              History: teacher1[teachers].History,
              DepTel: teacher1[teachers].DepTel,
              Email: teacher1[teachers].Email,
              Achv: teacher1[teachers].Achv
          });
          this.setState({Professor: newState});
          console.log(this.state.Professor)
        }
    });



  } ;



render() {
  

  return (
    <Page
      title="Professor Profile"
      breadcrumbs={[{ name: 'Profile', active: true }]}
      className="ProfilePage"
    >
        <Card className="mb-3">
        <CardHeader>Professor Profiles</CardHeader>
    {this.state.Professor.map((prof) => {

       return(
    
        
        <Card body>
        <Table {...{ ['default']: true }}>
            <thead>

              <tr className="table-primary">
       <th colspan = "100%">{prof.Prof_rank.replaceAll("_",".")}  {prof.FName}  {prof.LName}</th>
       <td align="right"><iframe src="https://drive.google.com/file/d/1gPFyM-RbOOYcYMhGHMtNd0pU1cQrfmEE/preview" width="100" height="100"></iframe></td>
              </tr>
            </thead>
            <tbody>
            <tr className="table-info">
                <th scope="row">Faculty:</th>
                <td>{prof.Faculty} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                  <td></td>
                  
                <td></td>
                <td></td>
                <td colspan="100%"></td>
              </tr>
              <tr className="table-info">
              <th scope="row">Department:</th>
              <td colspan="100%">{prof.Dep}</td>
              </tr>
              <tr className = "table-info">
              <th scope="row">Department Telephone:</th>
              <td colspan="100%">{prof.DepTel}</td>
              </tr>
              <tr className = "table-info">
              <th scope="row">Email:</th>
              <td colspan="100%">{prof.Email}</td>
              </tr>
              <tr className = "table-info">
              <th scope="row">Technical Achievement:</th>
              <td colspan="100%">{prof.Achv}</td>
              </tr>
              <tr className = "table-info">
              <th scope="row">History:</th>
              <td colspan="100%">{prof.History}</td>
              </tr>


            </tbody>
          </Table>
        </Card>


         )})}
             </Card>
    </Page>
  );


}

  

};





export default TeacherProfile;
