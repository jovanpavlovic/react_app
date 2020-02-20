import React, {Component,Fragment} from 'react';
import {Search} from './components/Search/Search';

class App extends Component {

	render() {
		return (
			<Fragment>
				<div>This is some REACT app</div>
				<span className='text'>Some text</span>
				<br/>
				<Search />
			</Fragment>
		)
	}
}

export default App;