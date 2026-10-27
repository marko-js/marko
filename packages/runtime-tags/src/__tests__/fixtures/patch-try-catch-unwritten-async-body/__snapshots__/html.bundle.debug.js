// template.marko
const $template = "<main><p> </p><!></main>";
const $walks = "E l%l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content,<em>static</em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,<s>caught</s>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await,<em>static</em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><p> </p><!></main>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", $global$1.promise, (v) => {
			const $scope3_id = _scope_id();
			_html("<em>static</em>");
		}, 1, "__tests__/template.marko_3*content");
		_fill_global_subscribe("__tests__/template.marko_1_$global_promise#0:9", $scope1_id);
	}, void 0, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<s>caught</s>");
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", void 0, void 0, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
