import React from 'react';

const From = (props) => 
{
return ( 
<form onSubmit={props.add}>
    <input type="text" placeholder="add course" name="course" onChange={props.update} />
        <button type="submit">add new</button>
</form>
)

}

export default From 