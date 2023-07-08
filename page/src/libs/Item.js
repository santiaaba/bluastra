import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

function Item(props){
	return(
		<Card>
			<CardHeader>
				header
			</CardHeader>
			<CardMedia
				component='img'
				header='194'
				image='https://mui.com/static/images/cards/paella.jpg'
				alt='imagen 1'
			/>
			<CardContent>
				contenido
			</CardContent>
		</Card>
	)
}

export default Item
