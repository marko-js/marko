// template.marko
const $template = "<main><p> </p><!><!></main>";
const $walks = "E l%b%l";
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<b>static</b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,<em>static</em>",
	"__tests__/template.marko": "__tests__/template.marko;E l%b%;<main><p> </p><!><!></main>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><p>${_patch_text($scope0_id, "#text/0", input.x, void 0, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html("<em>static</em>");
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content");
	_try($scope0_id, "#text/2", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<b>static</b>");
	}, void 0, (e) => {
		const $scope4_reason = _scope_reason(), $sg__e_message = _source_guard($scope4_reason, 0);
		const $scope4_id = _scope_id();
		_html(`<s>${_text_resume($scope4_id, "#text/0", e.message, $sg__e_message)}</s>`);
		_source_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "9:6");
	}, void 0, "__tests__/template.marko_4*content", "__tests__/template.marko_3*content");
	_html("</main>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
