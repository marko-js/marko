// template.marko
const $Kid_content__walks = "D l";
const $Kid_content__template = "<span> </span>";
_shells({ a: /*@__PURE__*/ (() => `a !a2;${((_w0) => `b/${_w0}& b`)($Kid_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Kid_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Kid = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<span>${_patch_text($scope1_id, "a", input.a + input.b, void 0, $scope1_reason, 0)}</span>`);
		_patch_write($scope1_id, "wd", input.a, 1);
		_patch_write($scope1_id, "we", input.b, 1);
		$scope1_page ? _scope($scope1_id, {
			d: (_unfilled_if($scope1_reason, 2) || _unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && input.a,
			e: (_unfilled_if($scope1_reason, 1) || _unfilled_if($scope1_reason, 0)) && input.b
		}) : _filled_guard($scope1_reason, 2) && _client_guard($scope1_reason, 1) && _patch_value($scope1_id, "va1", input.b, !_server_guard($scope1_reason, 2));
	}, $scope0_id) };
	let s = 1;
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "a");
	Kid.content({
		a: s,
		b: input.x
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va3", s, 1);
	$scope0_page && _scope($scope0_id, {
		f: s,
		a: _existing_scope($childScope)
	});
}, 1);
