// tags/one.marko
const $template$2 = "<i>one</i>";
const $walks$2 = "b";
_shells({ "__tests__/tags/one.marko": "__tests__/tags/one.marko,<i>one</i>" });
var one_default = _template_persisted("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<i>one</i>");
	const $return = input.a + "!";
	return $return;
}, 0, 0);

// tags/two.marko
const $template$1 = "<b>two</b>";
const $walks$1 = "b";
_shells({ "__tests__/tags/two.marko": "__tests__/tags/two.marko,<b>two</b>" });
var two_default = _template_persisted("__tests__/tags/two.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<b>two</b>");
	const $return = input.a + "?";
	return $return;
}, 0, 0);

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b1bD l";
_shells({ "__tests__/template.marko": "__tests__/template.marko;b1bD ;<!><!><p> </p>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $tag = input.which ? one_default : two_default;
	const $input2 = { a: input.a };
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, "__tests__/template.marko_0_x#8/var", $scope0_owned, 0);
	const $inputwhichonetwo_scope = _peek_scope_id();
	let x = _dynamic_tag($scope0_id, "#text/0", $tag, $input2, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $inputwhichonetwo_scope, "__tests__/template.marko_0_x#8/var");
	_html(`<p>${_patch_text($scope0_id, "#text/2", x, void 0, $scope0_owned, 0)}</p>`);
	$scope0_reason && _scope($scope0_id, {
		input_which: input.which,
		input_a: input.a
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_a: ["input.a"]
	});
}, 1, 1);
