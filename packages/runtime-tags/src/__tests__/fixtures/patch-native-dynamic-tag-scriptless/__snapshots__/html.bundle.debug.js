// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ; ",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_on__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $tag = input.on ? "section" : "article";
	const $input2 = { class: input.label };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 1));
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:4"));
	}, $scope0_id), 0, $sg__input_on__OR__input_label, _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, "__tests__/template.marko_1*content", 0, $scope0_reason, 0));
	$scope0_page && _scope($scope0_id, {
		input_on: _source_if($scope0_reason, 1) && input.on,
		input_label: input.label,
		"ClosureScopes:input_label": $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_label: ["input.label"]
	});
}, 1, 1);
