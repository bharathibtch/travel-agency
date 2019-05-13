import React, {Component} from 'react';
import {connect} from 'react-redux';

import '../styles/styles.css';
import {searchTravels} from '../../actions/FinderActions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: '',
            to: '',
            sort: 'cheapest',
            places: [
                {
                    value: 'London',
                    name: 'London'
                }, {
                    value: 'Paris',
                    name: 'Paris'
                }, {
                    value: 'Moscow',
                    name: 'Moscow'
                }, {
                    value: 'Madrid',
                    name: 'Madrid'
                }, {
                    value: 'Berlin',
                    name: 'Berlin'
                }, {
                    value: "Amsterdam",
                    name: "Amsterdam"
                }, {
                    value: "Brussels",
                    name: "Brussels"
                }, {
                    value: "Warsaw",
                    name: "Warsaw"
                }, {
                    value: "Stockholm",
                    name: "Stockholm"
                }, {
                    value: "Prague",
                    name: "Prague"
                }, {
                    value: "Geneva",
                    name: "Geneva"
                }, {
                    value: "Budapest",
                    name: "Budapest"
                }, {
                    value: "Kiev",
                    name: "Kiev"
                }, {
                    value: "Lisbon",
                    name: "Lisbon"
                }, {
                    value: "Athens",
                    name: "Athens"
                }, {
                    value: "Rome",
                    name: "Rome"
                }, {
                    value: "Istanbul",
                    name: "Istanbul"
                }
            ],
            fromPlaces: [],
            toPlaces: []
        }
        this.handleFrom = this
            .handleFrom
            .bind(this);
        this.handleTo = this
            .handleTo
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.provideValuesForFrom = this
            .provideValuesForFrom
            .bind(this);
        this.provideValuesForTo = this
            .provideValuesForTo
            .bind(this);
    }

    handleFrom(event) {
        this.setState({
            from: event.target.value
        }, () => {
            this.provideValuesForTo()
        });
    }

    handleTo(event) {
        this.setState({
            to: event.target.value
        }, () => {
            this.provideValuesForFrom()
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        if (this.state.from && this.state.to) {
            if (this.state.from !== this.state.to) {
                var searchResults = this
                    .props
                    .travelFilters
                    .travels
                    .deals
                    .filter((item) => {
                        return item
                            .departure
                            .toUpperCase() === this
                            .state
                            .from
                            .toUpperCase() && item
                            .arrival
                            .toUpperCase() === this
                            .state
                            .to
                            .toUpperCase()
                    });
                if (this.state.sort === "cheapest") {
                    searchResults.sort((a, b) => parseFloat(a.cost) - parseFloat(b.cost));
                } else {
                    searchResults.sort((a, b) => {
                        return parseFloat(a.duration.h + a.duration.m) - parseFloat(b.duration.h + b.duration.m)
                    });
                }
                this
                    .props
                    .searchTravels(searchResults);
                if (searchResults.length === 0) {
                    alert("No results!");
                }
            } else {
                alert("Select from and to diff places");
            }
        } else {
            alert("Select from or to place");
        }
    }

    provideValuesForTo() {
        if (!this.state.from) {
            this.setState({toPlaces: this.state.places})
        } else {
            this.setState({
                toPlaces: this
                    .state
                    .places
                    .filter((item) => item.value !== this.state.from)
            })
        }
    }

    provideValuesForFrom() {
        if (!this.state.to) {
            this.setState({fromPlaces: this.state.places})
        } else {
            this.setState({
                fromPlaces: this
                    .state
                    .places
                    .filter((item) => item.value !== this.state.to)
            })
        }
    }

    setSort(sortType) {
        this.setState({sort: sortType})
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.travelFilters.searchResults.length !== 0) {
            this
                .props
                .history
                .push("/search-results");
        }
    }

    render() {
        return (
            <div className='full-screen d-flex justify-content-center align-items-center'>
                <div style={{
                    padding: 10
                }}>
                    <form
                        style={{
                        margin: 20,
                        flexDirection: 'column',
                        display: 'flex'
                    }}
                        onSubmit={this.handleSubmit}>
                        <label>
                            From
                        </label>
                        <select
                            value={this.state.from}
                            onFocus={() => {
                            this.provideValuesForFrom()
                        }}
                            onChange={this.handleFrom}>
                            {this
                                .state
                                .fromPlaces
                                .map((e, key) => <option value={e.value} key={key}>{e.name}</option>)
}
                        </select>
                        <label>
                            To
                        </label>
                        <select
                            value={this.state.to}
                            onFocus={() => {
                            this.provideValuesForTo()
                        }}
                            onChange={this.handleTo}>
                            {this
                                .state
                                .toPlaces
                                .map((e, key) => <option value={e.value} key={key}>{e.name}</option>)
}
                        </select>
                        <div
                            className="row"
                            style={{
                            paddingBottom: 10,
                            paddingTop: 10
                        }}>
                            <button
                                className="col"
                                onClick={() => this.setSort('cheapest')}
                                style={{
                                backgroundColor: this.state.sort === 'cheapest'
                                    ? 'grey'
                                    : 'white'
                            }}>
                                Cheapest
                            </button>
                            <button
                                className="col"
                                onClick={() => this.setSort('fastest')}
                                style={{
                                backgroundColor: this.state.sort === 'fastest'
                                    ? 'grey'
                                    : 'white'
                            }}>
                                Fastest
                            </button>
                        </div>
                        <input type="submit" value="Search"/>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({travelFilters: state.travelFilters})

const mapDispatchToProps = (dispatch) => ({
    searchTravels: (data) => dispatch((searchTravels(data)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
