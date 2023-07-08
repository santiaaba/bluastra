import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Item from '../libs/Item.js'

function MainPage(props){
	return(
		<Grid container>
			<Grid item xs={12} height={300}>
			{/* Titulo */}
				<Typography variant="h1">
					hola mundo
				</Typography>
			</Grid>
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
		</Grid>
	)
}

export default MainPage
