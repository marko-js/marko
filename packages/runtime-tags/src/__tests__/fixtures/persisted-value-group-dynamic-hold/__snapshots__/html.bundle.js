// tags/layout/index.marko
var layout_default = _template("b", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<main class=shell>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "b0");
	_html("</main>");
	$sg__input_content && writeScope($scope0_id, {});
});
_renderer_shells({
	"b1": ["<main class=shell><!></main>", "D%l"],
	"b": ["<main class=shell><!></main>", "D%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	layout_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}<p class=info>${_escape(_hole_value($scope1_id, "Qc", $global().price, _persisted_reason()))}${_el_resume($scope1_id, "c", _persisted_reason())}</p>`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, { d: _seed_fill(_state_reason() && n) });
		_resume_branch($scope1_id);
	}) });
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"a2": ["<button class=tap>tap <!></button><p class=info> </p>", " Db%lD l"],
	"a0": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]],
	"a": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]]
});
