import React from 'react';
import { View, Text } from 'react-native';

import PropTypes from 'prop-types';

const ShowTitle = (props) => {
    return (
        <View>
            <Text style={{textAlign: 'center' }}>{props.title}</Text>
        </View>
    
    )

}


// ShowTitle.propTypes = {
//     title: PropTypes.string.isRequired,
// }


export default ShowTitle;


