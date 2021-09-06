import React from "react";
import {connect} from "react-redux";
import {getUsers, initBrands} from "../redux/actions";
import DisplayItems from "./display.items";

class Collections extends React.Component  {

    componentDidMount(){
         this.props.getUsers();

         console.log(this.props.users);
    };

render() {
    const {users} = this.props.users;
    return (
            <DisplayItems  />
    )
}

}

const mapStateToProps  = (state) =>
    ({users:state.users});

export default connect(mapStateToProps,{getUsers, initBrands})(Collections)