import React, {Component} from "react";
import {connect} from "react-redux";
import {getAgeParams, getKMParams, setAge, setKm} from "../redux/reducers/encarBoardReducer";
import {
    AppBar,
    Grid, InputAdornment, InputLabel,
    OutlinedInput,
    Typography,
    withStyles
} from "@material-ui/core";

const styles = {
    header: {
        height: 50,
        fontfamily: "san-serif",
        padding: '0, 30px',
    },
    textfield: {
        padding: '0 30px',
        margin: '1 10px',
        // boxShadow: '0 3px 5px 2px',
        borderRadius: 3,
    },
};

class Header extends Component{
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.km !== this.props.km){
        }
    }
    handleAgeParamChange = (event) =>{
        this.props.getAgeParams(event.target.value);
    }
    handleKmParamChange = (event) =>{
        this.props.getKMParams(event.target.value);
    }
    handleAgeChange = (event) =>{
        this.props.setAge(event.target.value);
    }
    handleKmChange = (event) =>{
        this.props.setKm(event.target.value);
    }

    render() {
        const {classes} = this.props;
        return(
            <div>
                <AppBar position={"static"} className={classes.header}>시장 판매가 리스트 {this.props.selectedBrand}
                    {this.props.selectedModel} {this.props.selectedSubModel} {this.props.selectedDetailModel}
                    {this.props.selectedYear}
                </AppBar>
                <div style={{margin:20}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography> 조회 매개 변수 : 해당 매개 변수의 +- 값에 해당하는 차량 결과를 조회합니다.</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography> 기준 차량 : 기준 차량의 월수 및 마일리지</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel htmlFor="outlined-adornment-kmparam">마일리지 매개 변수 입력</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-kmparam"
                                value={this.props.kmParam}
                                onChange={this.handleKmParamChange}
                                endAdornment={<InputAdornment position="end">KM</InputAdornment>}
                                label="마일리지 매개 변수 입력"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel htmlFor="outlined-adornment-ageParam">월수 매개 변수 입력</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-ageParam"
                                value={this.props.ageParam}
                                onChange={this.handleAgeParamChange}
                                endAdornment={<InputAdornment position="end">개월</InputAdornment>}
                                label="월수 매개 변수 입력"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel htmlFor="outlined-adornment-Age">기준 월수</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-Age"
                                value={this.props.age}
                                onChange={this.handleAgeChange}
                                endAdornment={<InputAdornment position="end">개월</InputAdornment>}
                                label="기준 월수 입력"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel htmlFor="outlined-adornment-km">기준 KM</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-km"
                                value={this.props.km}
                                onChange={this.handleKmChange}
                                endAdornment={<InputAdornment position="end">KM</InputAdornment>}
                                label="기준 월수 입력"
                            />
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography> 조회 결과 :</Typography>
                        </Grid>
                            <Grid item xs={3}>
                                <Typography> 평균 KM : {this.props.AvgKm} km</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography> 평균 월수 : {this.props.AvgAge} </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography> 평균 판매 가격 : {this.props.AvgSalesPrice * 10000} </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography> 평균 매입 가격 : {this.props.AvgSalesPrice !== null ?  this.props.AvgSalesPrice * 0.93 * 10000: ""} </Typography>
                            </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    km : state.encarBoardReducer.km,
    age : state.encarBoardReducer.age,
    kmParam : state.encarBoardReducer.KMparam,
    ageParam : state.encarBoardReducer.Ageparam,
    ecode : state.encarBoardReducer.Ecodeparam,
    AvgSalesPrice : state.encarBoardReducer.AvgSalesPrice,
    AvgPurchasePrice : state.encarBoardReducer.AvgPurchasePrice,
    AvgKm : state.encarBoardReducer.AvgKm,
    AvgAge : state.encarBoardReducer.AvgAge,
    totalCars : state.encarBoardReducer.totalCars,
    selectedBrand : state.encarBoardReducer.selectedBrand,
    selectedModel : state.encarBoardReducer.selectedModel,
    selectedSubModel : state.encarBoardReducer.selectedSubModel,
    selectedDetailModel : state.encarBoardReducer.selectedDetailModel,
    selectedYear : state.encarBoardReducer.selectedYear
})
const mapDispatchToProps = dispatch => {
    return {
        setAge:(value)=>dispatch(setAge(value)),
        setKm:(value)=>dispatch(setKm(value)),
        getKMParams:(value)=>dispatch(getKMParams(value)),
        getAgeParams:(value)=>dispatch(getAgeParams(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
// export default EncarList
