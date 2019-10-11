import React from 'react'
import { Switch, Route } from 'wouter'
import { DisplayInputText } from './DisplayComponents/DisplayInputText/index'
import { DisplayEditableData } from './DisplayComponents/DisplayEditableData/index'
import { DisplayTabDual } from './DisplayComponents/DisplayTabDual/index'
import { DisplayDrawer } from './DisplayComponents/DisplayDrawer/index'
import { DisplayHeaderWithMenu } from './DisplayComponents/DisplayHeaderWithMenu/index'
import { DisplayDrawerPanel } from './DisplayComponents/DisplayDrawerPanel/index'
import { DisplayCallToAction } from './DisplayComponents/DisplayCallToAction/index'
import { DisplayHeaderHome } from './DisplayComponents/DisplayHeaderHome/index'
import { DisplayLogo } from './DisplayComponents/DisplayLogo/index'
import { DisplayTransitionRoute } from './DisplayComponents/DisplayTransitionRoute/index'
import { DisplayCheckout } from './DisplayComponents/DisplayCheckout/index'
import { DisplayDropdown } from './DisplayComponents/DisplayDropdown/index'
import { DisplayModal } from './DisplayComponents/DisplayModal/index'
import { DisplayCreatePayment } from './DisplayComponents/DisplayCreatePayment/index'

export const Router = () =>
	<Switch>
		<Route path='/input-text'><DisplayInputText /></Route>
		<Route path='/editable-data'><DisplayEditableData /></Route>
		<Route path='/tab-dual/:any'><DisplayTabDual /></Route>
		<Route path='/drawer'><DisplayDrawer /></Route>
		<Route path='/header-menu'><DisplayHeaderWithMenu /></Route>
		<Route path='/drawer-panel'><DisplayDrawerPanel /></Route>
		<Route path='/cta'><DisplayCallToAction /></Route>
		<Route path='/header-home'><DisplayHeaderHome /></Route>
		<Route path='/logo'><DisplayLogo /></Route>
		<Route path='/transition/:any'><DisplayTransitionRoute /></Route>
		<Route path='/checkout'><DisplayCheckout /></Route>
		<Route path='/dropdown'><DisplayDropdown /></Route>
		<Route path='/modal'><DisplayModal /></Route>
		<Route path='/create-payment'><DisplayCreatePayment /></Route>
		<Route path='/:any*'>Página não encontrada</Route>
	</Switch>