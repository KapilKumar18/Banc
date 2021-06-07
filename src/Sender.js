import React from 'react';


const Sender = ({postdata}) => {
    return(
        <div className="sender">
            <div className="border padding-10">
                {
                <div className="d-flex padding padding-10">
                    <p className="font_S_W"> <i className="fa fa-inr" aria-hidden="true"></i> {postdata.amount} </p>
                    <div>
                    {
                        postdata.type === 1 && postdata.direction === 1 ?
                        <p> <i className="fa fa-check" aria-hidden="true"></i> You Paid </p> :
                        <p>  <i className="fa fa-paperclip" aria-hidden="true"></i> You Requested </p>
                    }                           
                    </div>   
                           
                </div>
                }
                <div >
                    {
                        postdata.type === 2 && postdata.direction === 1 ?
                        <div className="d-flex padding-10">
                            <button className="cursor-p"> Cancel </button> 
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
                <h6 className="text-end"> {postdata.endDate} </h6>
        </div>
    )
}

export default Sender;
