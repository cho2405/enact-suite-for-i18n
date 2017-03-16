import React, {PropTypes} from 'react';
import kind from '@enact/core/kind';
import Button from '@enact/moonstone/Button';
import css from './Nav.less';

const Nav = kind({
	name: 'Nav',

	propTypes: {
		onCountryChange: PropTypes.func.isRequired,
		selectedCountry: PropTypes.string.isRequired
	},

	styles: {
		css,
		className: 'nav'
	},

	computed: {
		countryButtons: ({countryList, selectedCountry, onCountryChange}) => {
			return countryList.map((country, index) => {
				return (
					<Button
						backgroundOpacity="translucent"
						className={css.button}
						key={index}
						onClick={onCountryChange}
						selected={country === selectedCountry}
						small
					>
						{country}
					</Button>
				);
			});
		}
	},

	render: ({countryButtons, ...rest}) => {
		delete rest.countryList;
		delete rest.onCountryChange;
		delete rest.selectedCountry;

		return (
			<div {...rest}>
				{countryButtons}
			</div>
		);
	}
});

export default Nav;
