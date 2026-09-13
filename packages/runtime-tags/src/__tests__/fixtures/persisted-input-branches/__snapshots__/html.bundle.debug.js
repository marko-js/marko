// template.marko
const $template = "<div class=wrap><h1>Hello <!></h1><!><!></div>";
const $walks = "Eb%l%b%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;Eb%l%b%;<div class=wrap><h1>Hello <!></h1><!><!></div>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,<p>shown</p>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<li> </li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1), $sg__input_items = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<div class=wrap><h1>Hello ${_patch_text($scope0_id, "#text/0", input.name, 2, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<p>shown</p>");
			$scope0_page && _scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "#text/0", item, void 0, $scope0_reason, 2)}</li>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
	}, 0, $scope0_id, "#text/2", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 2);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
