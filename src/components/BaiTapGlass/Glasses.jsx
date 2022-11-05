import React, { Component } from 'react'

export default class Glasses extends Component {
    render() {
        let { data, glassClick } = this.props;
        return (
            <div><img src={data.url} alt="" onClick={() => {
                glassClick(data)
            }} /></div>
        )
    }
}
