import React, { useState } from 'react'
import Form from '../Form/index'
import FormInput from '../FormInput/index'
import InputText from '../InputText/index'

const Login = () => {
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')
	const validations = [
		{
			name: 'email',
			validation: value => /^\S+@\S+\.\S+$/g.test(value), // tests for pattern a@b.c
			value: email,
			message: 'Formato inválido'
		},
		{
			name: 'pass',
			validation: value => !/^.{0,5}$/g.test(value), // tests for min length of 6 char
			value: pass,
			message: 'Mínimo 6 caracteres'
		}
	]
	return (
		<Form
			validations={validations}
			sendToBackend={() => console.log('submit')}
			inputs={[
				<FormInput name='email' label='Email' input={
					<InputText
						value={email}
						onChange={({ target: { value } }) => setEmail(value)}
						placeholder='Seu email'
					/>
				}/>,
				<FormInput name='pass' label='Senha' input={
					<InputText
						value={pass}
						onChange={({ target: { value } }) => setPass(value)}
						placeholder='Sua senha'
					/>
				}/>
			]}
		/>
	)
}

export default Login