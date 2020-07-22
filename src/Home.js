import React, { Component } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import fire from './config/fire';
import db from './config/fireStore'

class Home extends Component{
    constructor(props){
        super(props)
        this.onChangeValue = this.onChangeValue.bind(this);
        this.insert = this.insert.bind(this);
        this.state={
            choice: ""
        }
    }
    onChangeValue(e){
        console.log(e.target.value);
        this.setState({[e.target.name] : e.target.value});
    }
    logout(){
        fire.auth().signOut();
    }
    insert(e){
        e.preventDefault();
        var user = fire.auth().currentUser;
        if(user!=null){
            console.log(user.uid);
            db.collection("users").doc(user.uid).set({
                name: user.email,
                Choice: this.state.choice,
            })
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        }
    }
    render(){
        const style1 = {
            fontSize: '90%',
            marginLeft: 'auto',
            textAlign: 'center',
            marginRight: 'auto',
            float: 'justify',
            width: '80%'
        }  
        
        const style2 = {
            textAlign: 'center',
        
        }

        const styleb={
            width:'540px', 
            margin:'50px',
            display:'table'
        }

        const stylebbr = {
            display:'table-row'
        }
        const stylebbc = {
            display:'table-cell', 
            width:'50%',
            padding:'10px'
        }
        const stylebbc2 = {
            display:'table-cell', 
            width:'50%',
            padding:'10px',
            backgroundColor:'rgb(250,250,250)'
        }
        const stylebutton={
            backgroundColor: 'white',
            borderColor: 'blue',
            textAlign: 'center',
            display: 'inline-block',
            fontSize: '20px',
            width : '150px',
            height : '50px'
        }
        const styletabbutton = {
            
            backgroundColor: 'inherit',
            float: 'left',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '14px 16px',
            transition: '0.3s',
            fontSize: '17px'
        }
        const styletabbuttonActive = {
            
            backgroundColor: 'lightgreen',
            float: 'left',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            padding: '14px 16px',
            transition: '0.3s',
            fontSize: '17px'

        }
        return (
            <div>
                <div className="tab">
                <button className="tablinks" style={styletabbuttonActive}>Goal</button>
                <button className="tablinks" style={styletabbutton}>Activity</button>
                <button className="tablinks" style={styletabbutton}>Profile</button>
                <button className="tablinks" style={styletabbutton}>Select Coach</button>
            </div>
            <br/>
            <br/>
            <div className="container"> 
            <div className="box" style={styleb}> 
                <div className="box-row" style={stylebbr}> 
                    <div className="box-cell box1" style={stylebbc}> 
                    <div>
                    <h1>Goal</h1>
                    <p>Select your primary goal, what do you want to accomplish in next few months?</p>
                    </div>
                    </div> 
                    <div className="box-cell box2" style={stylebbc2}> 
                    <div classname="cl2" onChange={this.onChangeValue}>
                        <input type="radio" value='Get leaner' name="choice" /> Get leaner
                        <br/>
                        <br/>
                        <input type="radio" value='Get Active Again' name="choice" /> Get Active Again
                        <br/>
                        <br/>
                        <input type="radio" value='Reduce pain or injury' name="choice" /> Reduce pain or injury
                        <br/>
                        <br/>
                        <input type="radio" value='Improve cardio or speed' name="choice" /> Improve cardio or speed
                        <br/>
                        <br/>
                        <input type="radio" value='Improve Sports Performance' name="choice" /> Improve Sports performance 
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <center> <button style={stylebutton} onClick={this.insert}><b>Submit</b></button> </center>
                    
                    <br/>
                    <br/>
                    </div> 
                </div> 
                
            </div>
            
            <center><button onClick={this.logout}>Logout</button></center> 
        </div>
         
        </div>
            // <div className="home">
            //    <div classname="cl1">
                //    <div>
                //     <h1>Goal</h1>
                //     <p>Select your primary goal, what do you want to accomplish in next few months?</p>
                //     </div>
                    // <div classname="cl2" onChange={this.onChangeValue}>
                    //     <input type="radio" value="Get leaner" name="choice" /> Get leaner
                    //     <input type="radio" value="Get Active Again" name="choice" /> Get Active Again
                    //     <input type="radio" value="Reduce pain or injury" name="choice" /> Reduce pain or injury
                    //     <input type="radio" value="Improve cardio or speed" name="choice" /> Improve cardio or speed
                    //     <input type="radio" value="Improve Sports performance" name="choice" /> Improve Sports performance 
                    // </div>
            //    </div>
              
               
            //    <button>Submit</button>
            //      <button onClick={this.logout}>Logout</button>
            // </div>
        )
    }
}

export default Home;