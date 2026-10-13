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
const $template = "<!><!><!>";
const $walks = "b1c";
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b1;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_a = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let x = _dynamic_tag($scope0_id, "#text/0", input.which ? one_default : two_default, { a: input.a }, 0, 0, $wg__input_which__OR__input_a, 1, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "PatchWrite:input_which", input.which, 1);
	_patch_write($scope0_id, "PatchWrite:input_a", input.a, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/template.marko_0_input_which#4_input_a#5/init");
	$scope0_page ? _scope($scope0_id, {
		input_which: _write_if($scope0_reason, 2) && input.which,
		input_a: _write_if($scope0_reason, 1) && input.a
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_a: ["input.a"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.which), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.a));
}, 1);
