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
const $setup = _shell_setup([[], ["a8"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `D/${_w0}&/${_w1}& b l`)("D%l", "D%l")};${((_w0, _w1) => `<main>${_w0}${_w1}<button class=a>a</button><button class=b>b</button></main>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $a__closures = /* @__PURE__ */ new Set();
	const $b__closures = /* @__PURE__ */ new Set();
	let a = 0;
	let b = 0;
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	frame_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p class=a>${_text_mark($scope1_id, "a", input.label + ":0")}</p>`);
		_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 0) && ">g");
		_subscribe($a__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1"), "a2");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	frame_default({ content: _content("a7", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p class=b>${_text_mark($scope2_id, "a", input.label + ":0")}</p>`);
		_patch_render($scope2_id, "a4", _filled_guard($scope0_reason, 0) && ">g");
		_subscribe($b__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cj: $wi__input_label && 1
		}), $cg__input_label && "a5"), "a6");
	}, $scope0_id) });
	_patch_child_end();
	_html(`<button class=a>a</button>${_el_mark($scope0_id, "c")}<button class=b>b</button>${_el_mark($scope0_id, "d")}</main>`);
	_script($scope0_id, "a8");
	_scope($scope0_id, {
		g: input.label,
		h: a,
		i: b,
		j: $wi__input_label && $input_label__closures,
		k: $a__closures,
		a: _existing_scope($childScope),
		l: $b__closures,
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 0));
}, 1);
