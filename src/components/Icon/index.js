import React from 'react'
import PropTypes from 'prop-types'
import { Success } from '../../Icons/Success/index'
import { Alert } from '../../Icons/Alert/index'
import { Warning } from '../../Icons/Warning/index'
import { Pen } from '../../Icons/Pen/index'
import { Close } from '../../Icons/Close/index'
import { Menu } from '../../Icons/Menu/index'

const Icon = ({ type, size, color, strokeWidth, onClick }) => {
	const iconProps = { size, color, strokeWidth, onClick }
	const iconList = {
		success: <Success {...iconProps} />,
		alert: <Alert {...iconProps} />,
		warning: <Warning {...iconProps} />,
		pen: <Pen {...iconProps} />,
		close: <Close {...iconProps} />,
		menu: <Menu {...iconProps} />
	}
	return iconList[type]
}

Icon.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.number,
	color: PropTypes.string,
	strokeWidth: PropTypes.number,
	onClick: PropTypes.func
}

export default Icon