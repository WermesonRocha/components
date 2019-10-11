import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal/index'
import Spinner from '../../Spinner/index'
import Button from '../../Button/index'
import Illustration from '../../Illustration/index'
import { container, svg, title, modalSubmitting, modalResult } from './styles'

export const Submit = ({ submitting, modal, setModal, error }) => {
	if (submitting) {
		return (
			<Modal isOpen={modal} setIsOpen={() => setModal(false)} boxStyle={modalSubmitting}>
				<Spinner size={'5.5rem'} />
			</Modal>
		)
	} else if (error) {
		return (
			<Modal isOpen={modal} setIsOpen={() => setModal(false)} boxStyle={modalResult}>
				<div style={container}>
					<div style={svg}><Illustration type='paymentError' /></div>
					<label style={title}>Erro no envio!</label>
					<label>Tente novamente ou contate seu assessor</label>
					<Button type='link' cta='Tentar novamente' />
				</div>
			</Modal>
		)
	}
	return (
		<Modal isOpen={modal} setIsOpen={() => setModal(false)} boxStyle={modalResult}>
			<div style={container}>
				<div style={svg}><Illustration type='paymentSuccess' /></div>
				<label style={title}>Processando!</label>
				<label>Acompanhe o status pelo menu Pagamentos</label>
				<Button type='link' cta='Ver pagamentos' />
			</div>
		</Modal>
	)
}

Submit.propTypes = {
	submitting: PropTypes.bool.isRequired,
	modal: PropTypes.bool.isRequired,
	setModal: PropTypes.func.isRequired,
	error: PropTypes.bool.isRequired
}