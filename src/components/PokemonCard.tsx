interface Pokemon {
    name: string;
    imgSrc?: string;
    color?: string;
    backgroundColor?: string;
}

function PokemonCard({ name, imgSrc, color, backgroundColor }: Pokemon) {
    return <figure className="card" style={{
        color: color,
        backgroundColor: backgroundColor,
    }}>
        {
            imgSrc !== undefined ?
                <img
                    src={imgSrc}
                    alt={name}
                    className="card-img"
                /> :
                <p>???</p>
        }
        <figcaption>{name}</figcaption>
    </figure>;
}

export default PokemonCard;