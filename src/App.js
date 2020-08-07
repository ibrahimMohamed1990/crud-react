import React, { Component } from 'react';
import './App.css';
import From from './component/Form';
import Lists from './component/Lists';

class App extends Component {

  state = {
    lists : [
      {id:1,name:"html"},
      {id:2,name:"css"},
      {id:3,name:"java"},
      {id:4,name:"C#"},
    ],
    current:''
  }

  //update course  
  update = (e) =>{
    this.setState({
      current:e.target.value
    })
  }
 
  // add course

  add = (e) =>{
    e.preventDefault()
    let curr = this.state.current
    let courses = this.state.lists
    courses.push({name:curr})
    this.setState({lists:courses, current:''})
    e.target.elements.course.value = ''
  }
  // delete course
  del = (index) =>{
    let courses = this.state.lists
    courses.splice(index,1)
    this.setState({lists:courses })
 
  }

  // edit
  
  editCourse = (id,val) => {
    let courses = this.state.lists
    let course = courses[id]
    course['name'] = val
    this.setState({lists:courses })
  }


  render() {
  const courses = this.state.lists
  const courseList = courses.map((item , index) =>{
    return (<Lists data={item} key={index} val={this.state.lists[index]['name']} index={index} del={this.del} editCourse={this.editCourse}/>)
  })
  return (
    <section className="App">
      <h2>Add Courses</h2>
      <From add={this.add} update={this.update}/>
      <ul>{courseList}</ul>
    </section>
  );
}
}

export default App;
