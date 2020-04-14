import React from "react";
import Option from "./Option";
import Button from '@material-ui/core/Button';

const Options = (props) => (
    <div>
        <div>
            <h3>Your option</h3>
            <Button
                variant="outlined"
                color="secondary"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </Button>
        </div>

        {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;