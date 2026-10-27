// tags/one.marko
const $template$2 = "<i>one</i>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/one.marko": "^__tests__/tags/one.marko,<i>one</i>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<i>one</i>");
	const $return = input.a + "!";
	return $return;
});

// tags/two.marko
const $template$1 = "<b>two</b>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/two.marko": "^__tests__/tags/two.marko,<b>two</b>" });
var two_default = _template("__tests__/tags/two.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<b>two</b>");
	const $return = input.a + "?";
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b1c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b1;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_a = _write_guard($scope0_reason, 0), $cg__input_a = _client_guard($scope0_reason, 2), $cg__input_which = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = _dynamic_tag($scope0_id, "#text/0", input.which ? one_default : two_default, { a: input.a }, 1, 0, 0, $wg__input_which__OR__input_a, $scope0_reason, 0, void 0, void 0, void 0, 1);
	$scope0_page ? _scope($scope0_id, {
		input_which: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		input_a: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.a
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_a: ["input.a"]
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_a && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.which, !_server_guard($scope0_reason, 1)), $cg__input_a && _content_withhold(input.which), _filled_guard($scope0_reason, 2) && $cg__input_which && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.a, !_server_guard($scope0_reason, 2)), $cg__input_which && _content_withhold(input.a));
}, 1);
