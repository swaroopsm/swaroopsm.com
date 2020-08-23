function sanitizeurl(url) {
  return url === "/" ? url : url.replace(/\/*$/, "");
}

module.exports = {
  meta: data => {
    return {
      canonical: sanitizeurl(data.page.url)
    };
  }
};
