// tags/card.marko
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_mark($scope0_id, "b", g())}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", $fg__input_fn && "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.fn,
		f: open
	}) || $fg__input_fn && _patch_write($scope0_id, "xe", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
	_dynamic_tag($scope0_id, "a", input.show && card_default, { fn: _bind_resume(function() {
		return "f:" + input.label;
	}, "a0", $scope0_id) }, 1, 0, 0, $wg__input_show__OR__input_label, $scope0_reason, 0);
	_patch_render($scope0_id, "a1", [$fg__input_show && "d", $fg__input_label && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		e: input.label
	}) || $fg__input_show && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 1));
}, 1);
