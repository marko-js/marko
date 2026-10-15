// tags/wrapper.marko
const $template = "<!><!><!>";
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	b0: "b0;D l%;<p> </p><!><!>",
	b: "b !;b%;<!><!><!>"
});
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $input_fail__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.fail ? boom() : "ok", void 0, $scope0_reason, 2)}</p>`);
		_dynamic_tag($scope2_id, "b", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "b2");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "b3");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_content__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			Cf: $wi__input_content && 1
		}), "b4"), _client_guard($scope0_reason, 2) && "b5");
	}, void 0, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b1", $wg__input_content);
		$wg__input_content || _resume_branch($scope1_id);
	}, void 0, "b6", "b0", 1);
	$scope0_page ? _scope($scope0_id, {
		d: input.content,
		f: $wi__input_content && $input_content__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_fail__closures
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb7", input.content, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a2;${((_w0) => ` D l/${_w0}&b`)("b%c")};${((_w0) => `<button> </button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(34);
	const $childScope = _patch_child($scope0_id, "c");
	wrapper_default({
		fail: false,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 0)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id)
	});
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va4", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.label,
		g: count,
		h: _write_if($scope0_reason, 0) && $input_label__closures,
		c: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 0));
}, 1);
