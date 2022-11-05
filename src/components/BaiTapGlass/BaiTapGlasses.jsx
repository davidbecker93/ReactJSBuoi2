import React, { Component } from 'react';
import data from '../../assets/data/dataGlasses.json';
import Glasses from './Glasses';
import Content from './Content';

export default class BaiTapGlasses extends Component {

    renderGlass = () => {
        return data.map((data, index) => {
            return <div className='col-2' key={index}>
                <Glasses data={data} />
            </div>
        })
    }



    render() {
        return (
            <div>
                <Content />

            </div>
        )
    }
}
