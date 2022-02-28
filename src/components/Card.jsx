import React from 'react';

const Card = (props) => {
    return (
        <div className="card" style={{width:"300px"}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <div className="btn btn-secondary">
                            <i class={`${props.icon} fa-4x`}></i>
                        </div>
                    </div>
                    <div className="col-sm-12 mt-3">
                        <h5 align="center">{props.title} <br/>{props.content}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;