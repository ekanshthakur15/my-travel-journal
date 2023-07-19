import LocationIcon from './images/location--icon.png';

function Card(props) {

    return (
        <div className = "card">
            <div className="card--image" >
                <img src={props.imageUrl} alt="place" />
            </div>
            <div className = "card--content">
                <div className = "location">
                    <img src={LocationIcon} alt="location" />
                    <p>{props.location}
                            <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </p>
                </div>
                <h1>{props.title}</h1>
                <p className = "event--date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}
export default Card

// {
//      key: 3,
//      title: "Geirangerfjord",
//      location: "Norway",
//      googleMapsUrl: "https://goo.gl/maps/5J6KAPeSgM8CHQwB7",
//      startDate: "01 Oct, 2021",
//      endDate: "18 Nov, 2021",
//      description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
//      imageUrl: "https://source.unsplash.com/3PeSjpLVtLg",
//     },