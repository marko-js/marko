// tags/card.marko
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", g())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.fn,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.show && card_default, { fn: _resume(function() {
		return "f:" + input.label;
	}, "a0", $scope0_id) }, 0, 0, $wg__input_show__OR__input_label, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "wd", input.show, 1);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.show,
		e: input.label
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "we", input.label, !_server_guard($scope0_reason, 1));
}, 1);
