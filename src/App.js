import React, {Component} from 'react'
import Loading from './Components/Loading';
import './App.css';
//We will use axios to get the data from github API
import axios from 'axios'
//to get the date we want of the last 30 days we will use moment.js
import moment from 'moment'
import ReposeList from './Components/ReposeList'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //define the array of objects which will carry reposes data
            repose: [],
            page: 1,
            //make sure when we scroll the app still loading by setting boolean tue and we can control it later
            stateOfLoading: true

        }
    }

    //when the app start the component work at same time
    componentDidMount() {
        this.loadReposes()
        window.addEventListener('scroll', this.handleLoading)
    }

    loadReposes = () => {
        const {repose, page} = this.state;
        //get the exact date using moment.js

        
        const year = moment().format('YYYY');
        const month = moment().format('MM');
        const day = moment().format('DD');

        //get data from github API
        axios.get(
            `https://api.github.com/search/repositories?q=created:>${year}-${month-1}-${day}&sort=stars&order=desc&page=${page}`
        )
            .then(rep => {
                this.setState({
                    //after getting data from github API we set data in repose array of object
                    //and prevent more loading until finish
                    repose: [...repose, ...rep.data.items],
                    stateOfLoading: false
                })


            }).catch(err => {
            this.setState({
                stateOfLoading: false
            });
        })

    }
    handleLoading = () => {
        const {stateOfLoading} = this.state;
        //record the scroll y axis i each frame if it is equal or bigger the brower height
        // we show the new data based on it
        const scrolled = window.scrollY;
        console.log()
        if (scrolled >= window.innerHeight && !stateOfLoading) {
            this.loadNewData();
        }
    }
    loadNewData = () => {
        const {page} = this.state;

        this.setState((previouseState) => ({
            page: previouseState.page + page,
            stateOfLoading: true
        }), this.loadReposes);
    }

    render() {
        const {repose} = this.state;

        return (
            <div>
                {/*Loading icon*/}
                {this.state.stateOfLoading ? <Loading /> : null}

                <ReposeList repose={repose}/>
            </div>
        )
    }
}


export default App;
