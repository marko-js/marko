// tags/frame.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("D%l")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	frame_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label + ":0")}</p>`);
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0"), "a1");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.label,
		f: count,
		g: $wi__input_label && $input_label__closures,
		h: $count__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 0));
}, 1);
