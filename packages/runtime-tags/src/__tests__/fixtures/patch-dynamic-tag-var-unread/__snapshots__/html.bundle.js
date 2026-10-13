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
_shells({ a: "a !;b1;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_a = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.which ? one_default : two_default, { a: input.a }, 0, 0, $wg__input_which__OR__input_a, void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "we", input.which, 1);
	_patch_write($scope0_id, "wf", input.a, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.which,
		f: _write_if($scope0_reason, 1) && input.a
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va0", input.which), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va1", input.a));
}, 1);
