import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import interviewData from '../data/interview'
import Menu from '../components/Menu'
import Overlay from '../components/Overlay'
import { Modal, Button } from 'react-bootstrap'
import '../css/interview.css'

class InterviewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuOpen: true, // 是否打开目录菜单，手机端可用
            addOpen: false, // 是否打开新增窗口 Modal
        };
    }

    componentDidMount(){
        //document.getElementById('test_div').innerHTML = '<h1>testtestste</h1>';
    }

    toggerTopRight(){
        var { menuOpen } = this.state;

        this.setState({
            menuOpen: !menuOpen
        });
    }

    add(){
        console.log('add interview subject');
        this.setState({
            addOpen: true
        });
    }

    hide(){
        this.setState({
            addOpen: false
        });
    }

    render() {
        var content = _.map(interviewData, (item, index)=>{
            //console.log('item: ', item, index);
            var { title, href, desc } = item;
            return (
                <section key={'section'+index}>
                    <h5><a href={href} target="_blank">{index+1}. {title}</a></h5>
                    {desc()}
                </section>
            );
        });

        var { menuOpen, addOpen } = this.state;
        var menuParamObj = { add: ()=>{this.add()} };
        var addParamObj = { show: addOpen, hide: ()=>{this.hide()} };

        console.log('addOpen', addOpen);

        return (
            <div id="interview_div">
                {/* 手机端目录窗口 */}
                {!menuOpen && <div className="menu_overlay">
                    <Menu paramObj={menuParamObj} />
                 </div>}

                {/* 新增窗口 */}
                {addOpen && <Overlay paramObj={addParamObj} />}

                 {/* 主体窗口 */}
                <div className="header">
                    <div id="topright_div" className="togger_display" onClick={()=>this.toggerTopRight()}>
                        {menuOpen && <img alt="open" src="http://ww2.sinaimg.cn/large/0060lm7Tgy1fe4ph0xd5ij300k00g030.jpg" />}
                        {!menuOpen && <img alt="close" src="http://ww1.sinaimg.cn/large/0060lm7Tgy1fe4ph0ukb9j300i00i0ax.jpg" />}
                    </div>
                    <h2>面试题目整理</h2>
                </div>

                <div className="main">
                    <div className="main-inner">
                        {content}
                    </div>
                </div>

                <div className="sub">
                    <Menu paramObj={menuParamObj} />
                </div>

                <div className="extra">
                    <div className="contentContainer">
                        <div className="contentCenter">
                            <h4>extra</h4>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <h4>@ERISHEN</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, {})(InterviewPage)