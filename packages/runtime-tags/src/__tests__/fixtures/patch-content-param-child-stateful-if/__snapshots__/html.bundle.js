// tags/disclosure.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
_shells({ b: "b !b0;b%b ;<!><!><button>toggle</button>" });
var disclosure_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $sg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "b1", input.content);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !;${_w0};${_w1}`)(((_w0) => `b/${_w0}&`)($walks), ((_w0) => `<!>${_w0}`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_suffix = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	disclosure_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.suffix, $sg__input_suffix)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $sg__input_suffix);
		$sg__input_suffix || _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		d: input.suffix,
		e: $input_suffix__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a2", input.suffix);
}, 1, () => [disclosure_default]);
