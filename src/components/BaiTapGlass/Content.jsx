import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        let { url, name, desc } = this.props;
        return (
            <div className="container ">
                <div className="row mt-5 align-items-center">
                    <div className="col-6 text-center">
                        <img
                            src="./glassesimg/model.jpg"
                            alt="..."
                            width={300}
                            height={350}
                        />
                    </div>
                    <div id="glassesModel" className="col-6 text-center">
                        <img
                            src="./glassesimg/model.jpg"
                            alt="..."
                            width={300}
                            height={350}
                        />
                        <img className="glasses" src={url} alt="..." />
                        <div className="glassesInfo px-2">
                            <h3 className="mb-2">{name}</h3>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
