import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from '../Form/index'
import FormInput from '../FormInput/index'
import InputText from '../InputText/index'

const CreatePayment = props => {
	const [charge, setCharge] = useState('')
	const [maxInstallments, setMaxInstallments] = useState('')
	const validations = [
		{
			name: 'charge',
			validation: value => !!value,
			value: charge,
			message: 'Campo obrigatório'
		},
		{
			name: 'maxInstallments',
			validation: value => !!value,
			value: maxInstallments,
			message: 'Campo obrigatório'
		}
	]
	return (
		<Form
			buttonName='Enviar formulário'
			validations={validations}
			inputs={[
				<FormInput
					name='Valor a cobrar'
					input={
						<InputText
							value={charge}
							onChange={({ target: { value } }) => setCharge(value)}
							placeholder='R$1.299,99'
						/>
					}
				/>,
				<FormInput
					name='Parcelamento máximo'
					input={
						<InputText
							value={maxInstallments}
							onChange={({ target: { value } }) => setMaxInstallments(value)}
							placeholder='6'
						/>
					}
				/>
			]}
		/>
	)
}

CreatePayment.propTypes = {

}

export default CreatePayment