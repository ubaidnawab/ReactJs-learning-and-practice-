import React,{Component} from 'react';
import '../css/style.css';
// const getYear = ()=>{
// const newDate = new Date();
// return newDate.getFullYear();
// }
// const user={
//     name:'ubaid',
//     fatherName:'nawab',
//     age:23
// }
// const Header = () =>{
//     return( <div>
//                 {/* <div>{user.name}</div>
//                 <div>{user.fatherName}</div>
//                 <div>{user.age }</div> */}

//             </div>    
//     //    getYear()
//     )
// }

class Header extends Component{

    state={

        name:'ubaid'
    }

    inputChangeHandler=(event)=>{
        this.setState({
            name:event.target.value
        })
        console.log(event.target.value)
    }
    render(){
        console.log(this.state.name);
        return(
            <header >
                <div className="logo" onClick={()=> console.log("i was clicked")} >Logo</div>
                <input type="text" onChange={this.inputChangeHandler} />
                <div className="nameDiv">{this.state.name}</div>
            </header>
        )
    }
}
export default Header; 