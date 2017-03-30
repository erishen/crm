import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import interviewData from '../data/interview'
import './css/interview.css'

class InterviewPage extends Component {
    static propTypes = {

    }

    componentDidMount(){
        //document.getElementById('test_div').innerHTML = '<h1>testtestste</h1>';
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

        return (
            <div id="interview_div">
                <div className="header">
                    <h2>面试题目整理</h2>
                </div>
                <div className="main">
                    <div className="main-inner">
                        {content}
                    </div>
                </div>
                <div className="sub">
                    <div className="contentContainer">
                        <div className="contentCenter">
                            <h4>sub</h4>
                        </div>
                    </div>
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