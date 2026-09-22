// tags/child.marko
_shells({ b: "b !," });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const $return = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "c", count, 2)}</em>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_patch_value($scope0_id, "b1", count, 1);
	$scope0_page ? _scope($scope0_id, {
		c: input.label,
		d: count,
		f: $input_label__closures,
		g: $count__closures
	}) : _filled_guard($scope0_reason, 0) && _content_withheld("b0") && _patch_value($scope0_id, "b0", input.label);
	$scope0_page && _resume_branch($scope0_id);
	return $return;
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a1;${_w0};${_w1}`)(((_w0) => `b0${_w0}&%b D l`)(""), ((_w0) => `<!>${_w0}<!><button> </button>`)("")) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let content = child_default({ label: input.label });
	_var($scope0_id, "b", $childScope, "a0");
	_filled_guard(0, 0) && _patch_write($scope0_id, "j", content, 1);
	_dynamic_tag($scope0_id, "c", content, {}, 0, 0, 0, _patch_dynamic_tag($scope0_id, "c", content, 0, 0, 0));
	_html(`<button>${_text_resume($scope0_id, "e", n)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	$scope0_page && _scope($scope0_id, {
		i: n,
		a: _existing_scope($childScope)
	});
}, 1, () => [child_default, content]);
