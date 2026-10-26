// template.marko
const $template = "<main><p> </p><!><!></main>";
const $walks = "E l%b%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<s> </s>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<b>static</b>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<i>loading</i>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content,<em>static</em>",
	"__tests__/template.marko": "__tests__/template.marko;E l%b%;<main><p> </p><!><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
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
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", void 0, void 0, 2);
	_try($scope0_id, "#text/2", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<b>static</b>");
	}, void 0, (e) => {
		const $scope4_reason = _scope_reason(), $scope4_page = _page_render();
		const $scope4_id = _scope_id();
		_html(`<s>${_patch_text($scope4_id, "#text/0", e.message)}</s>`);
		$scope4_page && _scope($scope4_id, {}, "__tests__/template.marko", "9:6");
	}, void 0, "__tests__/template.marko_4*content", "__tests__/template.marko_3*content", void 0, 1, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
