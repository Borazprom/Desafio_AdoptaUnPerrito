import Card from "react-bootstrap/Card";
import Raza from "./Tags";


const MyCard = ({image, name, text, colorBadge, textBadge}) => {
    return (
        <>
        <Card className="card">
            <Card.Img variant="top" src={image} className="img"/>

            <Card.Body>
                <Card.Title className="name">{name}</Card.Title>
                <Card.Text className="text">{text}</Card.Text>
                <Raza colorBadge={colorBadge} textBadge={textBadge}/>
            </Card.Body>
        </Card>

        </>
    )
}

export default MyCard;