const slugify = function (text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};
// Web Design => web-design
function createLink(node) {
    const category = node.frontmatter.category || 'web';
    return '/' + category + '/' + node.fields.slug;
}
module.exports = { slugify, createLink };
//# sourceMappingURL=utilityFunctions.js.map