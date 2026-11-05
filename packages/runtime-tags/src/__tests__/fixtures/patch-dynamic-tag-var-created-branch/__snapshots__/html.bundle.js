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
_shells({
	a: "a; ;<main></main>",
	a2: "a2;b1bD ;<!><!><p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $fg__input_which = _filled_guard($scope0_reason, 5), $fg__input_a = _filled_guard($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputwhichonetwo_scope = _peek_scope_id();
			let x = _dynamic_tag($scope1_id, "a", input.which ? one_default : two_default, { a: input.a }, 1, 0, 0, 1, $scope0_reason, 2, 0, void 0, 0, "a0");
			_var($scope1_id, "b", $inputwhichonetwo_scope, "a0");
			_html(`<p>${_text_mark($scope1_id, "c", x)}</p>`);
			_patch_render($scope1_id, "a1", [_filled_guard($scope0_reason, 5) && ">e", _filled_guard($scope0_reason, 6) && ">f"], $scope0_reason, 2);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 4);
	_html(`</main>${_el_mark($scope0_id, "a", $wg__input_show)}`);
	$fg__input_which && $cg__input_show && _patch_render($scope0_id, "a3", "e");
	$fg__input_a && $cg__input_show && _patch_render($scope0_id, "a4", "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.which,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.a
	}) || ($fg__input_which && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.which, !_server_guard($scope0_reason, 5)), $fg__input_a && _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.a, !_server_guard($scope0_reason, 6)));
}, 1);
