import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../firebase.js';

const tableTypes = ['', 'bordered', 'striped', 'hover'];

class TablePage extends React.Component{
  constructor(props)
  {
    super(props);
    this.state =
    {
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
    };
  };

  componentDidMount(){
  
    const grade1Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/1_2017');
    grade1Ref.once('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });

    

    const grade2Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/2_2017');
    grade2Ref.once('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });

    const grade3Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/1_2018');
    grade3Ref.once('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });

    const grade4Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/2_2018');
    grade4Ref.once('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });

    const grade5Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/1_2019');
    grade5Ref.once('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });


    const grade6Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/2_2019');
    grade6Ref.once('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });

    const grade7Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/1_2020');
    grade7Ref.on('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });

    const grade8Ref = firebase.database().ref('course_grade').orderByChild('id_sem').equalTo('6000000001/2_2020');
    grade8Ref.once('value',(snapshot) => {
      console.log(snapshot.key);
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
      }
    });

  };
  render(){
    

    return(
      <Page
      title="GPA Results"
      breadcrumbs={[{ name: 'gpa-results', active: true }]}
      className="TablePage"
    >
    <Card className="mb-3">
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
                <td colspan = "1">{this.state.gradepoint7/this.state.sem7credit}</td>
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
                <td colspan = "1">{this.state.allgradepoint7/this.state.allsem7credit}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>
    </Page>
    )
  }
}


const TablePage1 = () => {
  return (
    <Page
      title="GPA Results"
      breadcrumbs={[{ name: 'gpa-results', active: true }]}
      className="TablePage"
    >
    <Card className="mb-3">
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
              <tr>
                <td>EL172</td>
                <td>English Course III</td>
                <td>3</td>
                <td>B</td>
                <td>2.31</td>
              </tr>
              <tr>
                <td>GTS101</td>
                <td>Skills Development for Technical Studies</td>
                <td>3</td>
                <td>A</td>
                <td>2.56</td>
              </tr>
              <tr>
                <td>GTS116</td>
                <td>Mathematics for Technologist I</td>
                <td>3</td>
                <td>A</td>
                <td>2.48</td>
              </tr>
              <tr>
                <td>GTS133</td>
                <td>Environmental Studies</td>
                <td>3</td>
                <td>A</td>
                <td>2.59</td>
              </tr>
              <tr>
                <td>ITS100</td>
                <td>Introduction to Computers and Programming</td>
                <td>3</td>
                <td>A</td>
                <td>2.81</td>
              </tr>
              <tr>
                <td>MTS252</td>
                <td>Material Science</td>
                <td>3</td>
                <td>A</td>
                <td>2.85</td>
              </tr>
              <tr>
                <td>SCS138</td>
                <td>Applied Physics I</td>
                <td>3</td>
                <td>B+</td>
                <td>1.93</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Row>
          <Col>
        <Card body>
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
                <td colspan = "4">21</td>
                <td colspan = "2">21</td>
                <td colspan = "1">21</td>
                <td colspan = "1">79.5</td>
                <td colspan = "1">3.79</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        <Col>
        <Card body>
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
                <td colspan = "4">21</td>
                <td colspan = "2">21</td>
                <td colspan = "1">21</td>
                <td colspan = "1">79.5</td>
                <td colspan = "1">3.79</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        </Col>
        </Row>
        </CardBody>
    </Card>
    </Page>
  );
};

export default TablePage;
