import React from 'react'
import soss from './soss.svg';
import './JoinUsHeader.css';

export default function JoinUsHeader() {
	return (
		<div className='form-container'>
			<div className='soss-logo'><img src={soss} alt='soss logo' /></div>
			<div className='join-us-header'>Join Us.</div>
		</div>
	)
}
