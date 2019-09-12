import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
import Icon from '../Icon/index'
import { container, header, user, name, word, color, cnpj, nav, navlink, icon, text } from './styles'

const DrawerPanel = ({ username, usercnpj, options }) => {
	const [highlightBoxWidth, setHighlightBoxWidth] = useState(0)
	const highlightBox = useCallback(htmlNode => {
		if (htmlNode) setHighlightBoxWidth(htmlNode.getBoundingClientRect().width)
	})
	console.log(highlightBoxWidth)
	return (
		<div style={container}>
			<div style={header}>
				<Icon type='close' />
				<div style={user}>
					<label style={name}>
						Olá,&nbsp;
						<span style={word}>
							<span style={color(highlightBoxWidth)}></span>
							<span ref={highlightBox}>{username}</span>
						</span>
					</label>
					<label style={cnpj}>CNPJ: {usercnpj}</label>
				</div>
			</div>
			<div style={nav}>
				{options.map((option, index) =>
					<Link style={navlink} to={option.path} key={index}>
						<div style={icon}>{option.icon}</div>
						<label style={text}>{option.text}</label>
					</Link>
				)}
			</div>
		</div>
	)
}

DrawerPanel.propTypes = {
	username: PropTypes.string.isRequired,
	usercnpj: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DrawerPanel