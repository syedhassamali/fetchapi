import React, { Component } from 'react'

export default class Fetchapi extends Component {
    constructor(props){
        super(props);
        this.state = {
            user : []
        }
           
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => this.setState({
            user : json    
          }))
    
    }
    delete(index){
        let arr = this.state.user;
        arr.splice(index ,1)
        this.setState({
            user:arr
        })
    }
    render() {
        return (
            <div>
                
               <table>
                   <thead>
                       <tr>
                           <th>S.NO</th>
                           <th>UserName</th>
                           <th>Email</th>
                           <th>Address</th>
                           <th>Company Name</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.user.length ? 
                       this.state.user.map((user,index) => {
                           return(
                           <tr key={index}>
                               <td>{index + 1}</td>
                               <td>{user.name}</td>
                               <td>{user.email}</td>
                               <td>{user.address.street}</td>
                               <td>{user.company.name}</td>
                               <td><button onClick={() => this.delete(index)}>Delete</button></td>
                           </tr>
                       )})                       
                       : null}
                   </tbody>
                        
             </table>

               </div>
        )
    }
}
