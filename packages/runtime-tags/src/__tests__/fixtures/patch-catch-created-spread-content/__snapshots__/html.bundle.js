// tags/error-wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	b0: "b0;D ;<p> </p>",
	b: "b !;b%;<!><!><!>"
});
var error_wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_fail = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fallback__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "b3" : "b4");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b4");
	}, void 0, (err) => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "a", err.message)}</b><div`);
		_attrs_content({ content: input.fallback }, "b", $scope1_id, "div");
		_html(`</div>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_fallback__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2");
	}, void 0, "b5", "b0", 1, "");
	$scope0_page ? _scope($scope0_id, {
		d: input.fallback,
		f: _write_if($scope0_reason, 0) && $input_fallback__closures,
		g: $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb6", input.fallback, !_server_guard($scope0_reason, 0)), _content_withhold(input.fallback));
});

// template.marko
_shells({
	a0: "a0 a6,",
	a: /*@__PURE__*/ (() => `a !a2;${((_w0) => ` D l/${_w0}&b`)("b%c")};${((_w0) => `<button> </button>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "c");
	error_wrapper_default({
		fail: input.fail,
		fallback: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<i>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "b", count, 2)}</i>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a1");
			_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		}, $scope0_id) })
	});
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va4", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.label,
		h: count,
		i: _write_if($scope0_reason, 1) && $input_label__closures,
		j: $count__closures,
		c: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 1));
}, 1);
