// template.marko
const $template = "<main><!><!></main>";
const $walks = "D%b%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;D%b%;<main><!><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; D ;<button> </button>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<p> </p>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items__OR__input_items = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_patch_text($scope1_id, "#text/1", item, void 0, $scope0_reason, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
	}, 0, $scope0_id, "#text/0", 1, 1, $sg__input_items__OR__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	_for_of(input.items2, (item) => {
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.title, void 0, $scope0_reason, 3)}</p>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4");
	}, 0, $scope0_id, "#text/1", 1, 1, $sg__input_items__OR__input_items, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 4);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { input_title: input.title }, "__tests__/template.marko", 0, { input_title: ["input.title"] }) : _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "input_title", input.title);
}, 1, 0);
