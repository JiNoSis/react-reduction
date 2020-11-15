import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';
import firebase from '../firebase.js';


var StdID =6000000001;
var Mon1,M1_room;
var Mon2,M2_room;
var Tue1,T1_room;
var Tue2,T2_room;
var Wed1,W1_room;
var Wed2,W2_room;
var Thu1,Th1_room;
var Thu2,Th2_room;
var Fri1,F1_room;
var Fri2,F2_room;


class StudentCourseList extends React.Component{
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      Course:[]

    };

  };

  componentDidMount() {
    const CourseRef= firebase.database().ref('Std_Course').orderByChild('StdID').equalTo(StdID);
    CourseRef.once('value', (snapshot) => {
      console.log(snapshot.val());
      let courseref1 = snapshot.val();
      console.log(courseref1);
      let newState=[];
      for (let course in courseref1){
          newState.push({
              course_code: courseref1[course].course_code,
              course_name: courseref1[course].course_name,
              schedule_date: courseref1[course].schedule_date,
              schedule_time: courseref1[course].schedule_time,
              midterm_date: courseref1[course].midterm_date,
              midterm_time: courseref1[course].midterm_time,
              final_date: courseref1[course].final_date,
              final_time: courseref1[course].final_time,
              section: courseref1[course].section,
              room: courseref1[course].room
          });

           this.setState({Course: newState});

        };
      });

};


render() {
    


  return (

    
    <Page
      title="Student Course"
      breadcrumbs={[{ name: 'Profile', active: true }]}
      className="ProfilePage"
    >
         {this.state.Course.map((course)=>{

        if(course.schedule_date === "Monday" && course.schedule_time === "9_00-12_00"){
            Mon1 = course.course_code;
            M1_room = course.room;
            
        }
        if(course.schedule_date === "Monday" && course.schedule_time === "13_00-16_00"){
            Mon2 = course.course_code;
            M2_room = course.room;
            
        }
        if(course.schedule_date === "Tuesday" && course.schedule_time === "9_00-12_00"){
            Tue1 = course.course_code;
            T1_room = course.room;
            
        }
        if(course.schedule_date === "Tuesday" && course.schedule_time === "13_00-16_00"){
            Tue2 = course.course_code;
            T2_room = course.room;
            
        }
        if(course.schedule_date === "Wednesday" && course.schedule_time === "9_00-12_00"){
            Wed1 = course.course_code;
            W1_room = course.room; 
        }

        if(course.schedule_date === "Wednesday" && course.schedule_time === "13_00-16_00"){
            Wed2 = course.course_code;
            W2_room = course.room;
            
        }
        if(course.schedule_date === "Thursday" && course.schedule_time === "9_00-12_00"){
            Thu1 = course.course_code;
            Th1_room = course.room;
            
        }
        if(course.schedule_date === "Thursday" && course.schedule_time === "13_00-16_00"){
            Thu2 = course.course_code;
            Th2_room = course.room;
            
        }
        if(course.schedule_date === "Friday" && course.schedule_time === "9_00-12_00"){
            Fri1 = course.course_code;
            F1_room = course.room; 
        }

        if(course.schedule_date === "Friday" && course.schedule_time === "13_00-16_00"){
            Fri2 = course.course_code;
            F2_room = course.room;
            
        }




    }
         )}
    
    

    
    
<Card className="mb-3">
        <CardHeader>Class Schedule</CardHeader>
        <CardBody>
        <Card>
         <CardHeader>Timetable</CardHeader>
         <Table {...{ ['bordered']: true }}>
           <thead>
            <tr>
                <th class="schedule">Day/Time</th>
                <th class="schedule">8:00-9:00</th>
                <th class="schedule">9:00-10:00</th>
                <th class="schedule">10:00-11:00</th>
                <th class="schedule">11:00-12:00</th>
                <th class="schedule">12:00-13:00</th>
                <th class="schedule">13:00-14:00</th>
                <th class="schedule">14:00-15:00</th>
                <th class="schedule">15:00-16:00</th>
                <th class="schedule">16:00-17:00</th>
             </tr>   
            </thead>
            <tbody>
                <tr class="schedule">
                  <th align="center">Monday</th>   
                  <td></td>
                  <td class="schedule">{Mon1}<br></br>{M1_room} </td>
                  <td class="schedule">{Mon1}<br></br>{M1_room}</td>
                  <td class="schedule">{Mon1}<br></br>{M1_room}</td>
                  <td className="lunch"> Lunch</td>
                  <td class="schedule">{Mon2} <br></br> {M2_room}</td>
                  <td class="schedule">{Mon2} <br></br> {M2_room}</td>
                  <td class="schedule">{Mon2} <br></br> {M2_room}</td>
                  <td></td>
                </tr>
                <tr class="schedule">
                  <th align="center">Tuesday</th>   
                  <td class="schedule"></td>
                  <td class="schedule">{Tue1}<br></br>{T1_room}</td>
                  <td class="schedule">{Tue1}<br></br>{T1_room}</td>
                  <td class="schedule">{Tue1}<br></br>{T1_room}</td>
                  <td className="lunch"> Lunch</td>
                  <td class="schedule">{Tue2}<br></br>{T2_room}</td>
                  <td class="schedule">{Tue2}<br></br>{T2_room}</td>
                  <td>{Tue2}<br></br>{T2_room}</td>
                  <td></td>
                </tr>
                <tr class="schedule">
                  <th align="center">Wednesday</th>   
                  <td></td>
                  <td>{Wed1}<br></br>{W1_room}</td>
                  <td>{Wed1}<br></br>{W1_room}</td>
                  <td>{Wed1}<br></br>{W1_room}</td>
                  <td className="lunch"> Lunch</td>
                  <td>{Wed2}<br></br>{W2_room}</td>
                  <td>{Wed2}<br></br>{W2_room}</td>
                  <td>{Wed2}<br></br>{W2_room}</td>
                  <td></td>
                </tr>
                <tr class="schedule">
                  <th align="center">Thursday</th>   
                  <td></td>
                  <td>{Thu1}<br></br>{Th1_room}</td>
                  <td>{Thu1}<br></br>{Th1_room}</td>
                  <td>{Thu1}<br></br>{Th1_room}</td>
                  <td className="lunch"> Lunch</td>
                  <td>{Thu2}<br></br>{Th2_room}</td>
                  <td>{Thu2}<br></br>{Th2_room}</td>
                  <td>{Thu2}<br></br>{Th2_room}</td>
                  <td></td>
                </tr>

                <tr class="schedule">
                  <th align="center">Friday</th>   
                  <td></td>
                  <td>{Fri1}<br></br>{F1_room}</td>
                  <td>{Fri1}<br></br>{F1_room}</td>
                  <td>{Fri1}<br></br>{F1_room}</td>
                  <td className="lunch"> Lunch</td>
                  <td>{Fri2}<br></br>{F2_room}</td>
                  <td>{Fri2}<br></br>{F2_room}</td>
                  <td>{Fri2}<br></br>{F2_room}</td>
                  <td></td>
                </tr>

            </tbody>  
         </Table>

        </Card>
        <Card body>
          <Table {...{ ['striped']: true }}>
            <thead>
              {/* <tr>
                <th>Semester 1/2020</th>
              </tr> */}
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Section</th>
                <th>Regular Schedule</th>
                <th>Midterm</th>
                <th>Final</th>
              </tr>
            </thead>
            
            <tbody>
            {this.state.Course.map((course) => {
              return (
                <tr>
                    <td>{course.course_code}</td>
                    <td>{course.course_name}</td>
                    <td>{course.section}</td>
                    <td>{course.schedule_date} <br></br> {course.schedule_time.replaceAll("_",".")} </td>
                    <td>{course.midterm_date} <br></br>{course.midterm_time.replaceAll("_",".")}</td>
                    <td>{course.final_date} <br></br>  {course.final_time.replaceAll("_",".")}</td>
                </tr>
              )  
            })}  

            </tbody>
          </Table>
        </Card>
        </CardBody>
        </Card>
    </Page>
  



    );
    }
}
  







export default StudentCourseList;
