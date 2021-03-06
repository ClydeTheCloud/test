import React from 'react'

function ConfigCard({ title, desc, options }) {
	return (
		<div className="possible-item">
			<div className="possible-info">
				<p className="possible-title">{title}:</p>
				<div className="divider" />
				{desc.split('\n').map((line, index) => (
					<p key={index} className="possible-description">
						{line}
					</p>
				))}
			</div>
			<div className="possible-options">
				<ul className="possible-list">
					{options.map((option, index) => (
						<li key={index}>{option}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default ConfigCard
