function sanitizeurl(url) {
  return url === "/" ? url : url.replace(/\/*$/, "");
}

module.exports = {
  meta: data => {
    return {
      title:
        data.title || "Swaroop Sethumadhavan | Front-End Developer at Shopify",
      description:
        data.description ||
        "I work as a Front-End developer  at Shopify  currently living in Berlin, DE.",
      canonical: sanitizeurl(data.page.url)
    };
  }
};
