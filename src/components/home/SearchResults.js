import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/styles.css';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="full-screen container-fluid">
                <div className="table-responsive" style={{ margin: 10 }}>
                    <table className="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th rowspan="2">S.No</th>
                                <th rowspan="2">Transport</th>
                                <th rowspan="2">Departure</th>
                                <th rowspan="2">Arrival</th>
                                <th rowspan="2">Cost</th>
                                <th rowspan="2">Discount</th>
                                <th rowspan="2">Reference</th>
                                <th colspan="2">Duration</th>
                            </tr>
                            <tr>
                                <th>Hours</th>
                                <th>Minutes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.results.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.transport}</td>
                                            <td>{item.departure}</td>
                                            <td>{item.arrival}</td>
                                            <td>{item.cost}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.reference}</td>
                                            <td>{item.duration.h}</td>
                                            <td>{item.duration.m}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    results: state.travelFilters.searchResults
})

export default connect(mapStateToProps, null)(SearchResults);

