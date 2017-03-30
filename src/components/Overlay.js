import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../css/overlay.css'

export default class Overlay extends Component {

    hide(){}
    submit(){}
    cancel(){
        var { paramObj } = this.props;
        var { hide } = paramObj;
        hide && hide();
    }

    render(){
        var { paramObj } = this.props;
        var { show } = paramObj;

        return (
            <div>
                {show && <div id="add_overlay">
                    <div className="add_content container">
                        <div className="row">
                            <div className="line">
                                <input type="text" id="person" value={''} className="form-control" placeholder="责任人" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="line">
                                <input type="text" id="jira" value={''} className="form-control" placeholder="JIRA ID" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="line">
                                <input type="text" id="title" value={''} className="form-control" placeholder="标题" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="line">
                                <textarea id="desc" value={''} className="form-control" placeholder="描述" maxLength={1000}
                                    style={{height:200}} />
                            </div>
                        </div>

                        <Button className="btn btn-success" onClick={()=>this.submit()}>提交</Button>
                        <Button className="btn btn-default" onClick={()=>this.cancel()}>取消</Button>
                    </div>
                </div>}
            </div>
        );
    }
}