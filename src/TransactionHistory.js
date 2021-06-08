import React from 'react';
import Data from './data.json';
import Receiver from './Receiver';
import Sender from './Sender';
import './TransactionHistory.css';

const TransactionHistory = () => {


    return(
        <>
            <div className="transaction">   
                <div className="header">
                    <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                    <h2> J </h2>
                    <div>
                      <p> John Doe </p>
                      <p> +91 7672234555 </p>
                    </div>
                  </div>
                <div className="border">
                  {
                    Data.map((postdata, i) => 
                    <div>
                      <p className="date"> <span> {postdata.startDate} </span></p>
                      {
                        postdata.direction === 1 ?
                          <Sender postdata={postdata}/>
                        :
                          <Receiver postdata={postdata} />
                      }
                    </div>
                    )
                  }

                </div>

            </div>
        </>
    )
}

export default TransactionHistory;
