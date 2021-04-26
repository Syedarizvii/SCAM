import React, { Component } from 'react';
import axios from 'axios';

class EditStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
        }
    }

    componentDidMount = () => {
        this.getCaseById();
    }

    // To get Case based on ID
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
        const { status } = this.state;
        axios.put('http://localhost:5000/api/addcrime/updateCaseStatus/' + this.props.match.params._id, {
            status: status,
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
                        Status
                         <input
                            name="status"
                            type="text"
                            value={this.state.status}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </label>

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

export default EditStatus;
