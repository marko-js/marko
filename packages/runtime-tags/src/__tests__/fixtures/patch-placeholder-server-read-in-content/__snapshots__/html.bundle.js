// tags/wrap/index.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a7"]], ["c>", $setup$1]);
_shells({
	a1: "a1,<div id=done>done</div>",
	a2: "a2,<div id=done>done</div>",
	a3: "a3;b%;<!><!><!>",
	a: `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&`)("D%l")};${((_w0) => `<button> </button>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_msg = _write_guard($scope0_reason, 0), $cg__input_msg = _client_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $fg__input_msg = _filled_guard($scope0_reason, 0), $wi__input_msg = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	wrap_default({ content: _content("a6", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", input.promise, () => {
				_scope_id();
				_html("<div id=done>done</div>");
			}, 1, "a1", _unfilled_if($scope0_reason, 1) && 2);
			$cg__input_promise && _patch_render($scope3_id, "a4");
			$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a4", 0);
			$wi__input_promise && _resume_branch($scope3_id);
		}, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<em>loading ${_text_mark($scope2_id, "a", input.msg, $wg__input_msg * 2)}</em>`);
			$cg__input_msg && _patch_render($scope2_id, "a0");
			_subscribe($wi__input_msg && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_msg && "a0", $wg__input_msg);
		}, void 0, "a5", void 0, "a3");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_patch_child_end();
	_script($scope0_id, "a7");
	$fg__input_msg && _patch_subscribers($scope0_id, "a8", "f");
	_scope($scope0_id, {
		f: input.msg,
		h: count,
		i: $wi__input_msg && $input_msg__closures,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures,
		c: _existing_scope($childScope)
	}) || $fg__input_msg && _patch_write($scope0_id, "xf", input.msg, !_server_guard($scope0_reason, 0));
}, 1);
