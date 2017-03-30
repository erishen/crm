import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../css/menu.css'

export default class Menu extends Component {
    add(){
        var { paramObj } = this.props;
        paramObj && paramObj.add();
    }

    render(){
        return (
            <ul>
                <li>
                    <Button className="btn btn-success" onClick={()=>this.add()}>新增</Button>
                </li>
            </ul>
        );
    }
}