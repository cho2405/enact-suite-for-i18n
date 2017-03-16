import Button from '@enact/moonstone/Button';
import {contextTypes} from '@enact/i18n/I18nDecorator';
import React from 'react';

class LocaleComponent extends React.Component {
	static contextTypes = contextTypes;

	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			locales: ['en-US', 'ko-KR', 'es-ES']
		};
		this.setLocale = this.setLocale.bind(this);
		this.update = this.update.bind(this);
	}

	setLocale () {
		this.setState({
			index: (this.state.index < 2) ? this.state.index + 1 : 0
		}, this.update);
	}

	update () {
		const {updateLocale} = this.context;
		let locale = this.state.locales[this.state.index];
		updateLocale(locale);
	}

	render () {
		let i = (this.state.index < 2) ? this.state.index + 1 : 0;

		return (
			<div>
				<Button onClick={this.setLocale}>switch to {this.state.locales[i]}</Button>
			</div>
		);
	}
}
export default LocaleComponent;
