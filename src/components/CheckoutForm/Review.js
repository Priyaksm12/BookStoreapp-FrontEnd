import { Table } from '@material-ui/core';
import React from 'react';
import { Order } from '@stripe/stripe-js';
const Review = (props) => {
	return (
		<div>
            <div className="order" style={{"padding-top":"200px"}}>
			<a href="/home">
                <img src="assets/orderconfirmed.png" class="orderlogo" height={100} width={100}  />
				</a>
                <div className="hurray"><h1>hurray!!! your order is confirmed</h1> </div>
                <div className="hurray" ><h1>the order id {props.orderid} is save the order id for</h1></div> 
                <div className="hurray"><h3>further communication..</h3></div>
                <br/>
				{/* <Table className ="table" columns = {columns} dataSource ={data}/> */}
				{/* <button className='continueShooping' onClick={()=>(history.push('/dashboard'))}>CONTINUE SHOOPING !!!</button> */}
                {/* remove all */}

            </div>
            
        </div>
		
	);
};

export default Review;