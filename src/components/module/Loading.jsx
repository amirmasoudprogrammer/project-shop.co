import React from 'react';
import {InfinitySpin} from 'react-loader-spinner'

function Loading(props) {
    return (

        <InfinitySpin
            visible={true}
            width="200"
            color="#000"
            ariaLabel="infinity-spin-loading"
        />

    )

}

export default Loading;