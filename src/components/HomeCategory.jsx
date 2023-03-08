import React from "react";
import {Link} from "react-router-dom";

function HomeCategory(props) {
    const {image, title, description, routeName} = props;
    return (
        <div className="col-6 mb-4">
            <Link to={`/category/${routeName}`} >
                <img className="w-100" src={image} alt="shoes"></img>
                <h2>{title}</h2>
                <p>{description}</p>
            </Link>
        </div>
    )
}

export default HomeCategory;
