import React from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Option = (props) => (
    <div>
        {props.optionText}


        <IconButton
            aria-label="delete"
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}
        >
            <DeleteIcon fontSize="small"/>
        </IconButton>
    </div>
);


export default Option;