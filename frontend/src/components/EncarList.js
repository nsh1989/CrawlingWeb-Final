import React, {Component} from "react";
import {connect} from "react-redux";
import service from "../services/service";
import {
    getAgeParams,
    getEcodeParams,
    getKMParams,
    getURLParams,
    setPageIndex
} from "../redux/reducers/encarBoardReducer";
import Stack from "@mui/material/Stack"
import Pagination from "@mui/material/Pagination";

class EncarList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            boards : [],
        }
        // this.remove = this.remove.bind(this);
    };
    getURLPayload() {
        const current = decodeURI(window.location.href);
        console.log(current);
        console.log("currentUrl : ", window.location.href);
        const search = current.split("?")[1];
        console.log("search : ", search);
        const params = new URLSearchParams(search);
        console.log("params : ", params);
        const km = params.get('km');
        const age = params.get('age');
        const ecode = params.get('ecode');
        console.log("KM : ", km);
        console.log("currentUrl : ", window.location.href);
        this.props.getKMParams(km);
        this.props.getAgeParams(age);
        this.props.getEcodeParams(ecode);
    };

    componentDidMount() {
        service.getBoards().then( (res) =>{
            console.log(res.data)
            this.setState({boards: res.data.content});
        });
        this.getURLPayload();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.selectedBrand !== prevState.selectedBrand){
            service.getByFilters(this.props.selectedBrand,
                this.props.selectedModel,
                this.props.selectedSubModel,
                this.props.selectedDetailModel,
                this.props.selectedYear,
                this.props.age,
                this.props.km,
                this.props.kmParam,
                this.props.ageParam,
                1,
                this.props.ecode

            ).then( (res) =>{
                console.log(res.data)
                this.setState({boards: res.data});
            });
        }
    }
    handlePageChange = (page) =>{
        console.log("page!!!")
        console.log(this.props)
        console.log(page)
        console.log(page.target.outerText)
        this.props.setPageIndex(Number(page.target.outerText))
    };
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
    ...state,
    km : state.encarBoardReducer.KMparam,
    age : state.encarBoardReducer.Ageparam,
    ecode : state.encarBoardReducer.Ecodeparam,
    selectedBrand : state.encarBoardReducer.selectedBrand,
    selectedModel : state.encarBoardReducer.selectedModel,
    selectedSubModel : state.encarBoardReducer.selectedSubModel,
    selectedDetailModel : state.encarBoardReducer.selectedDetailModel,
    selectedYear : state.encarBoardReducer.selectedYear,
    totalPage : state.encarBoardReducer.totalPage,
    pageIndex : state.encarBoardReducer.pageIndex,
    kmParam : state.encarBoardReducer.kmParam,
    ageParam : state.encarBoardReducer.ageParam
})
const mapDispatchToProps = dispatch => {
  return {
      getKMParams:(value)=>dispatch(getKMParams(value)),
      getAgeParams:(value)=>dispatch(getAgeParams(value)),
      getEcodeParams:(value)=>dispatch(getEcodeParams(value)),
      setPageIndex:(value)=>dispatch(setPageIndex(value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EncarList);
// export default EncarList
