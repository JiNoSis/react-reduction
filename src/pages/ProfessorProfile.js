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
      ProfessorICT: [],
      ProfessorCHE: [],
      hasICT:false,
      hasCHE:false

    };

  };

  componentDidMount() {
    const teacherRef= firebase.database().ref('Teachers').orderByChild('faculty').equalTo("ICT");
    teacherRef.once('value', (snapshot) => {
      console.log(snapshot.key);
      let teacher1 = snapshot.val();
      console.log(teacher1);
      let newState=[];
      for (let teachers in teacher1){
          newState.push({
              Prof_rank: teacher1[teachers].Prof_rank,
              FName: teacher1[teachers].FName,
              LName: teacher1[teachers].LName,
              Dep: teacher1[teachers].Dep,
              faculty: teacher1[teachers].faculty,
              History: teacher1[teachers].History,
              DepTel: teacher1[teachers].DepTel,
              Email: teacher1[teachers].Email,
              Achv: teacher1[teachers].Achv
          });

           this.setState({ProfessorICT: newState});
           this.setState({hasICT: true})
           console.log(this.state.ProfessorICT)

        };
      });

      const teacherRef1= firebase.database().ref('Teachers').orderByChild('faculty').equalTo("CHE");
      teacherRef1.once('value', (snapshot) => {
      console.log(snapshot.key);
      let teacher2 = snapshot.val();
      console.log(teacher2);
      let newState2=[];
      for (let teachers in teacher2){
          newState2.push({
              Prof_rank: teacher2[teachers].Prof_rank,
              FName: teacher2[teachers].FName,
              LName: teacher2[teachers].LName,
              Dep: teacher2[teachers].Dep,
              faculty: teacher2[teachers].faculty,
              History: teacher2[teachers].History,
              DepTel: teacher2[teachers].DepTel,
              Email: teacher2[teachers].Email,
              Achv: teacher2[teachers].Achv
          });

           this.setState({ProfessorCHE: newState2});
           this.setState({hasCHE: true});
 
        };

      });

  



  };



render() {
  
  return (
    <Page
      title="Professor Profile"
      breadcrumbs={[{ name: 'Profile', active: true }]}
      className="ProfilePage"
    >

          {(() => {
           if (this.state.hasICT) {
          return <Card className="mb-3">
          <CardHeader>School of ICT </CardHeader>

        {this.state.ProfessorICT.map((prof) => {

          return(
       
           
           <Card body>
           <Table {...{ ['default']: true }}>
               <thead>
   
                 <tr className="table-primary">
          <th colspan = "100%">{prof.Prof_rank.replaceAll("_",".")}  {prof.FName}  {prof.LName}</th>
            <td></td>
                 </tr>
               </thead>
               <tbody>
                 <tr className="table-info">
                 <td align="Left" rowSpan="5"><iframe src="https://drive.google.com/file/d/1gPFyM-RbOOYcYMhGHMtNd0pU1cQrfmEE/preview" width="200" height="200"></iframe></td>
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
          
          }
          })()}
          {(() => {
           if (this.state.hasCHE) {
          return <Card className="mb-3">
          <CardHeader>School of CHE </CardHeader>

        {this.state.ProfessorCHE.map((prof) => {

          return(
       
           
           <Card body>
           <Table {...{ ['default']: true }}>
               <thead>
   
                 <tr className="table-primary">
          <th colspan = "100%">{prof.Prof_rank.replaceAll("_",".")}  {prof.FName}  {prof.LName}</th>
            <td></td>
                 </tr>
               </thead>
               <tbody>
                 <tr className="table-info">
                 <td align="Left" rowSpan="5"><iframe src="https://drive.google.com/file/d/1gPFyM-RbOOYcYMhGHMtNd0pU1cQrfmEE/preview" width="200" height="200"></iframe></td>
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
          
          }
          })()}
    </Page>
  );


}

  

};





export default TeacherProfile;
