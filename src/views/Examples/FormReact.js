import React from 'react';
import ChildComponent from './ChildComponent';
import AddFormReact from './AddFormReact';


class FormReact extends React.Component {

    state = {
        arrJobs: [
            { id: `1`, job: `IT`, salary: `$1000` },
            { id: `2`, job: `DE`, salary: `$1000` },
            { id: `3`, job: `EN`, salary: `$1000` },
        ]
    }


    addJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    handleOnclickDeleteJob = (id) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => id !== item.id);
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            <>
                <AddFormReact
                    addJob={this.addJob}

                />
                <ChildComponent
                    job={this.state.arrJobs}
                    handleOnclickDeleteJob={this.handleOnclickDeleteJob}
                />
            </>
        )
    }

}

export default FormReact;