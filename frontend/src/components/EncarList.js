import React, {Component} from "react";
import {connect} from "react-redux";
import service from "../services/service";
import {
    getAgeParams,
    getEcodeParams,
    getKMParams, setAge, setAvgAge, setAvgKm, setAvgPurchase, setAvgSales, setKm,
    setPageIndex, setTotalPage
} from "../redux/reducers/encarBoardReducer";
import Stack from "@mui/material/Stack"
import Pagination from "@mui/material/Pagination";

class EncarList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            boards : [],
            loadingState : false
        }
        // this.remove = this.remove.bind(this);
        console.log("constructor : ", this.props.kmParam)
        if(this.state.loadingState === false){
            this.getURLPayload();
            service.getByFilters(this.props.selectedBrand,
                this.props.selectedModel,
                this.props.selectedSubModel,
                this.props.selectedDetailModel,
                this.props.selectedYear,
                this.props.age,
                this.props.km,
                this.props.kmParam,
                this.props.ageParam,
                this.props.pageIndex,
                this.props.ecode

            ).then( (res) =>{
                console.log(res)
                this.setState({loadingState: true});
                this.setAPIreturn(res.data);
            }).then(()=>{
                this.setState({loadingState: false});
            });
        }
    };
    getURLPayload() {
        const current = decodeURI(window.location.href);
        const search = current.split("?")[1];
        const params = new URLSearchParams(search);
        const km = params.get('km');
        const age = params.get('age');
        const ecode = params.get('ecode');
        this.props.setKm(km);
        this.props.setAge(age);
        this.props.getEcodeParams(ecode);
    };

    componentDidMount() {

    }
    setAPIreturn(res){
        console.log("API CALL")
        this.setState({boards: res.page.content});
        this.props.setTotalPage(res.page.totalPages);
        this.props.setAvgAge(res.avgAge);
        this.props.setAvgKm(res.avgMileage);
        this.props.setAvgSales(res.avgSalesPrice);
        this.props.setAvgPurchase(res.avgPurchasePrice);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.loadingState === true){
            return
        }
        if(this.props.selectedBrand !== prevProps.selectedBrand ||
            this.props.selectedModel !== prevProps.selectedModel ||
            this.props.selectedSubModel !== prevProps.selectedSubModel ||
            this.props.selectedDetailModel !== prevProps.selectedDetailModel ||
            this.props.kmParam !== prevProps.kmParam ||
            this.props.ageParam !== prevProps.ageParam ||
            this.props.pageIndex !== prevProps.pageIndex ||
            this.props.age !== prevProps.age ||
            this.props.km !== prevProps.km
        ) {
            if (this.state.loadingState === false) {
                service.getByFilters(this.props.selectedBrand,
                    this.props.selectedModel,
                    this.props.selectedSubModel,
                    this.props.selectedDetailModel,
                    this.props.selectedYear,
                    this.props.age,
                    this.props.km,
                    this.props.kmParam,
                    this.props.ageParam,
                    this.props.pageIndex,
                    this.props.ecode
                ).then((res) => {
                    console.log("didupate api call")
                    this.setState({loadingState: true});
                    this.setAPIreturn(res.data);
                }).then(() => {
                    this.setState({loadingState: false});
                    console.log(this.props.kmParam)
                    console.log("didupate api finish")
                });
            }
        }
    }

    handlePageChange = (event, page) =>{
        this.props.setPageIndex(page);
    }
    render() {
        return(
          <div className="container" align={"center"}>
              <table className="table table-bordered">
                  <thead className="thead-light">
                      <tr className="text-center">
                          <th scope="col">브랜드</th>
                          <th scope="col">메인모델</th>
                          <th scope="col">서브모델</th>
                          <th scope="col">세부모델</th>
                          <th scope="col">년식</th>
                          <th scope="col">월수</th>
                          <th scope="col">주행거리</th>
                          <th scope="col">사고이력</th>
                          <th scope="col">단순수리</th>
                          <th scope="col">판매가(만원)</th>
                          <th scope="col">판매여부</th>
                          <th scope="col">자세히보기</th>
                      </tr>
                  </thead>
                  <tbody>
                    {   this.state.boards.map( board=>
                              <tr className="text-center" key={board.id}>
                                  <td>
                                      {board.manufacturer}
                                  </td>
                                  <td>
                                      {board.model}
                                  </td>
                                  <td>
                                      {board.badge}
                                  </td>
                                  <td>
                                      {board.badgedetail}
                                  </td>
                                  <td>
                                      {board.formyear}
                                  </td>
                                  <td>
                                      {board.age}
                                  </td>
                                  <td>
                                      {board.mileage}
                                  </td>
                                  <td>
                                      {board.accident}
                                  </td>
                                  <td>
                                      {board.repair}
                                  </td>
                                  <td>
                                      {board.price}
                                  </td>
                                  <td>
                                      {board.bsold === false ? "N" : "Y"}
                                  </td>
                              </tr>
                      )
                    }
                  </tbody>
              </table>
              <Stack spacing={2}>
                  <Pagination count={this.props.totalPage} showFirstButton showLastButton defaultPage={1}
                              page={this.props.pageIndex}
                              onChange={this.handlePageChange}
                  />
              </Stack>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    AvgSalesPrice : state.encarBoardReducer.AvgSalesPrice,
    AvgPurchasePrice : state.encarBoardReducer.AvgPurchasePrice,
    AvgKm : state.encarBoardReducer.AvgKm,
    AvgAge : state.encarBoardReducer.AvgAge,
    km : state.encarBoardReducer.km,
    age : state.encarBoardReducer.age,
    ecode : state.encarBoardReducer.Ecodeparam,
    selectedBrand : state.encarBoardReducer.selectedBrand,
    selectedModel : state.encarBoardReducer.selectedModel,
    selectedSubModel : state.encarBoardReducer.selectedSubModel,
    selectedDetailModel : state.encarBoardReducer.selectedDetailModel,
    selectedYear : state.encarBoardReducer.selectedYear,
    totalPage : state.encarBoardReducer.totalPage,
    pageIndex : state.encarBoardReducer.pageIndex,
    kmParam : state.encarBoardReducer.KMparam,
    ageParam : state.encarBoardReducer.Ageparam
})
const mapDispatchToProps = dispatch => {
  return {
      getKMParams:(value)=>dispatch(getKMParams(value)),
      getAgeParams:(value)=>dispatch(getAgeParams(value)),
      getEcodeParams:(value)=>dispatch(getEcodeParams(value)),
      setPageIndex:(value)=>dispatch(setPageIndex(value)),
      setTotalPage:(value)=>dispatch(setTotalPage(value)),
      setKm:(value)=>dispatch(setKm(value)),
      setAvgKm:(value)=>dispatch(setAvgKm(value)),
      setAge:(value)=>dispatch(setAge(value)),
      setAvgAge:(value)=>dispatch(setAvgAge(value)),
      setAvgSales:(value)=>dispatch(setAvgSales(value)),
      setAvgPurchase:(value)=>dispatch(setAvgPurchase(value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EncarList);
// export default EncarList
