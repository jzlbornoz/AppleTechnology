import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
    const mapStyle = {
        height: '80vh',
        width: '100%',
    };
    const positionMap = {
        lat: 8.597594,
        lng:-71.150294,
    };

    return (
        <LoadScript googleMapsApiKey='AIzaSyD9KAmtYQWRiXGQq-DvlD-_atQL3pInB1c'>
            <GoogleMap
                mapContainerStyle={mapStyle}
                zoom={18}
                center={positionMap}
            >
                <Marker position={positionMap} />
            </GoogleMap>
        </LoadScript>
    )
}

export { Map }