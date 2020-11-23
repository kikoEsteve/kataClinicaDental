import React from 'react';

// Con Clases
class User extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <span> Name: {this.props.name},</span>
            <span> Surname:{this.props.surname} </span>
            <span> Age: {this.props.age} </span>
        </div>)
    }
}
// Con funciones
// const User = props => {
//     return <div>
//         <span> Name: {props.name},</span>
//         <span> Surname:{props.surname} </span>
//         <span> Age: {props.age} </span>
//     </div>;
// }


export default User;