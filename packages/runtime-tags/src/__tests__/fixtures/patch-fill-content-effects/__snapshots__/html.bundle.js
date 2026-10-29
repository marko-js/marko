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
const $setup = _shell_setup([[], ["a12"]], ["a>", $setup$1], ["b>", $setup$1], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& D l`)("D%l", "D%l", "D%l")};${((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button> </button>`)($template, $template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	frame_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label + ": 0")}</p>`);
		_script($scope1_id, "a0");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1"), "a2");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	frame_default({ content: _content("a7", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.label + ": 0")}</p>`);
		_script($scope2_id, "a4");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ck: $wi__input_label && 1,
			Cm: 1
		}), "a5"), "a6");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "c", 2);
	frame_default({ content: _content("a11", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "a", input.title + ": 0")}</p>`);
		_script($scope3_id, "a8");
		_subscribe($count__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			Cm: 2
		}), "a9"), "a10");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button>${_text_resume($scope0_id, "e", count)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a12");
	_scope($scope0_id, {
		h: input.label,
		i: input.title,
		j: count,
		k: $wi__input_label && $input_label__closures,
		m: $count__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		l: $wi__input_title && $input_title__closures,
		c: _existing_scope($childScope3)
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va13", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va14", input.title, !_server_guard($scope0_reason, 1)));
}, 1);
