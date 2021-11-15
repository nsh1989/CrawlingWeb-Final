import React, {Component} from "react";
import {connect} from "react-redux";
import service from "../services/service";
import {getURLParams} from "../redux/reducers/encarBoardReducer";
import {AppBar, Card, FormLabel, Grid, TextareaAutosize, TextField, Typography, withStyles} from "@material-ui/core";

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
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.km !== this.props.km){
        }
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
                            <TextField defaultValue="10000" label="마일리지"
                                       className={classes.textfield} value="10000"/>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField defaultValue="12" label="월수(차량 나이)"
                                       className={classes.textfield} value="12"/>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography> 기준 월수 : {this.props.age} </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography> 기준 KM: {this.props.km} </Typography>
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
                                <Typography> 평균 판매 가격 (만원): {this.props.AvgSalesPrice} </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography> 평균 매입 가격 (만원): {this.props.AvgSalesPrice !== null ?  this.props.AvgSalesPrice * 0.93 : ""} </Typography>
                            </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    km : state.encarBoardReducer.KMparam,
    age : state.encarBoardReducer.Ageparam,
    ecode : state.encarBoardReducer.Ecodeparam,
    AvgSalesPrice : state.encarBoardReducer.AvgSalesPrice,
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));
// export default EncarList
