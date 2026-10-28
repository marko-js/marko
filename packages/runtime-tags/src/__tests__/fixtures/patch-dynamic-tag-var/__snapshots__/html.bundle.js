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
_shells({ a: "a !;b1bD ;<!><!><p> </p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_a = _client_guard($scope0_reason, 2), $cg__input_which = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $inputwhichonetwo_scope = _peek_scope_id();
	let x = _dynamic_tag($scope0_id, "a", input.which ? one_default : two_default, { a: input.a }, 1, 0, 0, 1, $scope0_reason, 0, 0, void 0, 0, "a0");
	_var($scope0_id, "b", $inputwhichonetwo_scope, "a0");
	_html(`<p>${_text_resume($scope0_id, "c", x)}</p>`);
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_a && _patch_fill($scope0_id, "va1", input.which, !_server_guard($scope0_reason, 1)), $cg__input_a && _content_withhold(input.which), _filled_guard($scope0_reason, 2) && $cg__input_which && _patch_fill($scope0_id, "va2", input.a, !_server_guard($scope0_reason, 2)), $cg__input_which && _content_withhold(input.a));
}, 1);
