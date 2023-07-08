import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Item from '../libs/Item.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../App.css'

function MainPageHeader(props){
	return(
		<Grid className="header" item xs={12}>
		{/* Titulo */}
			<Typography variant="h1">
				hola mundo
			</Typography>
		</Grid>
	)
}

function MainPageFooter(props){
	return(
		<Grid className='footer' item container xs={12}>
			<Grid xs={6}>
				Contactenos
			</Grid>
			<Grid xs={6}>
				Mas info
			</Grid>
		</Grid>
	)
}

function MainPageCarousel(props){
	return(
		<Grid item xs={12}>
			<Carousel>
				<div style={{height:200,width:300, backgroudColor:"#AA0000"}}>
					<p> item 1</p>
				</div>
				<div style={{height:200,width:300, backgroudColor:"#AA0000"}}>
					<p> item 2</p>
				</div>
				<div style={{height:200,width:300, backgroudColor:"#AA0000"}}>
					<p> item 3</p>
				</div>
			</Carousel>
		</Grid>
	)
}

function MainPage(props){

	return(
		<Grid container>
			<MainPageHeader/>
			<MainPageCarousel/>
			<Grid item container xs={12} spacing={10} style={{padding:20}}>
				<Grid item xs={3}>
					<Paper elevation={3}>
						<Item/>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper elevation={3}>
						item 1
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper elevation={3}>
						item 1
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper elevation={3}>
						item 1
					</Paper>
				</Grid>
			</Grid>
			<MainPageFooter/>
		</Grid>
	)
}

export default MainPage
