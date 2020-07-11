import React, { Component } from 'react'
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import DataList from '../components/datalist/Datalist.js'
import jsonServerProvider from 'ra-data-json-server';
import fakeDataProvider from 'ra-data-fakerest';
import dummy from './dummy.json';

export class Dashboard extends Component {
    // state = {
    //     json: {}
    // }
    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => this.setState({json}))
    // }
    render() {
        // const { json } = this.state;
        console.log(dummy)
        // console.log(json)
        const dataProvider = fakeDataProvider({
            data: dummy
        })
        return (
            <Admin dataProvider={ dataProvider }>
                <Resource name="data" list={DataList}/>
            </Admin>
        )
    }
}
export default Dashboard;