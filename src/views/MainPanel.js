import React from 'react';
import Body from './Body';
import {Header} from '@enact/moonstone/Panels';
import {contextTypes} from '@enact/i18n/I18nDecorator';
import Nav from '../components/Nav';

const pages = ['Glyph Set', 'Glyph Size', 'Layout'];
const countryList = ['ko-KR', 'en-US'];

class MainPanel extends React.Component {
    static contextTypes = contextTypes;

    constructor (props) {
		super(props);
		this.state = {country: countryList[0]};
        this.setLocale = this.setLocale.bind(this);
		this.update = this.update.bind(this);
	}

    setLocale =(ev) => {
        this.setState({
            country: (ev.target.textContent.toLowerCase() === 'en-us') ? 'en-US' : 'ko-KR'
        }, this.update);
    }

    update () {
		const {updateLocale} = this.context;
		let locale = this.state.country;

        updateLocale(locale);
	}

	render () {
		const selectedCountry = this.state.country;
		const onChange = this.setLocale;

    return (
			<div>

				<Header title="Web Validation Suite for I18N" type="compact" />
				<Nav
					countryList={countryList}
					onCountryChange={onChange}
					selectedCountry={selectedCountry}
				/>
				<Body selectedCountry={selectedCountry} pages={pages} />
			</div>
		);
	}
}

export default MainPanel;
