var layout = marko`
    <!DOCTYPE html>
    html lang="en"
        head
            meta charset="UTF-8"
            <title>${data.title}</title>
        body
            h1 -- ${data.title}
            div
                layout-placeholder name="body"
    `;

module.exports = function () {
    var title = 'Hello World';
    var name = 'Frank';

    var template = marko`
        layout-use(layout) title=title
            layout-put into="body"
                -- Hello ${name}! This is the body content!
    `;

    return template.renderSync();
};