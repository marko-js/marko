// template.marko
const $template = "<main><p><!> <!></p><h1> </h1><!><!></main>";
const $walks = "E%c%lD l%b%l";
let renders = 0;
const names = ["x", "y"];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E%c%lD l%b%;<main><p><!> <!></p><h1> </h1><!><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D%c%l%;<span><!> <!></span><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<i> </i>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<b> </b>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const label = names.join("+");
	_html(`<main><p>${_patch_text($scope0_id, "#text/0", ++renders, void 0, 0, 0)} ${_patch_text($scope0_id, "#text/1", label, 2, 0, 0)}</p><h1>${_patch_text($scope0_id, "#text/2", input.title, void 0, $scope0_reason, 0)}</h1>`);
	_for_of(names, (name) => {
		const $scope2_id = _scope_id();
		_html(`<i>${_patch_text($scope2_id, "#text/0", name, void 0, 0, 0)}</i>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "7:4");
	}, 0, $scope0_id, "#text/3", 1, 1, 0, void 0, void 0, "__tests__/template.marko_2*shell", 0, 0);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_patch_text($scope1_id, "#text/0", ++renders, void 0, 0, 0)} ${_patch_text($scope1_id, "#text/1", label, 2, 0, 0)}</span>`);
			_for_of(names, (name) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_patch_text($scope3_id, "#text/0", name, void 0, 0, 0)}</b>`);
				_scope($scope3_id, {}, "__tests__/template.marko", "10:6");
			}, 0, $scope1_id, "#text/2", 1, 1, 0, void 0, void 0, "__tests__/template.marko_3*shell", 0, 0);
			_scope($scope1_id, {}, "__tests__/template.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#text/4", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, { label: _source_if($scope0_reason, 1) && label }, "__tests__/template.marko", 0, { label: "3:8" });
}, 1, 0);
