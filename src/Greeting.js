const Greeting = (props) => {

    console.log(props)

    return (
        <>
            <h2>
            Hello {props.name}!
            </h2>
            <h3>
                {props.name}'s favorite number is {props.favoriteNumber}
            </h3>

            <h3>
                {props.name}'s favorite number plus 10 is {props.favoriteNumber +10}
            </h3>

            <ul>
                {props.favoriteColors 
                && [...new Set(props.favoriteColors)].map(x => (
                <li
                 key={x} 
                 >
                     {x}
                     </li>))}
                {!props.favoriteColors && <li>None</li>}

            </ul>
        </>    

    );
};

export default Greeting;