// tags/tagger/index.marko
var tagger_default = _template("__tests__/tags/tagger/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const g = $global$1.locale + "!";
	_html("<span>t</span>");
	const $return = g;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	let tag = tagger_default({});
	_html(`<p>${_escape(tag)}</p></main>`);
}, 1);
