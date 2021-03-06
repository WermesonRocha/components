import React from 'react'
import PropTypes from 'prop-types'
import { PaymentSuccess } from '../../Illustrations/PaymentSuccess/index'
import { PaymentError } from '../../Illustrations/PaymentError/index'
import { ErrorLoading } from '../../Illustrations/ErrorLoading/index'
import { NotFound } from '../../Illustrations/NotFound/index'
import { TimelineStart } from '../../Illustrations/TimelineStart/index'

const Illustration = ({ type, size }) => {
	const illustrationProps = { size }
	const illustrationList = {
		paymentSuccess: <PaymentSuccess {...illustrationProps} />,
		paymentError: <PaymentError {...illustrationProps} />,
		errorLoading: <ErrorLoading {...illustrationProps} />,
		notFound: <NotFound {...illustrationProps} />,
		timelineStart: <TimelineStart {...illustrationProps} />
	}
	return illustrationList[type]
}

Illustration.propTypes = {
	type: PropTypes.string.isRequired,
	size: PropTypes.number
}

export default Illustration