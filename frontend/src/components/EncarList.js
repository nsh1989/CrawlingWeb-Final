import React, {Component, useState, useEffect} from "react";
import service from "../services/service";
// import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
// import AppNavbar from './AppNavbar';

class EncarList extends Component{
    constructor(props) {
        super(props);
        this.state = {boards : []}
        // this.remove = this.remove.bind(this);
    }
    componentDidMount() {
        console.log("componentDidmount fired");
        service.getBoards().then( (res) =>{
            this.setState({boards: res.data.content});
        });
        console.log("didmount: ", this.state.boards);
    }
    render() {
        console.log("data: " , this.state.boards)
        return(
          <div className="container">
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
                          <th scope="col">판매가</th>
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
                              </tr>
                      )
                    }
                  </tbody>
              </table>
          </div>
        );
    }
}

export default EncarList
