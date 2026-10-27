// tags/child.marko
const $template = "<span><!> <!></span>";
const $walks = "D%c%l";
const $setup = [[], ["b2"]];
_shells({ b: "b !b2;D%c%;<span><!> <!></span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", input.count, 2, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_script($scope0_id, "b2");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb1" : "eb1", "e");
	_filled_guard($scope0_reason, 1) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) ? "hb0" : "eb0", "f");
	$scope0_page ? _scope($scope0_id, {
		e: input.label,
		f: input.count
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.count, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({
	a: "a !a2; D l%;<button> </button><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
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
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.msg,
		h: count
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
