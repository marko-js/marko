// template.marko
let renders = 0;
const $template = "<main><p> </p><h1> </h1><!></main>";
const $walks = "E lD l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E lD l%;<main><p> </p><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D ;<span> </span>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><p>${_patch_text($scope0_id, "#text/0", ++renders, void 0, 0, 0)}</p><h1>${_patch_text($scope0_id, "#text/1", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_patch_text($scope1_id, "#text/0", ++renders, void 0, 0, 0)}</span>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
