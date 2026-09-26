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
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "b2"), "b3");
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
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a2;${_w0};${_w1}`)(((_w0, _w1) => `b0${_w0}&0${_w1}&%b D l`)("", ""), ((_w0, _w1) => `<!>${_w0}${_w1}<!><button> </button>`)("", "")) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_first = _source_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let a = child_default({ label: "A" });
	_var($scope0_id, "b", $childScope, "a0");
	_filled_guard(0, 0) && _patch_write($scope0_id, "l", a, 1);
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "c", $childScope2);
	let b = child_default({ label: "B" });
	_var($scope0_id, "d", $childScope2, "a1");
	_filled_guard(0, 0) && _patch_write($scope0_id, "m", b, 1);
	const $tag = input.first ? a : b;
	_dynamic_tag($scope0_id, "e", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "e", $tag, 0, 0, 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "g", n)}</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a2");
	$scope0_page && _scope($scope0_id, {
		k: n,
		l: $si__input_first && a,
		m: $si__input_first && b,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1, 1);
