import MainPage from './sections/MainPage.js'
import './App.css';
import {ThemeProvider} from '@mui/material/styles'
import theme_one from './theme.js'

function App() {
	return (
		<ThemeProvider theme={theme_one}>
			<div className="App">
				<MainPage/>
			</div>
		</ThemeProvider>
	);
}

export default App;
