// tags/wrapper.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0;b%b ;<!><!><button>+</button>" });
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.content, { value: n });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc2", n, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: n
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_suffix = _write_guard($scope0_reason, 0), $wi__input_suffix = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	wrapper_default({ content: _content_resume("a1", ({ value }) => {
		const $scope1_reason = _scope_reason(), $wg__value = _write_guard($scope1_reason, 0), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", value, $wg__value)}</p><em>${_text_resume($scope1_id, "b", input.suffix, $wg__input_suffix)}</em>`);
		$scope1_page && _subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_suffix || $wg__value);
		$wg__input_suffix || $wg__value || _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		d: input.suffix,
		e: $wi__input_suffix && $input_suffix__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
