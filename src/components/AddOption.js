import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault(); // prevent reflesh;
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        console.log("aaaaaaaaaaaaaa");
        this.setState(() => ({
            error: error
        }));

        if (!error) {
            e.target.elements.option.value = "";
        }

    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <TextField
                        name="option"
                        label="Write Your Option"
                        type="text"
                        variant="outlined"
                        size="small"
                        error={this.state.error}
                        helperText={this.state.error}
                    />
                    {/*<Button variant="contained">Add Option</Button>*/}
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Add
                    </Button>


                </form>

            </div>
        )
    }
}
