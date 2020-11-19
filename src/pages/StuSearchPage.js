import React from 'react';
import Page from 'components/Page';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Table
} from 'reactstrap';

import firebase from 'firebase';

var today = new Date();
var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

const CSPage = () => {

  const [formData, setFormData] = React.useState({
    studentId: "",
    studentName: "",
    studentSurname: "",
    level: "ALL Level",
    numOfRecord: 25
  })
  const [query, setQuery] = React.useState({
    studentId: "",
    studentName: "",
    studentSurname: "",
    level: "ALL Level",
    numOfRecord: 25
  })
  const [data, setData] = React.useState([{
    studentId: "",
    name: "",
    department: "",
    status: ""
  }])

  React.useEffect(() => {
    firebase.database().ref("/Students")
    .orderByChild("FName").equalTo(query.studentName)
    .limitToFirst(query.numOfRecord)
      .once("value", (data) => {
        let tmpArr = []
        data.forEach(student => {
          let tmpVal = student.val()
          tmpArr.push({
            studentId: tmpVal.StdID,
            name: tmpVal.FName + " " + tmpVal.LName,
            department: tmpVal.Dep,
            status: tmpVal.Status
          })
        })
        setData(tmpArr)
      })
    return () => { }
  }, [query])

  const handleValueChange = (e, state) => {
    setFormData({
      ...formData,
      [state]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setQuery(formData)
  }

  return (
    <Page title="Student Timetable" breadcrumbs={[{ name: 'stu-search', active: true }]}>
      <Card>
        <CardHeader>Student Search</CardHeader>
        <CardBody>
          <Form>
            <Label>{date.toString()}</Label>
            <br></br>
            {/* <FormGroup>
              <Label for="exampleSelect">Please insert Student ID :</Label>
              <Input value={formData.studentId} onChange={(e) => handleValueChange(e, "studentId")} className="mb-2" placeholder="60XXXXXXXX" />
            </FormGroup> */}
            <FormGroup>
              <Label for="exampleSelect">Student Firstname :</Label>
              <Input value={formData.studentName} onChange={(e) => handleValueChange(e, "studentName")} className="mb-2" />
            </FormGroup>
            {/* <FormGroup>
              <Label for="exampleSelect">Student Surname :</Label>
              <Input value={formData.studentSurname} onChange={(e) => handleValueChange(e, "studentSurname")} className="mb-2" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select Level</Label>
              <Input value={formData.level} onChange={(e) => handleValueChange(e, "level")} type="select" name="selectLev">
                <option>ALL Level</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>Doctoral</option>
              </Input>
            </FormGroup> */}
            <FormGroup>
              <Label for="exampleSelect">Specify the max number of record</Label>
              <Input value={formData.numOfRecord} onChange={(e) => handleValueChange(e, "numOfRecord")} type="select" name="specNumRec">
                <option>25</option>
                <option>50</option>
                <option>100</option>
                <option>250</option>
              </Input>
            </FormGroup>

            <Label for="exampleSelect">Click for Search </Label>
            <br></br>
            <Button onClick={handleSubmit}>Search</Button>
          </Form>
        </CardBody>
      </Card>

      <br />

      <Card className="mb-3">
        <CardHeader>Student lists</CardHeader>
        <CardBody>
          <Table {...{ 'striped': true }}>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody >
              {data.map(student => {
                return (
                  <tr>
                    <td>{student.studentId}</td>
                    <td>{student.name}</td>
                    <td>{student.department}</td>
                    <td>{student.status}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Page>
  );
};

export default CSPage;
