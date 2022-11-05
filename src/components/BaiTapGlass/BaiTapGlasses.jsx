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
            <div className='bg-glass'>
                <div className="bg-overlay">
                    <Content data={data} />
                    <div className="container">
                        <div className="mt-4 bg-item p-5">
                            <div className="row">
                                {this.renderGlass()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
