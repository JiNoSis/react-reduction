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
      staff:[],
      hasICT:false,
      hasCHE:false,
      hasStaff: false

    };

  };

  componentDidMount() {
    const teacherRef= firebase.database().ref('Teachers').orderByChild('faculty').equalTo("ICT");
    teacherRef.once('value', (snapshot) => {
      console.log(snapshot.key);
      let teacher2 = snapshot.val();
      console.log(teacher2);
      let newState=[];
      for (let teachers in teacher2){
          newState.push({
            Prof_rank: teacher2[teachers].Prof_rank,
            FName: teacher2[teachers].FName,
            LName: teacher2[teachers].LName,
            faculty: teacher2[teachers].faculty,
            History: teacher2[teachers].History,
            DepTel: teacher2[teachers].DepTel,
            DepTel_Rangsit: teacher2[teachers].DepTel_Rangsit,
            Email: teacher2[teachers].Email,
            Img: teacher2[teachers].Img
          });

           this.setState({ProfessorICT: newState});
           this.setState({hasICT: true})
           console.log(this.state.ProfessorICT)

        };
      });

      const StaffRef= firebase.database().ref('Teachers').orderByChild('faculty').equalTo("STA");
      StaffRef.once('value', (snapshot) => {
      console.log(snapshot.key);
      let  Staff2 = snapshot.val();
      console.log(Staff2);
      let newState2=[];
      for (let teachers in Staff2){
          newState2.push({
              Prof_rank: Staff2[teachers].Prof_rank,
              FName: Staff2[teachers].FName,
              LName: Staff2[teachers].LName,
              faculty: Staff2[teachers].faculty,
              History: Staff2[teachers].History,
              DepTel: Staff2[teachers].DepTel,
              DepTel_Rangsit: Staff2[teachers].DepTel_Rangsit,
              Email: Staff2[teachers].Email,
              Img: Staff2[teachers].Img
          });

           this.setState({staff: newState2});
           this.setState({hasStaff: true});
 
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
          <CardHeader>School of Computer Engineering and Information Technology </CardHeader>

        {this.state.ProfessorICT.map((prof) => {
          let pic_src= String(prof.Img.replaceAll("@","."));

          return(
       
           
           <Card body>
           <Table {...{ ['default']: true }}>
               <thead>
   
                 <tr className="table-primary">
          <th>{prof.Prof_rank.replaceAll("_",".")}  {prof.FName}  {prof.LName}</th>
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


          <td align="Right" rowSpan="3" colSpan="100%"> <iframe src={pic_src} width="125" height="150"></iframe></td>
            <td></td>
                 </tr>
               </thead>
               <tbody>
                 <tr className="table-info">
                 <th colspan="100%">{prof.History}</th>
                 <td colspan ="100%"></td>
                 </tr>
                 <tr className = "table-info">
                 <th scope="row">Bangkadi Telephone:</th>
                 <td colspan="100%" align="left">{prof.DepTel.replaceAll("_",".")}</td>
                 <td colspan ="100%"></td>
                 </tr>
                 {prof.DepTel_Rangsit!="" &&
                 <tr className = "table-info">
                   <th scope="row">Rangsit Telephone:</th>
                 <td colspan="100%">{prof.DepTel_Rangsit.replaceAll("_",".")}</td>
                 <td colspan ="100%"></td>
                </tr>}
                 <tr className = "table-info">
                 <th scope="row">Email:</th>
                 <td colspan="100%">{prof.Email.replaceAll("_",".")}</td>
                 <td colspan ="100%"></td>
                 </tr>
               </tbody>
             </Table>
           </Card>
   
   
            )})}
        
             </Card>
          
          }
          })()}
          {(() => {
           if (this.state.hasStaff) {
          return <Card className="mb-3">
          <CardHeader>Staff of ICT</CardHeader>

        {this.state.staff.map((prof) => {
          let pic_src= String(prof.Img.replaceAll("@","."));

          return(
       
           
           <Card body>
           <Table {...{ ['default']: true }}>
               <thead>
   
                 <tr className="table-primary">
            <th colspan = "100%">{prof.Prof_rank.replaceAll("_",".")}  {prof.FName}  {prof.LName}</th>
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
          <td align="Right" rowSpan="3" colSpan="100%"> <iframe src={pic_src} width="125" height="150"></iframe></td>
          <td></td>
                 </tr>
               </thead>
               <tbody>
                 <tr className="table-info">
                 <th colspan="100%">{prof.History}</th>
                 <td colspan ="100%"></td>
                 <td colspan ="100%"></td>
                 </tr>
                 <tr className = "table-info">
                 <th scope="row">Bankadi Telephone:</th>
                 <td colspan="100%">{prof.DepTel.replaceAll("_",".")}</td>
                 <td colspan ="100%"></td>
                 <td colspan ="100%"></td>
                 </tr>
                 {prof.DepTel_Rangsit!="" &&
                 <tr className = "table-info">
                   <th scope="row">Rangsit Telephone:</th>
                 <td colspan="100%">{prof.DepTel_Rangsit.replaceAll("_",".")}</td>
                 <td colspan ="100%"></td>
                </tr>}
                 <tr className = "table-info">
                 <th scope="row">Email:</th>
                 <td colspan="100%">{prof.Email.replaceAll("_",".")}</td>
                 <td colspan ="100%"></td>
                 <td colspan ="100%"></td>
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
