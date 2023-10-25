const MapDisplay = ({ mapData }) => {
    const stringsInTheProperOrientation = Array(mapData[0].length)
    for (let y = 0; y < mapData[0].length; y++) {
        const row = []
        for (let x = 0; x < mapData.length; x++) {
            row.push(mapData[x][y])
        }
        stringsInTheProperOrientation.push(row.join(''))
    }

    return (
        <ul>{
            stringsInTheProperOrientation.map( (row,index) => <li key={index}>{row}</li> )
        }</ul>
    );
};

export default MapDisplay
