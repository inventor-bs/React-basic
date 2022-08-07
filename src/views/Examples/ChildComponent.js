import React from 'react';


class ChildComponent extends React.Component {


    state = {
        showJobs: false
    }


    handleShowHideJobs = () => {
        this.setState({ showJobs: !this.state.showJobs });
    }

    render() {

        let { job, handleOnclickDeleteJob } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs ?
                    <div>
                        {job.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id}>
                                        {` ${item.job} - ${item.salary}`}
                                        &nbsp;
                                        <span style={{ cursor: "pointer" }} onClick={() => handleOnclickDeleteJob(item.id)} >x</span>
                                    </div>

                                </>
                            )

                        })}
                        <button className='btnHide' onClick={() => this.handleShowHideJobs()}>Hide</button>
                    </div >
                    : <>
                        <div>
                            <button className='btnShow' onClick={() => this.handleShowHideJobs()}>Show</button>
                        </div>
                    </>}
            </>
        )
    }
}




/*
    Function component that return a component has no state
*/

// const ChildComponent = (props) => {
//     let {name, age, job} = props;
//     return (
//         <>
//             <div className="Display">
//                 My name is {name} and my age is {age}
//             </div>
//             {job.map((item, index) => {
//                 return (
//                     <div key={item.id}>
//                         {` ${item.job} - ${item.salary}`}
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

export default ChildComponent;