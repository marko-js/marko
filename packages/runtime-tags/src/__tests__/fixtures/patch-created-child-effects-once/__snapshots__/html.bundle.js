// tags/child.marko
const $template = "<span><!> <!></span>";
const $walks = "D%c%l";
_shells({ b: "b !b0 b1 b2;D%c%;<span><!> <!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", input.count, 2, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "b0", void 0, _client_guard($scope0_reason, 1));
	_script($scope0_id, "b1", void 0, _client_guard($scope0_reason, 0));
	_script($scope0_id, "b2");
	_server_guard($scope0_reason, 0) && _patch_effect($scope0_id, "eb1", "e");
	_server_guard($scope0_reason, 1) && _patch_effect($scope0_id, "eb0", "f");
	$scope0_page ? _scope($scope0_id, {
		e: input.label,
		f: input.count
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "wf", input.count, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({
	a: "a !a1; D l%;<button> </button><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0 a5;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(8 | _mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			child_default({
				label: input.msg,
				count
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a0"], $scope0_reason, 0);
	_script($scope0_id, "a1");
	_patch_value($scope0_id, "va3", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _unfilled_if($scope0_reason, 0) && input.msg,
		h: count
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "va2", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
