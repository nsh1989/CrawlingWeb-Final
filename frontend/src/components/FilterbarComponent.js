import React, {Component, useState, useEffect} from "react";
import service from "../services/service";
import {FormControl, InputLabel, MenuItem, OutlinedInput, Select} from "@material-ui/core";
import {connect} from "react-redux";

class FilterbarComponent extends Component{

    ITEM_HEIGHT = 48;
    ITEM_PADDING_TOP = 8;
    MenuProps = {
        PaperProps: {
            style: {
                maxHeight: this.ITEM_HEIGHT * 4.5 + this.ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            brandoptions : [],
            selectedOption: null,
            modeloptions : [],
            selectedModelOption: null,
        }
    }
    componentDidMount() {
        console.log("FilterbarComponent componentDidmount fired");
        service.getBrands().then( (res) =>{
            console.log("FilterbarComponent, :", res);
            this.setState({brandoptions: res.data});
        });
    };
    componentDidUpdate(prevProps, prevState) {
        if(this.state.selectedOption !== prevState.selectedOption){
            if(this.state.selectedOption === "All" || this.state.selectedOption === "") {
                return;
            }
            console.log("componentdidupdate");
            console.log(this.state.selectedOption);
            console.log(prevProps.selectedOption);
            service.getModels(this.state.selectedOption).then((res)=>{
                this.setState({modeloptions: res.data})
            }).then(()=>{
                console.log(this.state.modeloptions);
            });
        }

    }
    //Brand Select
    handleChange = (event) => {
        this.setState( {selectedOption : event.target.value});
        console.log(this.state.selectedOption)
        // this.state.selectedOption=event.target.value;
        // console.log(this.state.selectedOption)
        this.setState({modeloptions: []});
        this.setState({selectedModelOption: null});

        // if(this.state.selectedOption !== null){
        //     console.log("test!!")
        //     service.getModels(this.state.selectedOption).then((res)=>{
        //         this.setState({modeloptions: res.data})
        //     }).then(()=>{
        //         console.log(this.state.modeloptions);
        //     });
        // }

    };

    //model Select
    modelhandleChange = (event) => {
        this.setState({selectedModelOption: event.target.value});
        console.log(this.state.selectedModelOption)
        // this.setState({modeloptions: []});
    };

    render() {
        console.log("FilterbarComponent render: ", this.state.brandoptions);
        const {localState} = this.state;
        const {storeBrand} =this.props;
        console.log("localState ", {localState});
        console.log("this.props ", {storeBrand});
        return(
            <div>
                <FormControl sx={{m:1, minWidth: 50, mt:3}} className="w-25 h-25">
                    <InputLabel id="brand-select-label">브랜드</InputLabel>
                    <Select
                        labelId="brand-select-label"
                        id="brand-select" value={this.state.selectedOption}
                        onChange={this.handleChange}
                        MenuProps={this.MenuProps}
                        input={<OutlinedInput />}
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="All">전체</MenuItem>
                        {this.state.brandoptions.map( (option, index) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{m:1, minWidth: 50, mt:3}} className="w-25 h-25">
                    {/*////model*/}
                    <InputLabel id="brand-select-label">모델</InputLabel>
                    <Select
                        labelId="model-select-label"
                        id="model-select" value={this.state.selectedModelOption}
                        onChange={this.modelhandleChange}
                        MenuProps={this.MenuProps}
                        input={<OutlinedInput />}
                    >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="All">전체</MenuItem>
                        {this.state.modeloptions.map( (option, index) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}


export default FilterbarComponent;
