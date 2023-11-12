const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "homepage": "https://j40pl7llyccl.github.io/home";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
