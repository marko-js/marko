// tags/layout/index.marko
var layout_default = _template("__tests__/tags/layout/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main class=shell>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/layout/index.marko_0/update_dynamic_#text/0");
	_html("</main>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/layout/index.marko", 0);
});
_renderer_shells({
	"__tests__/tags/layout/index.marko_0_update": ["<main class=shell><!></main>", "D%l"],
	"__tests__/tags/layout/index.marko": ["<main class=shell><!></main>", "D%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	layout_default({ content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}<p class=info>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", $global().price, _persisted_reason()))}${_el_resume($scope1_id, "#text/2", _persisted_reason())}</p>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/template.marko", "3:2", { n: "4:8" });
		_resume_branch($scope1_id);
	}) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"#childScope/2": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"__tests__/template.marko_1_content": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"__tests__/template.marko_0_update": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout/index.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout/index.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout/index.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout/index.marko"],
		"&%b"
	]]
});
