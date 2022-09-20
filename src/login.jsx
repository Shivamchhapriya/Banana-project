import React,{Component} from "react";
import ControlLogin from "./controlLogin";



class Login extends Component {
    state = {
        account :{ 
                username:"",
                password:"",
          },
          errors:{}
     } 
     validation = e =>{
        const errors={}
        if(this.state.account.username.trim()===""){
            errors.username = 'user name is require'
        }
        if(this.state.account.password.trim()===""){
            errors.password = 'password is require'
        }
        return Object.keys(errors).length === 0 ? null : errors
    }
    handlerSubmit = e =>{
        e.preventDefault()

        const errors = this.validation()
        console.log(errors)
        this.setState ({errors:errors||{}});
        if (errors) return;
        console.log('submitted');
    }
    handlerchange = ({currentTarget:input}) =>{
        // alert("gg")
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({account})
    }
    render() { 
        const {account,errors} =this.state
        return (
            <>
                <h1 className="text-center mt-5">login</h1>
            
                <form onSubmit={this.handlerSubmit}>
                   <ControlLogin 
                        defaultvalue={account.username} 
                        name="username"
                        label='username'
                        placeholder='username'
                        onChange={this.handlerchange } 

                        type="text"
                        error={errors.username}
                        />
                   
                   
                        <ControlLogin  
                        defaultvalue={account.password} 
                        name="password" 
                        label='passsword'
                        type="password"
                        onChange={this.handlerchange } 
                        error={errors.password}
                        />
                        
                       
                        <button  class="btn btn-primary mt-3">Login</button>
                           
                </form>
            </>
        );
    }
}
 
export default Login;
