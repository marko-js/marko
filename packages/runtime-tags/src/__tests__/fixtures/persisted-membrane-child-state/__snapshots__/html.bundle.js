// tags/static-bit.marko
var static_bit_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span class=static>static</span>");
});
_renderer_shells({ "c0": ["<span class=static>static</span>", "b"] });

// tags/stateful-widget.marko
var stateful_widget_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<b class=widget>count <!>${_escape(count)}${_el_resume($scope0_id, "a")}</b>`);
	const $childScope = _peek_scope_id();
	_region(() => {
		static_bit_default({});
	}, $scope0_id, "c", "b1");
	_script($scope0_id, "b2");
	writeScope($scope0_id, {
		d: _seed_fill(_state_reason() && count),
		b: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": ["<b class=widget>count <!></b><!>", "Db%l/&%b"],
	"b": ["<b class=widget>count <!></b><!>", "Db%l/&%b"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	stateful_widget_default({});
	_html("</main>");
	_persisted_reason() && writeScope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
_renderer_shells({
	"a0": [[
		"<main>",
		["b"],
		"<!></main>"
	], [
		"D/",
		["b"],
		"&%l"
	]],
	"a": [[
		"<main>",
		["b"],
		"<!></main>"
	], [
		"D/",
		["b"],
		"&%l"
	]]
});
