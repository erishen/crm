import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/interview.css'

class InterviewPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div id="interview_div">
                <div id="head">我是头部</div>
                <div id="main">
                    <div id="left">我是左边,宽:200px</div>
                    <div id="right">我是右边,宽:200px</div>
                    <div id="mid">我是中间,宽自适应</div>
                </div>
                <div id="foot">我是底部</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, {})(InterviewPage)