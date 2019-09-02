import React from 'react'
import { Switch, Route } from 'wouter'
import { DisplayInputText } from './DisplayComponents/DisplayInputText/index'
import { DisplayEditableData } from './DisplayComponents/DisplayEditableData/index'

export const Router = () =>
	<Switch>
		<Route path='/input-text'><DisplayInputText /></Route>
		<Route path='/editable-data'><DisplayEditableData /></Route>
		<Route path='/:any*'>Página não encontrada</Route>
	</Switch>