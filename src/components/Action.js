import React from "react";
import Button from '@material-ui/core/Button';

const Action = (props) => (
    <div>
        <Button
            variant="contained"
            color="primary"
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >
            What should I do?
        </Button>
    </div>
);


export default Action;