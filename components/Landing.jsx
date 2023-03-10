// import React from 'react'
import './Landing.css';
import Navbar from './Navbar';

const Landing = () => {
	return (
		<div className="landing">
			<Navbar />
			<div className="landing-top">
				<img src="Dervish.png" className="dervish" />
				<button className="mint">
					<a href="https://crypto-dervish-ocz4.vercel.app/">MINT</a>
				</button>
			</div>

			<div className="tagline">
				Join as a dervish and whirl in the world of Web3
			</div>
		</div>
	);
};

export default Landing;
