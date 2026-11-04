// tags/wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$1 = [[], []];
_shells({
	b4: "b4;D l%;<p> </p><!><!>",
	b: "b;b%;<!><!><!>"
});
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $cg__input_content = _client_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $cg__input_fail = _client_guard($scope0_reason, 2), $fg__input_content = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom() : "ok", 1, $scope0_reason, 2)}</p>`);
		_dynamic_tag($scope2_id, "b", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b1", $cg__input_content);
		_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "b2", $cg__input_fail);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cf: $wi__input_content && 1
		}), $cg__input_content && "b1"), $cg__input_fail && "b2");
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
		$cg__input_content && _patch_render($scope1_id, "b0");
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_content && "b0", $wg__input_content);
	}, 0, "b3", "b4", 1);
	$fg__input_content && _patch_subscribers($scope0_id, "b5", "d");
	_scope($scope0_id, {
		d: input.content,
		f: $wi__input_content && $input_content__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_fail__closures
	}) || $fg__input_content && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a4"]], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&b`)("b%c")};${((_w0) => `<button> </button>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	const A = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>A ${_text_mark($scope1_id, "a", input.label, 2, $scope0_reason, 0)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1");
	}, $scope0_id) };
	const B = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>B ${_text_mark($scope2_id, "a", input.label, 2, $scope0_reason, 0)}</i>`);
		$cg__input_label && _patch_render($scope2_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cl: $wi__input_label && 1
		}), $cg__input_label && "a3");
	}, $scope0_id) };
	_set_scope_reason(38 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	wrapper_default({
		fail: false,
		content: input.alt ? A : B
	});
	_patch_child_end();
	_script($scope0_id, "a4");
	$fg__input_label && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		f: input.label,
		h: count,
		i: _unfilled_if($scope0_reason, 1) && A,
		j: _unfilled_if($scope0_reason, 1) && B,
		l: $wi__input_label && $input_label__closures,
		c: _existing_scope($childScope)
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
