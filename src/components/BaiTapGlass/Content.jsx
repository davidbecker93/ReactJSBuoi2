import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        let { data } = this.props;
        return (
            <div>
                <header>TRY GLASSES APP ONLINE</header>
                <div className="container">
                    <div className="row mt-3 align-items-center">
                        <div className="col-6 text-center">
                            <img
                                src="./glassesImage/model.jpg"
                                alt="..."
                                width={300}
                                height={350}
                            />
                        </div>
                        <div id="glassesModel" className="col-6 text-center">
                            <img
                                src="./glassesImage/model.jpg"
                                alt="..."
                                width={300}
                                height={350}
                            />
                            <img className="glasses" src={data.url} alt="..." />
                            <div className="glassesInfo px-2">
                                <h3 className="mb-2">{data.name}</h3>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
