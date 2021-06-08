import React from 'react';
import { FontAwesomeIcon } from "../node_modules/font-awesome/css/font-awesome.min.css";
import './TransactionHistory.css';

const Receiver = ({postdata}) => {
    return(
        <div className="receiver">
            <div className="border padding-10">
                {
                <div className="d-flex padding-10">
                    <p className="font_S_W padding-10"> <i className="fa fa-inr" aria-hidden="true"></i>  {postdata.amount} </p>
                    <div>{
                            postdata.type === 1 && postdata.direction ===2 ?                        
                            <p> <i className="fa fa-paperclip" aria-hidden="true"></i> Request received </p> :
                            <p> <i className="fa fa-check" aria-hidden="true"></i>  You received </p> 
                        }
                    </div>
                </div>
                }
                <div >
                    {
                        postdata.type === 1 && postdata.direction === 2 ?
                        <div className="d-flex padding-10">
                            <div>
                                <button className="margin-r cursor-p"> Pay </button> 
                                <button className="cursor-p"> Decline </button> 
                            </div>
                            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                        </div>:
                        <div className="d-flex padding-10">
                            <div>
                                <p> Transaction ID </p>
                                <p> A12389679798797 </p>
                            </div>
                            <i className="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                        </div>
                    }                    
                </div>
                            
            </div>
                <p className="text-end"> {postdata.endDate} </p>
        </div>
    )
}

export default Receiver;
