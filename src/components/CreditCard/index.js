import React, { useState, useCallback }  from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/index'
import { CardNumbers } from './CardNumbers'
import { card, brandLogo, chip, cardnumber, info, header } from './styles'

const CreditCard = ({ number, brand }) => {
	const [cardWidth, setCardWidth] = useState(0)
	const cardBox = useCallback(htmlNode => {
		if (htmlNode) setCardWidth(htmlNode.getBoundingClientRect().width)
	}, [])
	return (
		<div style={card(cardWidth)} ref={cardBox}>
			<div style={brandLogo}>{brand && <Icon type={brand} />}</div>
			<div style={chip}></div>
			<label style={cardnumber}>
				<CardNumbers number={number} brand={brand} />
			</label>
			<div style={info}>
				<label style={header}>Titular do Cartão</label>
				<label style={header}>**/**</label>
			</div>
		</div>
	)
}

CreditCard.propTypes = {
	number: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired
}

export default CreditCard