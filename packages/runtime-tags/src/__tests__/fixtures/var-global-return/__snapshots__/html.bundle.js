// tags/tagger/index.marko
var tagger_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const g = $global().locale + "!";
	_html("<span>t</span>");
	return g;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<main>");
	let tag = tagger_default({});
	_html(`<p>${_escape(tag)}</p></main>`);
}, 1);
