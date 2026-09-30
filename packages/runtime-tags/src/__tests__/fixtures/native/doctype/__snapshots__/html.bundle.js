// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<!DOCTYPE html><html><head><title>Title of the document</title>${_flush_head()}</head><body>The content of the document......`), _trailers("</body></html>");
}, 1);
