const { IdAttributePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  // Generate id attributes on all headings (required for anchor nav links)
  eleventyConfig.addPlugin(IdAttributePlugin);

  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Navigation collection — all pages sorted by nav order
  eleventyConfig.addCollection("nav", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((item) => item.data.nav_order !== undefined)
      .sort((a, b) => a.data.nav_order - b.data.nav_order);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
