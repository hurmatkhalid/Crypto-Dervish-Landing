import React from 'react';
import './FAQ.css';
const FAQ = (props) => {
	return (
		<div className="faq">
			<div className="faqs">
				<h2>{props.item.question}</h2>
				<p>{props.item.answer}</p>
			</div>
		</div>
	);
};

export default FAQ;
