// tags/one.marko
const $template$2 = "<i>one</i>";
const $walks$2 = "b";
_shells({ "__tests__/tags/one.marko": "^__tests__/tags/one.marko,<i>one</i>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<i>one</i>");
	const $return = input.a + "!";
	return $return;
});

// tags/two.marko
const $template$1 = "<b>two</b>";
const $walks$1 = "b";
_shells({ "__tests__/tags/two.marko": "^__tests__/tags/two.marko,<b>two</b>" });
var two_default = _template("__tests__/tags/two.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<b>two</b>");
	const $return = input.a + "?";
	return $return;
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b1bD ;<!><!><p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $inputwhichonetwo_scope = _peek_scope_id();
			let x = _dynamic_tag($scope1_id, "#text/0", input.which ? one_default : two_default, { a: input.a }, void 0, void 0, void 0, "__tests__/template.marko_1_x#4/var", 1, $scope0_reason, 2);
			_var($scope1_id, "#scopeOffset/1", $inputwhichonetwo_scope, "__tests__/template.marko_1_x#4/var", void 0, 1);
			_html(`<p>${_text_resume($scope1_id, "#text/2", x)}</p>`);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 4);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		input_which: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.which,
		input_a: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.a
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_a: ["input.a"]
	}) : (_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.which, !_server_guard($scope0_reason, 5)), _client_guard($scope0_reason, 4) && _content_withhold(input.which), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.a, !_server_guard($scope0_reason, 6)), _client_guard($scope0_reason, 4) && _content_withhold(input.a));
}, 1);
