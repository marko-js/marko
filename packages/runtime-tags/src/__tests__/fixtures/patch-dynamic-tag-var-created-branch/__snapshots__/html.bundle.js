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
	a0: "a0;b1bD ;<!><!><p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputwhichonetwo_scope = _peek_scope_id();
			let x = _dynamic_tag($scope1_id, "a", input.which ? one_default : two_default, { a: input.a }, void 0, void 0, void 0, "a1", 1, $scope0_reason, 2);
			_var($scope1_id, "b", $inputwhichonetwo_scope, "a1", void 0, 1);
			_html(`<p>${_text_resume($scope1_id, "c", x)}</p>`);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.which,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.a
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va2", input.which, !_server_guard($scope0_reason, 5)), _client_guard($scope0_reason, 4) && _content_withhold(input.which), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "va3", input.a, !_server_guard($scope0_reason, 6)), _client_guard($scope0_reason, 4) && _content_withhold(input.a));
}, 1);
