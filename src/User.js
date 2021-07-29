import React from 'react'
 export default class User extends React.Component{
     render(){
         console.log(this.props)
         return(
            <div style={{backgroundColor:'skyblue',margin:'20px'}}>
                <h1>hello {this.props.name}</h1>
            </div>
         )
         
     }
 }