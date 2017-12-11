import React from 'react';


export default class LifeCycleMethods extends React.Component {

    constructor(){
       super();
       this.state = {
           test_state: 'Hello State'
       }
    }
    componentWillMount() {
        console.log('LifeCyleMethods Component will mount');
    }

    render () {
        return (
            <div>This is app component</div>
    )
    }

    componentDidMount() {
        // use setTimeout or setInterval here
        console.log('LifeCyleMethods Component did mount');
    }

    shouldComponentUpdate() {
        console.log('Inside LifeCyleMethods should Component Update');
        return true;
    }

    componentWillUpdate() {
        console.log('Inside LifeCyleMethods Component will Update');
    }

    componentDidUpdate() {
        console.log('Inside LifeCyleMethods Component did Update');
    }
}
