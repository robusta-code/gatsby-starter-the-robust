"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = function (text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};
// Web Design => web-design
function createLink(post) {
    const category = post.frontmatter.category || "web";
    return "/" + category + "/" + post.fields.slug;
}
exports.createLink = createLink;
//# sourceMappingURL=utilityFunctions.js.map