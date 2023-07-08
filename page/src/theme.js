import {createTheme} from '@mui/material/styles'

const theme_one = createTheme({
	palete:{
		primary:{
			main:'#476a78',
			light: '#60808c',
			dark: '#315361',
		},
		secondary:{
			main:'#4000ff',
			light: '#40aaaa',
			dark: '#400099'
		},
		neutral:{
			main:'#4000ff',
			light: '#40aaaa',
			dark: '#400099'
		}
	},
	typography:{
		htmlFontSize:16,
		fontSize:14,
		body1:{
			color:"#555555",
			fontSize:14
		},
		h1:{
			color:"#555555",
			fontWeight: "bold",
			fontSize:18
		},
	}
})

export default theme_one
