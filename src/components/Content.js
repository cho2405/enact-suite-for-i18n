import React, {PropTypes} from 'react';
import kind from '@enact/core/kind';
import css from './Content.less';

import DateComponent from './DateComponent';

const Content = kind({
	name: 'Content',

	propTypes: {
		selectedPage: PropTypes.string.isRequired
	},

	styles: {
		css,
		className: 'content'
	},

	computed: {
		page: ({selectedPage}) => {
			return (
				<div>
					{selectedPage}
					<DateComponent />
				</div>
			);
		}
	},

	render: ({page, ...rest}) => (
		<div {...rest}>
				{page}
		</div>
	)
});

export default Content;
