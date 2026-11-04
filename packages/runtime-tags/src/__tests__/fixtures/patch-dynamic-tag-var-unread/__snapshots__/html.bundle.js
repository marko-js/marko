// tags/one.marko
_shells({ b: "b,<i>one</i>" });
var one_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<i>one</i>");
	return input.a + "!";
});

// tags/two.marko
_shells({ c: "c,<b>two</b>" });
var two_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<b>two</b>");
	return input.a + "?";
});

// template.marko
_shells({ a: "a;b1;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_a = _write_guard($scope0_reason, 0), $ui__input_which__OR__input_a = _unfilled_if($scope0_reason, 0), $fg__input_which = _filled_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.which ? one_default : two_default, { a: input.a }, 1, 0, 0, $wg__input_which__OR__input_a, $scope0_reason, 0);
	_patch_render($scope0_id, "a0", (($fg__input_which ? " e" : "") + ($fg__input_a ? " f" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && $ui__input_which__OR__input_a && input.which,
		f: _write_if($scope0_reason, 1) && $ui__input_which__OR__input_a && input.a
	}) || ($fg__input_which && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.which, !_server_guard($scope0_reason, 1)), $fg__input_a && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 2)));
}, 1);
