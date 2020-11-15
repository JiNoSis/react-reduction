import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../firebase.js';

class TablePage extends React.Component{
state = {
      currentUser:[],
      semester1:[],
      semester2:[],
      semester3:[],
      semester4:[],
      semester5:[],
      semester6:[],
      semester7:[],
      semester8:[],
      semcredit:0,
      sem1credit:0,
      sem2credit:0,
      sem3credit:0,
      sem4credit:0,
      sem5credit:0,
      sem6credit:0,
      sem7credit:0,
      sem8credit:0,
      allsem1credit:0,
      allsem2credit:0,
      allsem3credit:0,
      allsem4credit:0,
      allsem5credit:0,
      allsem6credit:0,
      allsem7credit:0,
      allsem8credit:0,
      gradepoint:0,
      gradepoint1:0,
      gradepoint2:0,
      gradepoint3:0,
      gradepoint4:0,
      gradepoint5:0,
      gradepoint6:0,
      gradepoint7:0,
      gradepoint8:0,
      allgradepoint1:0,
      allgradepoint2:0,
      allgradepoint3:0,
      allgradepoint4:0,
      allgradepoint5:0,
      allgradepoint6:0,
      allgradepoint7:0,
      allgradepoint8:0,
      hasSem1:false,
      hasSem2:false,
      hasSem3:false,
      hasSem4:false,
      hasSem5:false,
      hasSem6:false,
      hasSem7:false,
      hasSem8:false,
    };


  componentDidMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user
        })
        console.log(this.state);
        const StdID = this.state.currentUser.email.slice(0,10);
        var sem1 = StdID+'/1_2017';
        var sem2 = StdID+'/2_2017';
        var sem3 = StdID+'/1_2018';
        var sem4 = StdID+'/2_2018';
        var sem5 = StdID+'/1_2019';
        var sem6 = StdID+'/2_2019';
        var sem7 = StdID+'/1_2020';
        var sem8 = StdID+'/2_2020';

        const grade8Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem8);
        grade8Ref.once('value',(snapshot) => {
          let grade8 = snapshot.val();
          let newGrade8 = [];
          for (let grade8I in grade8){
            newGrade8.push({
              course_code: grade8[grade8I].course_code,
              std_id: grade8[grade8I].std_id,
              std_grade: grade8[grade8I].std_grade,
              course_credit:grade8[grade8I].course_credit,
              course_name:grade8[grade8I].course_name,
              class_gpa:grade8[grade8I].class_gpa
            });
            this.state.gradepoint8+=(grade8[grade8I].course_credit*grade8[grade8I].credit_grade);
            this.state.sem8credit+=grade8[grade8I].course_credit;
            this.state.gradepoint+=(grade8[grade8I].course_credit*grade8[grade8I].credit_grade);
            this.setState({allgradepoint8: Number(this.state.gradepoint)});
            this.state.semcredit+=grade8[grade8I].course_credit;
            this.setState({allsem8credit: Number(this.state.semcredit)});
            this.setState({semester8: newGrade8});
            this.setState({hasSem8:true});
          }
        });

        const grade7Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem7);
        grade7Ref.on('value',(snapshot) => {
          let grade7 = snapshot.val();
          let newGrade7 = [];
          for (let grade7I in grade7){
            newGrade7.push({
              course_code: grade7[grade7I].course_code,
              std_id: grade7[grade7I].std_id,
              std_grade: grade7[grade7I].std_grade,
              course_credit:grade7[grade7I].course_credit,
              course_name:grade7[grade7I].course_name,
              class_gpa:grade7[grade7I].class_gpa
            });
            this.state.gradepoint7+=(grade7[grade7I].course_credit*grade7[grade7I].credit_grade);
            this.state.sem7credit+=grade7[grade7I].course_credit;
            this.state.gradepoint+=(grade7[grade7I].course_credit*grade7[grade7I].credit_grade);
            this.setState({allgradepoint7: Number(this.state.gradepoint)});
            this.state.semcredit+=grade7[grade7I].course_credit;
            this.setState({allsem7credit: Number(this.state.semcredit)});
            this.setState({semester7: newGrade7});
            this.setState({hasSem7:true});
          }
        });

        const grade6Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem6);
        grade6Ref.once('value',(snapshot) => {
          let grade6 = snapshot.val();
          let newGrade6 = [];
          for (let grade6I in grade6){
            newGrade6.push({
              course_code: grade6[grade6I].course_code,
              std_id: grade6[grade6I].std_id,
              std_grade: grade6[grade6I].std_grade,
              course_credit:grade6[grade6I].course_credit,
              course_name:grade6[grade6I].course_name,
              class_gpa:grade6[grade6I].class_gpa,
            });        
            this.state.gradepoint6+=(grade6[grade6I].course_credit*grade6[grade6I].credit_grade);
            this.state.sem6credit+=grade6[grade6I].course_credit;
            this.state.gradepoint+=(grade6[grade6I].course_credit*grade6[grade6I].credit_grade);
            this.setState({allgradepoint6: Number(this.state.gradepoint)});
            this.state.semcredit+=grade6[grade6I].course_credit;
            this.setState({allsem6credit: Number(this.state.semcredit)});
            this.setState({semester6: newGrade6});
            this.setState({hasSem6:true});
          }
        });

        const grade5Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem5);
        grade5Ref.once('value',(snapshot) => {
          let grade5 = snapshot.val();
          let newGrade5 = [];
          for (let grade5I in grade5){
            newGrade5.push({
              course_code: grade5[grade5I].course_code,
              std_id: grade5[grade5I].std_id,
              std_grade: grade5[grade5I].std_grade,
              course_credit:grade5[grade5I].course_credit,
              course_name:grade5[grade5I].course_name,
              class_gpa:grade5[grade5I].class_gpa
            });
            this.state.gradepoint5+=(grade5[grade5I].course_credit*grade5[grade5I].credit_grade);
            this.state.sem5credit+=grade5[grade5I].course_credit;
            this.state.gradepoint+=(grade5[grade5I].course_credit*grade5[grade5I].credit_grade);
            this.setState({allgradepoint5: Number(this.state.gradepoint)});
            this.state.semcredit+=grade5[grade5I].course_credit;
            this.setState({allsem5credit: Number(this.state.semcredit)});
            this.setState({semester5: newGrade5});
            this.setState({hasSem5:true});
          }
        });

        const grade4Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem4);
        grade4Ref.once('value',(snapshot) => {
          let grade4 = snapshot.val();
          let newGrade4 = [];
          for (let grade4I in grade4){
            newGrade4.push({
              course_code: grade4[grade4I].course_code,
              std_id: grade4[grade4I].std_id,
              std_grade: grade4[grade4I].std_grade,
              course_credit:grade4[grade4I].course_credit,
              course_name:grade4[grade4I].course_name,
              class_gpa:grade4[grade4I].class_gpa
            });
            this.state.gradepoint4+=(grade4[grade4I].course_credit*grade4[grade4I].credit_grade);
            this.state.sem4credit+=grade4[grade4I].course_credit;
            this.state.gradepoint+=(grade4[grade4I].course_credit*grade4[grade4I].credit_grade);
            this.setState({allgradepoint4: Number(this.state.gradepoint)});
            this.state.semcredit+=grade4[grade4I].course_credit;
            this.setState({allsem4credit: Number(this.state.semcredit)});
            this.setState({semester4: newGrade4});
            this.setState({hasSem4:true});
          }
        });

        const grade3Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem3);
        grade3Ref.once('value',(snapshot) => {
          let grade3 = snapshot.val();
          let newGrade3 = [];
          for (let grade3I in grade3){
            newGrade3.push({
              course_code: grade3[grade3I].course_code,
              std_id: grade3[grade3I].std_id,
              std_grade: grade3[grade3I].std_grade,
              course_credit:grade3[grade3I].course_credit,
              course_name:grade3[grade3I].course_name,
              class_gpa:grade3[grade3I].class_gpa
            });
            this.state.gradepoint3+=(grade3[grade3I].course_credit*grade3[grade3I].credit_grade);
            this.state.sem3credit+=grade3[grade3I].course_credit;
            this.state.gradepoint+=(grade3[grade3I].course_credit*grade3[grade3I].credit_grade);
            this.setState({allgradepoint3: Number(this.state.gradepoint)});
            this.state.semcredit+=grade3[grade3I].course_credit;
            this.setState({allsem3credit: Number(this.state.semcredit)});
            this.setState({semester3: newGrade3});
            this.setState({hasSem3:true});
          }
        });

        const grade2Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem2);
        grade2Ref.once('value',(snapshot) => {
          let grade2 = snapshot.val();
          let newGrade2 = [];
          for (let grade2I in grade2){
            newGrade2.push({
              course_code: grade2[grade2I].course_code,
              std_id: grade2[grade2I].std_id,
              std_grade: grade2[grade2I].std_grade,
              course_credit:grade2[grade2I].course_credit,
              course_name:grade2[grade2I].course_name,
              class_gpa:grade2[grade2I].class_gpa
            });
            this.state.gradepoint2+=(grade2[grade2I].course_credit*grade2[grade2I].credit_grade);
            this.state.sem2credit+=grade2[grade2I].course_credit;
            this.state.gradepoint+=(grade2[grade2I].course_credit*grade2[grade2I].credit_grade);
            this.setState({allgradepoint2: Number(this.state.gradepoint)});
            this.state.semcredit+=grade2[grade2I].course_credit;
            this.setState({allsem2credit: Number(this.state.semcredit)});
            this.setState({semester2: newGrade2});
            this.setState({hasSem2:true});
          }
        });
  
        const grade1Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo(sem1);
        grade1Ref.once('value',(snapshot) => {
          let grade1 = snapshot.val();
          let newGrade1 = [];
          for (let grade1I in grade1){
            newGrade1.push({
              course_code: grade1[grade1I].course_code,
              std_id: grade1[grade1I].std_id,
              std_grade: grade1[grade1I].std_grade,
              course_credit:grade1[grade1I].course_credit,
              course_name:grade1[grade1I].course_name,
              class_gpa:grade1[grade1I].class_gpa
            });
            this.state.gradepoint1+=(grade1[grade1I].course_credit*grade1[grade1I].credit_grade);
            this.state.sem1credit+=grade1[grade1I].course_credit;
            this.state.gradepoint+=(grade1[grade1I].course_credit*grade1[grade1I].credit_grade);
            this.setState({allgradepoint1: Number(this.state.gradepoint)});
            this.state.semcredit+=grade1[grade1I].course_credit;
            this.setState({allsem1credit: Number(this.state.semcredit)});
            this.setState({semester1: newGrade1});
            this.setState({hasSem1:true});
            }
          });
      }
    })

    
  };
  
  render(){
    return(
      <Page title="GPA Results" 
            breadcrumbs={[{ name: 'gpa-results', 
            active: true }]} className="TablePage" >
              <div>
        {(() => {
          if (this.state.hasSem1) {
            return <Card className="mb-3">
      <CardHeader>Semester 1/2017</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester1.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem1credit}</td>
                <td colspan = "2">{this.state.sem1credit}</td>
                <td colspan = "1">{this.state.sem1credit}</td>
                <td colspan = "1">{this.state.gradepoint1}</td>
                <td colspan = "1">{(this.state.gradepoint1/this.state.sem1credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem1credit}</td>
                <td colspan = "2">{this.state.allsem1credit}</td>
                <td colspan = "1">{this.state.allsem1credit}</td>
                <td colspan = "1">{this.state.allgradepoint1}</td>
                <td colspan = "1">{(this.state.allgradepoint1/this.state.allsem1credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
              <div>
        {(() => {
          if (this.state.hasSem2) {
            return <Card className="mb-3">
      <CardHeader>Semester 2/2017</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester2.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem2credit}</td>
                <td colspan = "2">{this.state.sem2credit}</td>
                <td colspan = "1">{this.state.sem2credit}</td>
            <td colspan = "1">{this.state.gradepoint2}</td>
                <td colspan = "1">{(this.state.gradepoint2/this.state.sem2credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem2credit}</td>
                <td colspan = "2">{this.state.allsem2credit}</td>
                <td colspan = "1">{this.state.allsem2credit}</td>
                <td colspan = "1">{this.state.allgradepoint2}</td>
                <td colspan = "1">{(this.state.allgradepoint2/this.state.allsem2credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
              <div>
        {(() => {
          if (this.state.hasSem3) {
            return <Card className="mb-3">
      <CardHeader>Semester 1/2018</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester3.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem3credit}</td>
                <td colspan = "2">{this.state.sem3credit}</td>
                <td colspan = "1">{this.state.sem3credit}</td>
            <td colspan = "1">{this.state.gradepoint3}</td>
                <td colspan = "1">{(this.state.gradepoint3/this.state.sem3credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem3credit}</td>
                <td colspan = "2">{this.state.allsem3credit}</td>
                <td colspan = "1">{this.state.allsem3credit}</td>
                <td colspan = "1">{this.state.allgradepoint3}</td>
                <td colspan = "1">{(this.state.allgradepoint3/this.state.allsem3credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
              <div>
        {(() => {
          if (this.state.hasSem4) {
            return <Card className="mb-3">
      <CardHeader>Semester 2/2018</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester4.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem4credit}</td>
                <td colspan = "2">{this.state.sem4credit}</td>
                <td colspan = "1">{this.state.sem4credit}</td>
            <td colspan = "1">{this.state.gradepoint4}</td>
                <td colspan = "1">{(this.state.gradepoint4/this.state.sem4credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem4credit}</td>
                <td colspan = "2">{this.state.allsem4credit}</td>
                <td colspan = "1">{this.state.allsem4credit}</td>
                <td colspan = "1">{this.state.allgradepoint4}</td>
                <td colspan = "1">{(this.state.allgradepoint4/this.state.allsem4credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
              <div>
        {(() => {
          if (this.state.hasSem5) {
            return <Card className="mb-3">
      <CardHeader>Semester 1/2019</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester5.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem5credit}</td>
                <td colspan = "2">{this.state.sem5credit}</td>
                <td colspan = "1">{this.state.sem5credit}</td>
            <td colspan = "1">{this.state.gradepoint5}</td>
                <td colspan = "1">{(this.state.gradepoint5/this.state.sem5credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem5credit}</td>
                <td colspan = "2">{this.state.allsem5credit}</td>
                <td colspan = "1">{this.state.allsem5credit}</td>
                <td colspan = "1">{this.state.allgradepoint5}</td>
                <td colspan = "1">{(this.state.allgradepoint5/this.state.allsem5credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
      <div>
        {(() => {
          if (this.state.hasSem6) {
            return <Card className="mb-3">
      <CardHeader>Semester 2/2019</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester6.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem6credit}</td>
                <td colspan = "2">{this.state.sem6credit}</td>
                <td colspan = "1">{this.state.sem6credit}</td>
            <td colspan = "1">{this.state.gradepoint6}</td>
                <td colspan = "1">{(this.state.gradepoint6/this.state.sem6credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem6credit}</td>
                <td colspan = "2">{this.state.allsem6credit}</td>
                <td colspan = "1">{this.state.allsem6credit}</td>
                <td colspan = "1">{this.state.allgradepoint6}</td>
                <td colspan = "1">{(this.state.allgradepoint6/this.state.allsem6credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
      <div>
        {(() => {
          if (this.state.hasSem7) {
            return <Card className="mb-3">
      <CardHeader>Semester 1/2020</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester7.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem7credit}</td>
                <td colspan = "2">{this.state.sem7credit}</td>
                <td colspan = "1">{this.state.sem7credit}</td>
            <td colspan = "1">{this.state.gradepoint7}</td>
                <td colspan = "1">{(this.state.gradepoint7/this.state.sem7credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem7credit}</td>
                <td colspan = "2">{this.state.allsem7credit}</td>
                <td colspan = "1">{this.state.allsem7credit}</td>
                <td colspan = "1">{this.state.allgradepoint7}</td>
                <td colspan = "1">{(this.state.allgradepoint7/this.state.allsem7credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
      <div>
        {(() => {
          if (this.state.hasSem8) {
            return <Card className="mb-3">
      <CardHeader>Semester 2/2020</CardHeader>
        <CardBody>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Credit</th>
                <th>Grade</th>
                <th>Class GPA.</th>
              </tr>
            </thead>
            <tbody>
            {this.state.semester7.map((sem) => {
              return (
                <tr>
                  <td>{sem.course_code}</td>
                  <td>{sem.course_name}</td>
                  <td>{sem.course_credit}</td>
                  <td>{sem.std_grade}</td>
                  <td>{sem.class_gpa}</td>
                </tr>
              )  
            })}  
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">This Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
                <td colspan = "4">{this.state.sem8credit}</td>
                <td colspan = "2">{this.state.sem8credit}</td>
                <td colspan = "1">{this.state.sem8credit}</td>
            <td colspan = "1">{this.state.gradepoint8}</td>
                <td colspan = "1">{(this.state.gradepoint8/this.state.sem8credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body className="mb-3">
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "9">Cumulative GPA</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td colspan = "4">Credit Registered</td>
                <td colspan = "2">Credit Earned</td>
                <td colspan = "1">Credit Learned</td>
                <td colspan = "1">Grade Point</td>
                <td colspan = "1">Grade Point Average</td>
              </tr>
              <tr>
            <td colspan = "4">{this.state.allsem8credit}</td>
                <td colspan = "2">{this.state.allsem8credit}</td>
                <td colspan = "1">{this.state.allsem8credit}</td>
                <td colspan = "1">{this.state.allgradepoint8}</td>
                <td colspan = "1">{(this.state.allgradepoint8/this.state.allsem8credit).toFixed(2)}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>; 
          }
        })()}
      </div>
      </Page>
    )
  }
}

export default TablePage;
