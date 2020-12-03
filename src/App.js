import React, { Component } from 'react'


import {Cards, Chart, CountryPicker} from './components'

import styles from './App.module.css';
import {fetchData } from './api';

import covid19Image from './images/covid19-analysis.png'

export default class App extends Component {

    state = {
        data :{},
        country :''
    }

    async componentDidMount(){
        const fetchedData = await fetchData()
        this.setState({data:fetchedData});
    }

    handleCountryChange = async (country) => {
        // fetch the data 
        const fetchedData = await fetchData(country);
        // set the data
        this.setState({data:fetchedData,country:country});
    }

    render() {
        const {data,country} = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={covid19Image}  alt="covid-19" />
                <Cards data={data} country={country} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
               <footer className={styles.footer}> &copy; {new Date().getFullYear()} Design & Developed by Jayabal</footer>
            </div>
        )
    }
}
