import React, { Component } from 'react';
import axios from 'axios';
class UpdateCaseDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            investigated_by: '',
            designation: ''

        }
    }

    componentDidMount = () => {
        this.getCaseById();
    }

    // To get case based on ID
    getCaseById() {
        axios.get('/api/addcrime/edit-status/' + this.props.match.params._id)
            .then((res) => {
                var data = res.data;
                this.setState({ cases_list: data.crime });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // To update the record on submit
    handleSubmit = (event) => {
        event.preventDefault();
        const { investigated_by } = this.state;
        const { designation } = this.state;

        axios.put('http://localhost:5000/api/addcrime/updateCaseDetails/' + this.props.match.params._id, {
            investigated_by: investigated_by,
            designation: designation
        })
            .then((response) => {
                console.log(response);
                this.props.history.push('/admincases');
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        investigated_by
                        <input
                            name="investigated_by"
                            type="text"
                            value={this.state.investigated_by}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <label>
                        designation
                        <input
                            name="designation"
                            type="text"
                            value={this.state.designation}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>
                    <br />
                    <input
                        type="submit"
                        value="submit"
                        className="btn btn-primary"
                    />
                </form>
            </div>
        );
    }
}

export default UpdateCaseDetails;
