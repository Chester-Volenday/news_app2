import ReactHtmlParser from 'react-html-parser';
import { useState, useEffect } from "react";
import Axios from 'axios';

const NewsItemDetails = ({ match }) => {
    const [ newsDetails, setNewsDetails ] = useState("");

    useEffect(() => {
        Axios.get(`/display_news/${match.params.id}`)
        .then(async res => {
            setNewsDetails(res.data);
        })
        .catch(err => console.log(err));
    }, [match]);

    return (
        <main>
            <div className="container main_container">
                <h1 className="detail__heading">{newsDetails.headline}</h1>
                <img src={newsDetails.image} alt={newsDetails.headline} />
                <div className="detail__credit flex evenly">
                    <p>Posted by: {newsDetails.author}</p>
                    <p>Date posted: {newsDetails.postDate}</p>
                </div>
                <div className="detail__content">{ReactHtmlParser(newsDetails.content)}</div>
            </div>
        </main>
    );
}
 
export default NewsItemDetails;