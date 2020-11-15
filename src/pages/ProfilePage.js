import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import firebase from '../firebase.js';
const tableTypes = ['', 'bordered', 'striped', 'hover'];

class StudentProfile extends React.Component{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      students: []
    };

  };

  componentDidMount() {
    const studentRef= firebase.database().ref('Students').orderByChild('StdID').equalTo(6000000002);
    studentRef.once('value', (snapshot) => {
      console.log(snapshot.key);
      let students1 = snapshot.val();
      let newState=[];
      for (let students in students1){
          newState.push({
              StdID: students1[students].StdID,
              FName: students1[students].FName,
              LName: students1[students].LName,
              Dep: students1[students].Dep,
              Camp: students1[students].Camp,
              Prog: students1[students].Prog,
              Minor: students1[students].Minor,
              Lv: students1[students].Lv,
              DegName : students1[students].DegName,
              CurName : students1[students].CurName,
              AdmY: students1[students].AdmY,
              Status : students1[students].Status,
              AdmT : students1[students].AdmT,
              Prev : students1[students].Prev,
              PrevGPA : students1[students].PrevGPA,
              PrevSch : students1[students].PrevSch,
              Adv : students1[students].Adv,
              CGPA : students1[students].CGPA,
              CreditAtm : students1[students].CreditAtm,
              CreditAch : students1[students].CreditAch,
              test : students1[students].test,
              EngStat : students1[students].EngStat,
              tofelscr : students1[students].toeic_scr,
              ieltsce : students1[students].ieltsce,
              tu_get_scr : students1[students].tu_get_scr,
              tu_get_cbt_scr : students1[students].tu_get_cbt_scr,
              tofel_pbt_scr : students1[students].tofel_pbt_scr,
              tofel_cbt_scr : students1[students].tofel_cbt_scr,
              tofel_ibt_scr : students1[students].tofel_ibt_scr,
              tofel_institute_scr : students1[students].tofel_institute_scr,
              gts401_scr : students1[students].gts401_scr,
              toeic_scr : students1[students].toeic_scr,
              FCE_scr : students1[students].FCE_scr ,
              CEFR_scr : students1[students].CEFR_scr,
              tu005_scr: students1[students].tu005_scr,
              tu006_scr: students1[students].tu006_scr,
              native : students1[students].native
          });
          this.setState({students: newState});
          console.log(this.state.students)
        }
    });



  } ;

  MappedData()
  {
    //Will use to optimize data for static webpage
     
   };




render() {
  

  return (
    <Page
      title="Student Profile"
      breadcrumbs={[{ name: 'Profile', active: true }]}
      className="ProfilePage"
    >
    {this.state.students.map((student) => {

      let SCGPA = student.CGPA;
      let U_CGPA = SCGPA.replace("_",".");

      let tableType, tableType2;
      if (U_CGPA <= 2.00){
        tableType = "table-warning"
      }else{tableType= "table-success"};
    
      if (student.EngStat == "Pass")
      {
        tableType2="table-success"
      } else {tableType2="table-warning"}


       return(
    <Card className="mb-3">
        <CardHeader>Profile</CardHeader>
        
        <Card body>
          <Table {...{ ['default']: true }}>
            <thead>
              <tr className="table-primary">
                <th colspan = "100%">Education Information</th>
              </tr>
            </thead>
            <tbody>
                <tr className="table-info">
                <th scope="row">Student ID:</th>
                <td>{student.StdID}</td>
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
              </tr>


                <tr className="table-info">
                <th scope="row">Name:</th>
                <td colspan="100%">{student.FName} {student.LName}</td>
              </tr>

             
            
                <tr className="table-info">
                <th scope="row">School:</th>
                <td colspan="100%">{student. Dep}</td>
              </tr>



                <tr className="table-info">
                <th scope="row">Campus:</th>
                <td colspan="100%">{student.Camp}</td>
              </tr>



                <tr className="table-info">
                <th scope="row">Program:</th>
                <td colspan="100%">{student.Prog}</td>
              </tr>
 


              
                <tr className="table-info">
                <th scope="row">Minor:</th>
                <td colspan="100%">{student.Minor}</td>
              </tr>


                <tr className="table-info">
                <th scope="row">Level:</th>
                <td colspan="100%">{student.Lv}</td>
              </tr>

                <tr className="table-info">
                <th scope="row">Degree Name:</th>
                <td colspan="100%">{student.DegName}</td>
              </tr>
 


                <tr className="table-info">
                <th scope="row">Curricullum Name:</th>
                <td colspan="100%">{student.CurName}</td>
              </tr>


                <tr className="table-info">
                <th scope="row">Admission Year:</th>
                <td colspan="100%">{student.AdmY}</td>
              </tr>
 


                <tr className="table-info">
                <th scope="row">Student Status:</th>
                <td colspan="100%">{student.Status}</td>
              </tr>
 



<tr className="table-info">
                <th scope="row">Admission Type:</th>
                <td colspan="100%">{student.AdmT}</td>
              </tr>


              
                <tr className="table-info">
                <th scope="row">Previous Certificate:</th>
                <td colspan="4">{student.Prev}</td>
                <th scope= "row"> Previous GPA: </th>
                <td colspan="100%">{student.PrevGPA.replace("_",".")}</td>
              </tr>


                <tr className="table-info">
                <th scope="row">Previous School:</th>
                <td colspan="100%">{student.PrevSch}</td>
              </tr>


                <tr className="table-info">
                <th scope="row">Academic Advisor:</th>
                <td colspan="100%">{student.Adv.replaceAll("_",".")}</td>
              </tr>
  


{/* 
              {test === 0 &&
              <tr className=table-info>
              <th scope=row>ConditionTest:</th>
              <td colspan=100%>Test</td>
            </tr>
               } */}
              
            </tbody>
          </Table>
        </Card>

 
        <Card body>
          <Table {...{ ['default']: true }}>
            <thead>

              <tr className="table-secondary">
                <th colspan = "100%">Academic Status</th>
              </tr>
            </thead>
            <tbody>
            <tr className="table-light">
                <th scope="row">Credit Attempt:</th>
                <td colspan="100%">{student.CreditAtm} </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

              </tr>
              <tr className="table-light">
              <th scope="row">Credit Achieved:</th>
              <td colspan="100%">{student.CreditAch}</td>
              </tr>
              <tr className = {tableType}>
              <th scope="row">GPAX:</th>
              <td colspan="100%">{U_CGPA}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
  

        <Card body>
          <Table {...{ ['default']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th colspan = "3">English Proficiency</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr className = {tableType2}>
              <th colspan="2">English Status:</th>
              <td>{student.EngStat}</td>
              </tr>

              { tofelscr != null &&
              <tr>
              <th colspan="2">TOEFEL: </th>
              <td>{String(student.tofelscr)}</td>
              </tr>
              }

              { ieltsce != null &&
              <tr>
              <th colspan="2">IELTS: </th>
              <td>{String(student.ieltsce)}</td>
              </tr>
              }

              { tu_get_scr != null &&
              <tr>
              <th colspan="2">TU-GET: </th>
              <td>{String(student.tu_get_scr)}</td>
              </tr>
              }

              { tu_get_cbt_scr != null &&
              <tr>
              <th colspan="2">TU-GET(CBT): </th>
              <td>{String(student.tu_get_cbt_scr)}</td>
              </tr>
              }
              { tofel_pbt_scr != null &&
              <tr>
              <th colspan="2">TOEFEL(PBT): </th>
              <td>{String(student.tofel_pbt_scr)}</td>
              </tr>
              }  

              { tofel_cbt_scr != null &&
                <tr>
                <th colspan="2">TOEFEL(CBT): </th>
                <td>{String(student.tofel_cbt_scr)}</td>
                </tr>
                }  
                
              { tofel_ibt_scr != null &&
                <tr>
                <th colspan="2">TOEFEL(IBT): </th>
                <td>{String(student.tofel_ibt_scr)}</td>
                </tr>
                }   

              { tofel_institute_scr != null &&
                <tr>
                <th colspan="2">TOEFEL(Institutional): </th>
                <td>{String(student.tofel_institute_scr)}</td>
                </tr>
                }

              { gts401_scr != null &&
                <tr>
                <th colspan="2">GTS401 Intensive English: </th>
                <td>{String(student.gts401_scr)}</td>
                </tr>
                }   

              { toeic_scr != null &&
                <tr>
                <th colspan="2">TOEIC: </th>
                <td>{String(student.toeic_scr)}</td>
                </tr>
                }

              { FCE_scr != null &&
                <tr>
                <th colspan="2">First Certificate in English(FCE): </th>
                <td>{String(student.FCE_scr)}</td>
                </tr>
                }      
              { CEFR_scr != null &&
                <tr>
                <th colspan="2">CEFR: </th>
                <td>{String(student.CEFR_scr)}</td>
                </tr>
                } 
                { tu005_scr != null &&
                <tr>
                <th colspan="2">TU005 (for MasterOnly): </th>
                <td>{String(student.tu005_scr)}</td>
                </tr>
                } 

                { tu006_scr != null &&
                <tr>
                <th colspan="2">TU006 (for MasterOnly): </th>
                <td>{String(student.tu006_scr)}</td>
                </tr>
                }     

              { native != null &&
                <tr>
                <th colspan="2">Native English Speaker: </th>
                <td>{String(student.native)}</td>
                </tr>
                }   


            </tbody>
          </Table>
        </Card>


    </Card>
         )})}
    </Page>
  );


}

  

};




//Variable for Database Connection
  var StdID = 6000000001;
  var FName = "Mark";
  var LName = "PhpScript";
  var Dep = "Information Computer and Communication Technology";
  var Camp = "Bangkadi Campus";
  var Prog = "Computer Engineering Curricullum (20XX)";
  var Minor = "CPE20XX-OptionXX: Game Production Technology";
  var Lv = "Bachelor";
  var DegName = "Bachelor of Engineering (Computer Engineering)";
  var CurName = "Bachelor of Engineering Program in Computer Engineering (International Program)"
  var AdmY = "20XX/1";
  var Status = "Active";
  var AdmT = "WE";
  var Prev = "M.6 / Grade 12";
  var PrevGPA = "3.XX";
  var PrevSch = "SKR";
  var Adv = "Assoc. Prof. Dr.Ekawit Nantajeewarawat";
  var CGPA = 3.59;
  var CreditAtm = 121;
  var CreditAch = 100;
  var test = 1;
  var EngStat = "Pass";
  var tofelscr = 30;
  var ieltsce = 9;
  var tu_get_scr = 800;
  var tu_get_cbt_scr = 120;
  var tofel_pbt_scr = 30;
  var tofel_cbt_scr = 30;
  var tofel_ibt_scr = 30;
  var tofel_institute_scr = 30;
  var gts401_scr = "pass";
  var toeic_scr = 990;
  var FCE_scr = 190 ;
  var CEFR_scr = 220;
  var tu005_scr;
  var tu006_scr;
  var native = "Native";

export default StudentProfile;
