import React from "react";

import AddOption from "./AddOption";
import Action from "./Action"
import Options from "./Options"
import Header from "./Header"
import OptionModal from "./OptionModal"

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    componentDidMount() {
        try {
            console.log("Fetching data");
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing at all
        }

    }

    componentDidUpdate(prevPros, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log("saving data");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log("Will unmount");
    }

    handleDeleteOptions = () => {

        this.setState(() => ({
            options: []
        }));
    };

    handleDeleteOption = (optionToRemove) => {

        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>
                optionToRemove !== option
            )
        }));
    };

    handlePick = () => {
        const index = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];

        this.setState(() => ({
            selectedOption: option
        }));

    };

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));

    };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

    render() {
        const subtitle = "Subtitle";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div>
                    <Action
                        hasOptions={0 < this.state.options.length}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}

                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
};
