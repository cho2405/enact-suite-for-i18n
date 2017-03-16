import React, {PropTypes} from 'react';
import SideBar from '../components/SideBar';
import Content from '../components/Content';
import css from './Body.less';

class Body extends React.Component {
	static propTypes = {
		selectedCountry: PropTypes.string.isRequired,
		pages: PropTypes.array.isRequired
	};

	constructor (props) {
		super(props);
		this.state = {
			page: this.props.pages[0]
		};
	}

	handlePageChange = ({value}) => {
		this.setState({page: value});
	}

	render () {
		const pages = this.props.pages;
		const onChange = this.handlePageChange;
		const selectedPage = this.state.page;
		const selectedCountry = this.props.selectedCountry;

		return (
			<div className={css.body}>
				<SideBar
					pages={pages}
					onPageChange={onChange}
					selectedPage={selectedPage}
					selectedCountry={selectedCountry}
				/>
				<Content
					className={css.content}
					selectedPage={selectedPage}
				/>
			</div>
		);
	}
}

export default Body;
