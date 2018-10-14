import React, { Component } from 'react';
import Loader from '../../components/Loader'
import SeriesList from '../../components/SeriesList'
import Intro from '../../components/Intro';

class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFeching: false
    }
    
    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFeching: true })
        
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
          .then(response => response.json())
          .then(json => this.setState({ series: json, isFeching: false }))

    }

    render () {
        const { series, seriesName, isFeching} = this.state;

        return (
            <div>
                <Intro message="Here toy can find all of your most loved series"/>
                <div>
                    <input type='text' onChange={this.onSeriesInputChange}/>
                </div>
                {
                    !isFeching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFeching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>No TV series have been with this name</p>
                }
                {
                    isFeching && <Loader/>
                }
                {
                    !isFeching && <SeriesList list={this.state.series}/> 
                }
                  
            </div>
        )
    }
}

export default Series;