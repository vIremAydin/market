import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {TextField} from "@material-ui/core";
import {initT, filterUsersTag} from "../redux/actions";



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
        backgroundColor:"white"


    },
    select:{
        overflowY:"scroll",
        height:"200px",
    }

});


const Tag = ({tags, users, filterUsersTag, initT}) => {
    useEffect(() =>{
        console.log(tags);
        initT();
    }, [users.loading]);

    const classes = useStyles();
    const [filteredTags, setTags] = useState(tags);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        console.log(users);
        if(tags){
            const results = tags.filter(person =>
                person.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setTags(results);}
    }, [searchTerm, tags]);

    const handleChange = (event) => {
        const index = tags.findIndex(i => event.target.name === i.name);
        let ar = [...tags];
        ar[index].checked = !ar[index].checked;
        filterUsersTag(ar);
        console.log("hell");
        console.log(tags);
    };

    const searchHandler = (value) => {
        setSearchTerm(value);
    }

    //console.log(tags);
    return (<div className={classes.root}>

        <TextField
            id="input-with-icon-textfield1"
            label=""
            onChange={(e) => searchHandler(e.target.value)}
            placeholder={"Search Tag"}
        />
        <FormControl component="fieldset" className={classes.select}>
            <FormGroup>
                {
                    filteredTags.map(i => <FormControlLabel
                        control={<Checkbox key={i.name} checked={i.checked} onChange={handleChange} name={i.name}/>}
                        label={i.name + " (" + i.quantity + ")"}/>)
                }

            </FormGroup>
        </FormControl>

    </div>)

}
const mapStateToProps = (state) => {
    return {tags: state.users.tags, users: state.users};
}

const mapDispatchToProps = (dispatch)=>({
    initT :  () => dispatch(initT()),
    filterUsersTag: (item) => dispatch(filterUsersTag(item)),

})
export default connect(mapStateToProps, mapDispatchToProps)(Tag);