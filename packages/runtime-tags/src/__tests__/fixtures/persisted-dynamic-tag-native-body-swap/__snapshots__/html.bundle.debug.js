// outer.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/outer.marko": "__tests__/outer.marko;D%;<section><!></section>" });
var outer_default = _template_persisted("__tests__/outer.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/outer.marko", 0);
}, 0, 0);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;body <!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_wrap = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = new Set();
	const $tag = input.wrap ? outer_default : "div";
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, "__tests__/template.marko_1*content", 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`body ${_patch_text($scope1_id, "#text/0", input.x, 2, $scope0_owned, 1)}`);
		_subscribe(_source_if($scope0_reason, 1) && $input_x__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"));
	}, $scope0_id), 0, $sg__input_wrap, 1);
	$scope0_reason && _scope($scope0_id, {
		input_x: input.x,
		"ClosureScopes:input_x": $input_x__closures
	}, "__tests__/template.marko", 0, { input_x: ["input.x"] });
}, 1, 1);
