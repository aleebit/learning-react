const Greeting = ({
    name
    , favoriteColors
    , favoriteNumber
}) => {

    // console.log(props)

    return (
        <>
            <h2>
            Hello {name}!
            </h2>
            <h3>
                {name}'s favorite number is {favoriteNumber}
            </h3>

            <h3>
                {name}'s favorite number plus 10 is {favoriteNumber +10}
            </h3>

            <ul>
                {favoriteColors 
                && [...new Set(favoriteColors)].map(x => (
                <li
                 key={x} 
                 >
                     {x}
                     </li>))}
                {!favoriteColors && <li>None</li>}

            </ul>
        </>    

    );
};

export default Greeting;