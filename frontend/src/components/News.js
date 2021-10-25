import NewsItem from "./NewsItem";

const News = ({ newsItems }) => {
    return (
        <main>
            <div className="container main_container">
                <h1 className="main_heading">Headlines for today</h1>
                <div className="news-list">
                    {newsItems.map(newsItem => (
                        <NewsItem 
                            key={newsItem._id}
                            id={newsItem._id}
                            author={newsItem.author}
                            headline={newsItem.headline}
                            content={newsItem.content}
                            image={newsItem.image}
                            postdate={newsItem.postDate}
                            startdate={newsItem.startDate}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
 
export default News;