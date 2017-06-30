/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */

import React, {Component} from 'react';
import Chip from 'material-ui/Chip';

const styles = {
    'chip': {'margin': 4},
    'wrapper': {
        'display': 'flex',
        'flexWrap': 'wrap'
    }
}

const AddTags = (props) => <div style={styles.wrapper}>
    {props.tags.map(
        (label, index) => <Chip key={index}
            style={styles.chip}
        >
            {label}
        </Chip>
    )}
</div>

export default AddTags;
