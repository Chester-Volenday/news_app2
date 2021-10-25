const News = require('../models/newsItem');

class NewsItems {

    async displayNews(req, res) {
        try {
            const news = await News.find();
            res.json(news);
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    async displayOneNews(req, res) {
        try {
            const oneNews = await News.findById(req.params.id);
            res.json(oneNews);
        } catch (err) {
            res.json({ message: err.message })
        }
    }

    async createNews(req, res) {
        const news = new News({
            author: req.body.author,
            headline: req.body.headline,
            content: req.body.content,
            image: req.body.picture,
            postDate: new Date().toLocaleString(),
            startDate: new Date().getTime()
        });
        try {
            const savedNews = await news.save();
            res.status(201).json(savedNews);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async deleteNews(req, res) {
        try {
            const deletedNews = await News.remove({ _id: req.params.id });
            res.json({ notice: `Number of item/s deleted - ${deletedNews.deletedCount}` });
        } catch (err) {
            res.json({ message: err.message })
        }
    }
}

module.exports = new NewsItems();