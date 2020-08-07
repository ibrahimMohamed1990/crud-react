import React, { Component, Fragment } from 'react'; 

class Lists extends Component {
  state={
    isEdit : false
  }

    renderCourse = () => { 
             return( 
             
         <li>
           <span>{this.props.data.name}</span>
           <button onClick={  this.toggleState }>edit</button>
           <button onClick={ () => this.props.del(this.props.index)}>x</button>
         </li>
             
               ) 
        
    }

    toggleState = () => {
      let isEdit = this.state.isEdit
      this.setState({
        isEdit:! isEdit
      })
    }


    submitUpdate = (e) => { 
      e.preventDefault()
      console.log(e.target.elements.coco.value)
      this.props.editCourse(this.props.index , this.input.value)
      this.toggleState() 

    }


    renderUpdate = () => { 
      return( 
       <form onSubmit={this.submitUpdate}>
         <input type="text" name="coco" defaultValue={this.props.val} ref={(v) => this.input = v}/>
         <button>updtae course</button>
       </form>
        ) 
 
}
render() {
  let isEdit = this.state.isEdit
  return(
    <Fragment>  
      {  isEdit ? this.renderUpdate() : this.renderCourse()}
    </Fragment>
  )
}

}
export default Lists