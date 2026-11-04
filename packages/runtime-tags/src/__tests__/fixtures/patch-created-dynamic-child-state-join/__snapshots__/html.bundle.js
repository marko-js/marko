// tags/child/index.marko
_shells({ b: "b !b0;D l ;<p> </p><button>+</button>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_x = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>${_text_mark($scope0_id, "a", input.x, 1, $scope0_reason, 0)}</p><button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1", 1, 0, $fg__input_x && "e", "b2");
	_patch_fill($scope0_id, "vb3", n, 1);
	_scope($scope0_id, {
		e: input.x,
		f: n
	}) || $fg__input_x && _patch_write($scope0_id, "xe", input.x, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_a = _write_guard($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.show ? child_default : null, { x: input.a }, 1, 0, 0, $wg__input_show__OR__input_a, $scope0_reason, 0);
	_patch_render($scope0_id, "a0", [$fg__input_show && "d", $fg__input_a && "e"], $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a
	}) || ($fg__input_show && _client_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.show, !_server_guard($scope0_reason, 1)), $fg__input_a && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 2)));
}, 1);
