import React from 'react'
import { useLocation } from 'wouter'
import Illustration from '../Illustration/index'
import Button from '@bit/vitorbarbosa19.ziro.button'
import { containerWithPadding } from '../../Theme/variables'
import { container, svg, title } from './styles'

const ErrorExpired = () => {
	const [, setLocation] = useLocation()
	return (
		<div style={{...containerWithPadding, ...container}}>
			<div style={svg}><Illustration type='paymentError' /></div>
			<label style={title}>Cobrança expirada!</label>
			<label>Solicite um novo link ao seu assessor</label>
			<Button type='link' cta='Retornar' navigate={() => setLocation('/pagamentos')} />
		</div>
	)
}

export default ErrorExpired