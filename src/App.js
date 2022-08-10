import Home from './pages/Home';
import SelectedWorks from './pages/SelectedWorks';
import Contact from './pages/Contact';
import './Fonts.css';

import { UseEffectScroll } from 'react-use-smooth-scroll';
import 'react-use-smooth-scroll/dist/index.css';

function App() {
	return (
		<>
			<Home />
			<SelectedWorks />
			<Contact />
		</>
	);
}

export default App;
