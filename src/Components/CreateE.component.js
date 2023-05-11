import React,{Component} from "react";

export default class CreateE extends Component{

    constructor(props){
        super(props);

        
        this.state = {
            username : '',
            discription:'',
            duration:0,
            date:new Date(),
            users:[]
        }
    }

    onchangeUsername (e){
        this.setState({
            username : e.target.value
        });
    }
    onchangeDescription (e){
        this.setState({
            description : e.target.value
        });
    }
    onchangeDuration (e){
        this.setState({
            duration : e.target.value
        });
    }
    onchangeDate (date){
        this.setState({
            date :date
        });
    }

    onsubmit(e)
    {
        e.preventDefault();

        const exercise = {
            username : this.state.username,
            description : this.state.description,
            duration : this.state.duration,
            date : this.state.date,
        }

        console.log(exercise);

        window.location = "/";
    }



    render(){
        return (
            <div>
            <p>Create E</p>
            </div>
        )
    }
    
}