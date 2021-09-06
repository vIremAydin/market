import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {TextField} from "@material-ui/core";
import {initB, filterUsers} from "../redux/actions";



const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        boxShadow: "0px 2px 4px",
        borderRadius: "2px",
        shadowColor:"red",
        padding:"10px",
        height:"250px",
        backgroundColor:"white",


    },
    select:{
        overflowY:"scroll",
        height:"200px",
    }


});


const Brand = ({brands, users, filterUsers, initB}) => {
    useEffect(() =>{
        console.log(brands);
        initB();
    }, [users.loading]);

    const classes = useStyles();
    const [filteredBrands, setBrands] = useState(brands);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log(brands);
        if(brands){
        const results = brands.filter(person =>
            person.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setBrands(results);}
    }, [searchTerm, brands]);

    const handleChange = (event) => {
        const index = brands.findIndex(i => event.target.name === i.name);
        let ar = [...brands];
        ar[index].checked = !ar[index].checked;
        filterUsers(ar);
    };

    const searchHandler = (value) => {
        setSearchTerm(value);
    }

    //console.log(brands);
    return (<div className={classes.root}>

        <TextField
            id="input-with-icon-textfield"
            label=""
            onChange={(e) => searchHandler(e.target.value)}
          placeholder={"Search Brand"}
        />
        <FormControl className={classes.select} component="fieldset">
            <FormGroup>
                {
                    filteredBrands.map(i => <FormControlLabel
                        control={<Checkbox key={i.name} checked={i.checked} onChange={handleChange} name={i.name}/>}
                        label={i.name + " (" + i.quantity + ")"}/>)
                }

            </FormGroup>
        </FormControl>

    </div>)

}
const mapStateToProps = (state) => {
    return {brands: state.users.brands, users: state.users};
}

const mapDispatchToProps = (dispatch)=>({
    initB :  () => dispatch(initB()),
    filterUsers: (item) => dispatch(filterUsers(item)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Brand);