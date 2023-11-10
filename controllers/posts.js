// Istanza del file json
const feed = require("../db/posts.json");

const index = (req, res) => {
  // uso format per abbreviare la content negotiation
  res.format({
    html: () => {
      const htmlPosts = ["<h1>Feed</h1>"];

      htmlPosts.push("<ul>");

      for (const post of feed) {
        htmlPosts.push(`<li>
        <h3>${post.titolo}</h3>`);
      }
      htmlPosts.push("</ul>");

      // send anziche end
      res.type("html").send(htmlPosts.join(""));
    },
    json: () => {
      // oppure per json anche res.json()
      res.type("json").send({ feed });
    },
  });
};

module.exports = { index };
