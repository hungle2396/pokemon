// ApprovalCard.jsx
// import React from "react";

const ApprovalCard = (props) => {
    return (
    	<div className="ui card">
        	<div className="content">
                {props.children}
            </div>
            
            <div className="extra_content">
            	<div className="ui_two_btns">
                	<button className="green_btn">
                        Approve
                    </button>
                    
                    <button className="red_btn">
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;