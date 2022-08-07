import React from "react";

class Test extends React.Component {

    state = {
        name: "Duc Nguyen",
        address: "Thanh Hoa"
    }


    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        });
    };


    handleClickbutton = (event) => {
        alert(`Button clicked`);
    }

    render() {
        return (

            <>
                <div className="first">Hello my first test class Component</div>
                <div className="Input">
                    <input type="text" value={this.state.name}
                        onChange={
                            (event) => {
                                this.handleOnchangeName(event)
                            }}></input>
                </div>

                <div className="ClickEvent">
                    <button type="button" onClick={() => this.handleClickbutton()}>
                        Click me!
                    </button>
                </div>
                <div className="second">My name is {this.state.name}</div>
            </>

        )
    }
}

export default Test;