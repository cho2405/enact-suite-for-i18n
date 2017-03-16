import React from 'react';
import BodyText from '@enact/moonstone/BodyText';
import DateFmt from '@enact/i18n/ilib/lib/DateFmt';

class DateComponent extends React.Component {
    render () {
        const formatter = new DateFmt({length: 'full'});
        const date = new Date();

        return (
            <div>
                <BodyText> {formatter.format(date)} </BodyText>
            </div>
        );
    }
}

export default DateComponent;
