import React from 'react'
import LoginPage from '../../../components/LoginPage/index'
import { containerWithPadding } from '../../../Theme/variables'

export const DisplayLoginPage = () =>
	<div style={containerWithPadding}>
		<LoginPage audience='Lojista' sendToBackend={state => () => console.log(state)} />
	</div>