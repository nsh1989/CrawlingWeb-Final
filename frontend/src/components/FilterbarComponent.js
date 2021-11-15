import React, {Component, useState, useEffect} from "react";
import service from "../services/service";
import {AppBar, FormControl, InputLabel, MenuItem, OutlinedInput, Select, withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {
    selectBrand,
    selectDetailModel,
    selectModel,
    selectSubModel, selectYear, setPageIndex
} from "../redux/reducers/encarBoardReducer";

const styles = {
    selectbox: {
        padding: 1,
        width: "20%",
        borderRadius: 3,
    },
};


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
            submodeloptions : [],
            selectedSubModelOption: null,
            detailmodeloptions : [],
            selecteddetailModelOption: null,
            yearmodeloptions : [],
            selectedyearModelOption: null,
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
            service.getModels(this.state.selectedOption).then((res)=>{
                this.setState({modeloptions: res.data})
            }).then(()=>{
                this.props.setSelectBrand(this.state.selectedOption)
            });
            this.props.setPageIndex(1);
        }
        if(this.state.selectedModelOption !== prevState.selectedModelOption){
            if(this.state.selectedModelOption === "All" || this.state.selectedModelOption === "") {
                return;
            }
            console.log("componentDidUpdate selectedModel :");
            service.getSubModels(this.state.selectedModelOption).then((res)=>{
                this.setState({submodeloptions: res.data})
                console.log(res.data)

            }).then(()=>{
                this.props.setSelectModel(this.state.selectedModelOption)
            });
            this.props.setPageIndex(1);
        }
        if(this.state.selectedSubModelOption !== prevState.selectedSubModelOption){
            if(this.state.selectedSubModelOption === "All" || this.state.selectedSubModelOption === "") {
                return;
            }
            console.log("componentDidUpdate selectedSubModelOption :" , this.state.selectedSubModelOption);
            service.getDetailModels(this.state.selectedSubModelOption).then((res)=>{
                console.log(res.data.length)
                if(res.data.length <= 1){
                    service.getYearModels(this.state.selectedSubModelOption, null)
                        .then((res)=>{
                        this.setState({yearmodeloptions: res.data})}
                )}else{
                    this.setState({detailmodeloptions: res.data})
                    console.log(res.data)
                }
            }).then(()=>{
                this.props.setSelectSubModel(this.state.selectedSubModelOption)
            });
            this.props.setPageIndex(1);
        }
        if(this.state.selecteddetailModelOption !== prevState.selecteddetailModelOption){
            if(this.state.selecteddetailModelOption === "All" || this.state.selecteddetailModelOption === "") {
                return;
            }
            console.log("componentDidUpdate selectedSubModelOption :");
            service.getYearModels(this.state.selectedSubModelOption, this.state.selecteddetailModelOption)
            .then((res)=>{
                this.setState({yearmodeloptions: res.data})}
            ).then(()=>{
                this.props.setSelectDetailModel(this.state.selecteddetailModelOption)
            });
            this.props.setPageIndex(1);
        }
        if(this.state.selectedyearModelOption !== prevState.selectedyearModelOption){
            if(this.state.selectedyearModelOption === "All" || this.state.selectedyearModelOption === "") {
                return;
            }
            console.log("componentDidUpdate selectedyearModelOption :");
            this.props.setSelectYear(this.state.selectedyearModelOption)
            this.props.setPageIndex(1);
        }
    }
    //Brand Select
    handleChange = (event) => {
        this.setState( {selectedOption : event.target.value});
        this.setState({
            modeloptions: [],
            selectedModelOption: null,
            submodeloptions : [],
            selectedSubModelOption: null,
            detailmodeloptions : [],
            selecteddetailModelOption: null,
            yearmodeloptions : [],
            selectedyearModelOption: null,
        })
    };
    //model Select
    modelhandleChange = (event) => {
        this.setState({selectedModelOption: event.target.value});
        console.log("modelhandleChange " ,this.state.selectedModelOption)
        this.setState({
            submodeloptions : [],
            selectedSubModelOption: null,
            detailmodeloptions : [],
            selecteddetailModelOption: null,
            yearmodeloptions : [],
            selectedyearModelOption: null,
        })
    };
    //submodel select
    submodelhandleChange = (event) => {
        this.setState({selectedSubModelOption: event.target.value});
        console.log(this.state.selectedSubModelOption)
        this.setState({
            detailmodeloptions : [],
            selecteddetailModelOption: null,
            yearmodeloptions : [],
            selectedyearModelOption: null,
        })
    };
    //detail select
    detailmodelhandleChange = (event) => {
        this.setState({selecteddetailModelOption: event.target.value});
        console.log(this.state.selecteddetailModelOption)
        this.setState({
            yearmodeloptions : [],
            selectedyearModelOption: null,
        })
    };
    //detail select
    yearhandleChange = (event) => {
        this.setState({selectedyearModelOption: event.target.value});
        console.log(this.state.selectedyearModelOption)
    };

    render() {
        const {classes} = this.props;
        return(
            <div style={{margin:20}}>
                <FormControl sx={{width: 1/4}} className={classes.selectbox}>
                    <InputLabel id="brand-select-label">브랜드</InputLabel>
                    <Select
                        labelId="brand-select-label"
                        id="brand-select" value={this.state.selectedOption}
                        onChange={this.handleChange}
                        MenuProps={this.MenuProps}
                        input={<OutlinedInput />}
                    >
                        <MenuItem value="All">전체</MenuItem>
                        {this.state.brandoptions.map( (option, index) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*ModelSelect*/}
                <FormControl sx={{m:1, minWidth: 50, mt:3}} className={classes.selectbox}>
                    {/*////model*/}
                    <InputLabel id="model-select-label">모델</InputLabel>
                    <Select
                        labelId="model-select-label"
                        id="model-select" value={this.state.selectedModelOption}
                        onChange={this.modelhandleChange}
                        MenuProps={this.MenuProps}
                        input={<OutlinedInput />}
                    >
                        {this.state.modeloptions.map( (option, index) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*SubModelSelect*/}
                <FormControl sx={{m:1, minWidth: 50, mt:3}} className={classes.selectbox}>
                    {/*////model*/}
                    <InputLabel id="submodel-select-label">서브모델</InputLabel>
                    <Select
                        labelId="submodel-select-label"
                        id="submodel-select" value={this.state.selectedSubModelOption}
                        onChange={this.submodelhandleChange}
                        MenuProps={this.MenuProps}
                        input={<OutlinedInput />}
                    >
                        {this.state.submodeloptions.map( (option, index) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*detailModelSelection*/}
                <FormControl sx={{m:1, minWidth: 50, mt:3}} className={classes.selectbox}>
                    {/*////model*/}
                    <InputLabel id="detailmodel-select-label">세부모델</InputLabel>
                    <Select
                        labelId="detailmodel-select-label"
                        id="detailmodel-select" value={this.state.selecteddetailModelOption}
                        onChange={this.detailmodelhandleChange}
                        MenuProps={this.MenuProps}
                        input={<OutlinedInput />}
                    >
                        {this.state.detailmodeloptions.map( (option, index) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*년식선택*/}
                <FormControl sx={{m:1, minWidth: 50, mt:3}} className={classes.selectbox}>
                    {/*////model*/}
                    <InputLabel id="year-select-label">년식</InputLabel>
                    <Select
                        labelId="year-select-label"
                        id="year-select" value={this.state.selectedyearModelOption}
                        onChange={this.yearhandleChange}
                        MenuProps={this.MenuProps}
                        input={<OutlinedInput />}
                    >
                        <MenuItem value="All">전체</MenuItem>
                        {this.state.yearmodeloptions.map( (option, index) => (
                            <MenuItem value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state,
    selectedBrand : state.encarBoardReducer.selectedBrand,
    selectedModel : state.encarBoardReducer.selectedModel,
    selectedSubModel : state.encarBoardReducer.selectedSubModel,
    selectedDetailModel : state.encarBoardReducer.selectedDetailModel,
    selectedYear : state.encarBoardReducer.selectedYear,
    ecode : state.encarBoardReducer.Ecodeparam,
    totalPage : state.encarBoardReducer.totalPage,
    pageIndex : state.encarBoardReducer.pageIndex
})
const mapDispatchToProps = dispatch => {
    return {
        setSelectBrand:(value)=>dispatch(selectBrand(value)),
        setSelectModel:(value)=>dispatch(selectModel(value)),
        setSelectSubModel:(value)=>dispatch(selectSubModel(value)),
        setSelectDetailModel:(value)=>dispatch(selectDetailModel(value)),
        setSelectYear:(value)=>dispatch(selectYear(value)),
        setPageIndex:(value)=>dispatch(setPageIndex(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(FilterbarComponent));
