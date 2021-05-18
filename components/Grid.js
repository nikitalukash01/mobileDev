import React from 'react';
import { Image } from 'react-native';

function Grid({ sideLength, index, uri }) {

    let top;
    let left;
    let width;
    let height;

    switch (index % 7) {
        case 0:
            left = 1;
            top = 1;
            width = sideLength;
            height = sideLength;
            break;

        case 1:
            left = sideLength + 4;
            top = 1;
            width = 3 * sideLength;
            height = 3 * sideLength + 4;
            break;

        case 2:
            left = 4 * sideLength + 6;
            top = 1;
            width = sideLength;
            height = sideLength;
            break;

        case 3:
            left = 1;
            top = sideLength + 4;
            width = sideLength;
            height = sideLength;
            break;

        case 4:
            left = 4 * sideLength + 6;
            top = sideLength + 4;
            width = sideLength;
            height = sideLength;
            break;

        case 5:
            left = 1;
            top = 2 * sideLength + 6;
            width = sideLength;
            height = sideLength;
            break;

        case 6:
            left = 4 * sideLength + 6;
            top = 2 * sideLength + 6;
            width = sideLength;
            height = sideLength;
            break;
    }
    return (

        <Image source={{ uri }}
            resizeMode='contain'
            style={{
                position: 'absolute',
                top: top,
                left: left,
                width: width,
                height: height,
                backgroundColor: '#696969'
            }} />
    )
}

export default Grid;