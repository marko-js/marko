// tags/error-wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
const $setup$1 = [[], []];
_shells({
	b3: "b3;D ;<p> </p>",
	b2: "b2;D l ;<b> </b><div></div>",
	b: "b;b%;<!><!><!>"
});
var error_wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_client = _any_client_guard($scope0_reason), $cg__input_fallback = _client_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_mark($scope2_id, "a", input.fail ? boom() : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b1", $cg__input_fail);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), $cg__input_fail && "b1");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_text_mark($scope1_id, "a", err.message, 1, 4, 0)}</b><div>`);
		_attr_content("b", $scope1_id, input.fallback, 0, 1, $scope0_reason, 0);
		_html(`</div>${_el_mark($scope1_id, "b", _updates_from($scope0_reason, 0))}`);
		$scope0_client && _unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b0", $cg__input_fallback);
		_subscribe($scope0_client && _unfilled_if($scope0_reason, 0) && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $scope0_client && $cg__input_fallback && "b0");
	}, 0, "b2", "b3", 1, 1, 1);
	_scope($scope0_id, {
		d: input.fallback,
		f: _write_if($scope0_reason, 0) && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.fallback, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b4", "d");
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["c>", $setup$1]);
_shells({
	a2: "a2 a1",
	a: `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&b`)("b%c")};${((_w0) => `<button> </button>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	error_wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<i>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 1)} ${_text_mark($scope1_id, "b", count, 2)}</i>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "a0", $cg__input_label);
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a0"), "a1");
		}, $scope0_id) })
	});
	_patch_child_end();
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		g: input.label,
		h: count,
		i: _write_if($scope0_reason, 1) && $input_label__closures,
		j: $count__closures,
		c: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a4", "g");
}, 1);
