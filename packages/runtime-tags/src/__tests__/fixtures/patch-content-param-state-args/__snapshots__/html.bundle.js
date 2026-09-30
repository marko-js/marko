// tags/wrapper.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({ c: "c !c0;b%b ;<!><!><button>+</button>" });
var wrapper_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.content, { value: n });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c2", n, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: n
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "c1", input.content);
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !;${_w0};${_w1}`)(((_w0) => `b/${_w0}&`)($walks), ((_w0) => `<!>${_w0}`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_suffix = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	wrapper_default({ content: _content_resume("a1", ({ value }) => {
		const $scope1_reason = _scope_reason(), $sg__value = _source_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", value, $sg__value)}</p><em>${_text_resume($scope1_id, "b", input.suffix, $sg__input_suffix)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $sg__input_suffix || $sg__value);
		$sg__input_suffix || $sg__value || _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		d: input.suffix,
		e: $input_suffix__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a2", input.suffix);
}, 1, () => [wrapper_default]);
