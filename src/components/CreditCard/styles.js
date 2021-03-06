import { fontTitle, fontSizeSmall, primaryColor } from '@ziro/theme'

export const

card = width => ({
	display: 'grid',
	gridTemplateRows: '1fr 30px 30px 50px',
	maxWidth: '300px',
	width: '100%',
	height: width/1.75,
	margin: '0 auto 15px',
	padding: '0 5%',
	borderLeft: `8px solid ${primaryColor}`,
	boxSizing: 'border-box',
	borderRadius: '12px',
	color: primaryColor,
	boxShadow: `
		rgba(34, 34, 34, 0.4) 0px 0px 10px -4px,
		rgba(34, 34, 34, 0.35) 0px 5px 15px -1px
	`,
	background: `radial-gradient(ellipse at top right, #FEFEFE 25%, #FBFBFB 50%, #FAFAFA 75%, #F9F9F9`
}),

brandLogo = {
	justifySelf: 'end'
},

info = {
	display: 'grid',
	gridTemplateColumns: '1fr auto',
	alignItems: 'center',
	gridColumnGap: '15px'
},

chip = {
	width: '30px',
	height: '30px',
	background: `
		url('https://res.cloudinary.com/ziro/image/upload/v1569380926/chip_qurqrs.png')
		0 0 / 100% no-repeat`
},

header = {
	fontFamily: fontTitle,
	fontSize: fontSizeSmall,
	textTransform: 'uppercase',
	textOverflow: 'ellipsis',
	overflow: 'hidden',
	whiteSpace: 'noWrap'
},

cardcvv = {
	display: 'grid',
	gridTemplateColumns: '1fr 42px',
	justifyItems: 'end'
},

cardnumber = {
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'space-between',
	fontFamily: fontTitle
}