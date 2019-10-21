import React from 'react'
import '../../styles/services.css'

function Services(props) {
	function handleScroll(e) {
		var element = document.getElementById(e)
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'start'
		})
	}

	return (
		<div id={props.content}>
			<div id='Services'>
				<div id='services-btn-ctn'>
					<div
						id='services-btn-web'
						className='services-btn'
						onClick={() => handleScroll('website')}
					>
						Website
					</div>
					<div
						id='services-btn-server'
						className='services-btn'
						onClick={() => handleScroll('server')}
					>
						Server
					</div>

					<div
						id='services-btn-data'
						className='services-btn'
						onClick={() => handleScroll('database')}
					>
						Database
					</div>
				</div>
				<div id='website'>
					Need a Website? We got you!
					<div id='desktop'></div>
					<div id='mobile'></div>
					<div id='website-maintenance'></div>
				</div>

				<div className='spacer' />

				<div id='server'>
					<div id='server-container'>
						<div id='server-content'>
							Need a server?
							<div id='cloud'></div>
							<div id='connect-services'></div>
						</div>
						<div id='server-background' />
					</div>
				</div>

				<div className='spacer' />

				<div id='database'>
					<div id='database-container'>
						<div id='database-content'>
							Database
							<div id='work-smarter'></div>
							<div id='leverage-info'></div>
							<div id='desktop-applications'>
								<div id='security?'></div>
								<div id='integrate-business'></div>
							</div>
							<div id='business-automation'>
								<div id='work-smarter'></div>
								<div id='vba'></div>
							</div>
						</div>
						<div id='database-background' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
