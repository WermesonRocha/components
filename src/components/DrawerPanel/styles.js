import { fontTitle, fontBody, fontSizeInput, fontSizeSmall, primaryColor, grayColor1 } from '@ziro/theme'

export const

header = {
	display: 'grid',
	gridRowGap: '3px',
	padding: '20px 0 10%'
},

welcome = {
	fontFamily: fontTitle,
	fontSize: '1.8rem',
	fontWeight: '600',
	color: primaryColor
},

word = {
	position: 'relative'
},

color = width => ({
	position: 'absolute',
	top: '68%',
	left: '0',
	width: width,
	height: '6px',
	zIndex: '-1',
	background: 'rgba(255,228,0,0.75)'
}),

name = {
	position: 'absolute',
	maxWidth: '150px',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis'
},

cnpj = {
	fontSize: fontSizeSmall,
	color: grayColor1
},

nav = {
	display: 'grid',
	gridRowGap: '25px',
	marginTop: '20px'
},

navlink = {
	display: 'grid',
	gridTemplateColumns: 'auto 1fr',
	gridColumnGap: '10px',
	alignItems: 'center'
},

navicon = {
	display: 'grid',
	alignItems: 'center',
	justifyItems: 'center',
	width: '30px',
	height: '30px',
	borderRadius: '100%',
	boxShadow: `0px 3px 11px -4px rgba(34,34,34,0.7)`
},

navtext = {
	fontFamily: fontTitle,
	fontSize: fontSizeInput,
	fontWeight: '600',
	textTransform: 'uppercase',
	color: primaryColor,
	cursor: 'pointer'
},

navsoon = {
	fontFamily: fontBody,
	fontSize: '1.1rem',
	fontStyle: 'italic',
	color: primaryColor,
	textTransform: 'lowercase'
}