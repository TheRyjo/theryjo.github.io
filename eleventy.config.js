const { EleventyRenderPlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const pluginWebc = require("@11ty/eleventy-plugin-webc")
const CleanCSS= require("clean-css")
const moment = require("moment")

const HIDDEN_TAGS = ['post', 'professional', 'personal', 'experiment'];

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyRenderPlugin);
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPlugin(pluginWebc, {
        components: ["_components/**/*.webc"]
    });
    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles
    });
    eleventyConfig.addFilter("debugger", (...args) => {
        console.log(...args)
        debugger;
    })
    eleventyConfig.addFilter("fixUTC", (date) => {
        if (!date)
            return "N/A"
        const utc = date.toUTCString();
        return moment.utc(utc).format("YYYY-MM-DD");
    });
    eleventyConfig.addFilter("hiddenTagExcluded", (...args) => {
        const tags = args[0];
        return tags.filter((tag) => !HIDDEN_TAGS.includes(tag));
    })
    eleventyConfig.setLiquidOptions({
        jsTruthy: true
    })
    eleventyConfig.addPassthroughCopy({
        "assets/fonts": "fonts",
        "assets/icons": "icons",
        "assets/spa": "spa",
        "CNAME": "CNAME"
    })
    eleventyConfig.ignores.add("README.md")
    eleventyConfig.ignores.add("/posts/drafts")
}
