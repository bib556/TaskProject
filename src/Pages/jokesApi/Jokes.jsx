import { useEffect, useState } from "react";
import "./Jokes.css";

function Jokes() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const apiKey = import.meta.env.VITE_API_KEY;
const host = import.meta.env.VITE_API_HOST;
const baseUrl = import.meta.env.VITE_BASE_URL;
// console.log(apiKey)
  useEffect(() => {
    const fetchData = async () => {
      const url = baseUrl;

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": host,
        },
      };

      
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setNews(result.data || []);
        console.log("News fetched:", result);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);

  if (loading) return <p className="status-msg">Loading...</p>;
  if (error) return <p className="status-msg">Error: {error}</p>;

  return (
    <div className="news-container">
      <h1 className="title">Latest Tech News</h1>
      <div className="news-grid">
        {news.map((item, index) => (
          <div className="news-card" key={index}>
            <img
              src={item.photo_url || "https://via.placeholder.com/300x180"}
              alt="News"
              className="news-img"
            />
            <div className="news-content">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-summary">{item.snippet?.slice(0, 120)}...</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jokes;


