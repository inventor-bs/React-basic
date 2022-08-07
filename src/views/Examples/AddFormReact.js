import React from 'react';

class AddFormReact extends React.Component {

    state = {
        job: '',
        salary: ''
    }

    hanndleFirstNameChange = (event) => {
        this.setState({
            job: event.target.value
        })
    }

    hanndleLastNameChange = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = () => {

        if (!this.state.job || !this.state.salary) {
            alert('Missing required fields')
            return;
        }
        this.props.addJob(
            {
                id: Math.floor(Math.random() * 100),
                job: this.state.job,
                salary: this.state.salary
            }
        )

        this.setState({
            job: '',
            salary: ''
        })

    }


    render() {
        let { job, salary } = this.state;

        return (
            <>
                <div>
                    Hello React Form
                </div>
                <form>
                    <label htmlFor="fname">Job:</label><br />
                    <input type="text" id="fname" name="fname"
                        value={this.state.job}
                        onChange={(event) => this.hanndleFirstNameChange(event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" id="lname" name="lname"
                        value={this.state.salary}
                        onChange={(event) => this.hanndleLastNameChange(event)}
                    /><br /><br />
                    <input type="button" value="Submit"
                        onClick={() => this.handleSubmit()}
                    />
                </form>

                <div className="Display">
                    Job is {job} and Salary is {salary}
                </div>
            </>
        )
    }

}



export default AddFormReact;