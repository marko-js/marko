// tags/static-bit.marko
var static_bit_default = _template("__tests__/tags/static-bit.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span class=static>static</span>");
});
_renderer_shells({ "__tests__/tags/static-bit.marko_0_update": ["<span class=static>static</span>", "b"] });

// tags/stateful-widget.marko
var stateful_widget_default = _template("__tests__/tags/stateful-widget.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<b class=widget>count <!>${_escape(count)}${_el_resume($scope0_id, "#text/0")}</b>`);
	const $childScope = _peek_scope_id();
	_region(() => {
		static_bit_default({});
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/tags/stateful-widget.marko_0_count");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/1": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/tags/stateful-widget.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/stateful-widget.marko_0_update": ["<b class=widget>count <!></b><!>", "Db%l/&%b"],
	"__tests__/tags/stateful-widget.marko": ["<b class=widget>count <!></b><!>", "Db%l/&%b"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	stateful_widget_default({});
	_html("</main>");
	_persisted_reason() && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [[
		"<main>",
		["__tests__/tags/stateful-widget.marko"],
		"<!></main>"
	], [
		"D/",
		["__tests__/tags/stateful-widget.marko"],
		"&%l"
	]],
	"__tests__/template.marko": [[
		"<main>",
		["__tests__/tags/stateful-widget.marko"],
		"<!></main>"
	], [
		"D/",
		["__tests__/tags/stateful-widget.marko"],
		"&%l"
	]]
});
