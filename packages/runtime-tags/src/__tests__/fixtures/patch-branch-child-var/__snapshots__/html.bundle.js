// tags/box.marko
const $template = "<div class=box> </div>";
const $walks = " D l";
_shells({ b: "b; D ;<div class=box> </div>" });
var box_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const root = _el($scope0_id, "b0");
	_html(`<div class=box>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}</div>${_el_resume($scope0_id, "a")}`);
	const $return = root;
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// template.marko
_shells({
	a: "a !a3;D%b D ;<main><!><button id=c> </button></main>",
	a0: /*@__PURE__*/ (() => `a0 !a2;${/*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<button id=read>read</button>`)($template)}`)()
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			let el = box_default({ label: input.label });
			_client_guard($scope0_reason, 2) && _var($scope1_id, "b", $childScope, "a1");
			_filled_guard(0, 0) && _patch_write($scope1_id, "d", el, 1);
			_html(`<button id=read>read</button>${_el_resume($scope1_id, "c")}`);
			_script($scope1_id, "a2");
			_patch_write($scope1_id, "d", el, 1);
			_scope($scope1_id, {
				d: el,
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _source_guard($scope0_reason, 1), void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`<button id=c>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_patch_value($scope0_id, "a5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: _source_if($scope0_reason, 1) && input.label,
		h: count
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a4", input.label);
}, 1);
