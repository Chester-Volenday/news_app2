const express = require('express');
const router = express.Router();
const newsItems = require('./controllers/newsItems');

router.get("/display_news", newsItems.displayNews);
router.get("/display_news/:id", newsItems.displayOneNews);

router.post("/create_news", newsItems.createNews);

router.delete('/delete_news', newsItems.deleteNews);

module.exports = router;