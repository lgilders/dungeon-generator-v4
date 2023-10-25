const MapDisplay = ({ mapData }) => {
    return (
        <ul>{
            mapData && mapData.map( (row,index)=> <li key={index}>{row.join('')}</li>)
        }</ul>
    );
};

export default MapDisplay
