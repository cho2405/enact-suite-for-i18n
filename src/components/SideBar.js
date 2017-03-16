import React, {PropTypes} from 'react';
import kind from '@enact/core/kind';
import SelectableItem from '@enact/moonstone/SelectableItem';
import Divider from '@enact/moonstone/Divider';
import css from './SideBar.less';


const SideBar = kind({
	name: 'SideBar',

	propTypes: {
		onPageChange: PropTypes.func.isRequired,
		selectedPage: PropTypes.string.isRequired,
		//selectedCountry: PropTypes.string.isRequired,
		pages: PropTypes.array.isRequired
	},

	styles: {
		css,
		className: 'sideBar'
	},

	computed: {
		className: ({styler}) => {
			return styler.append(css.sideBar);
		},
		pageList: ({pages, onPageChange, /*selectedCountry,*/ selectedPage}) => {
			return pages.map((page, index) => {
				return (
					<div key={index}>
						<SelectableItem
							onToggle={onPageChange}
							selected={selectedPage === page}
							value={page}
						>
							{page}
						</SelectableItem>
						<Divider />
					</div>
				);
			});
		}
	},

	render: ({pageList, ...rest}) => {
		delete rest.pages;
		delete rest.onPageChange;
		delete rest.selectedPage;
		//delete rest.selectedCountry;

		return (
			<div {...rest}>
				{pageList}
			</div>
		);
	}
});

export default SideBar;
