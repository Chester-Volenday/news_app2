// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link } from 'react-router-dom';
import { BiEditAlt } from "react-icons/bi";
import { BiCalendarEvent } from "react-icons/bi";
import LastSeen from "./LastSeen";

const NewsItem = ({ id, author, headline, image, content, postdate, startdate }) => {

    return (
    <Link to={`/news/${id}`} className="news-item">
        <img src={image} alt={headline} className="news-item__image" />
        <div className="flex">
            <small><BiEditAlt /> {author}</small>
            <time>< BiCalendarEvent /> {postdate} - (<LastSeen date={startdate} />)</time>
        </div>
        <h2 className="news-item__heading">{headline}</h2>
    </Link>
)}
 
export default NewsItem;