// template.marko
const $template = "<!----><!><p> </p><!><button>+</button>";
const $walks = " b%bD l%b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%bD l%b ;<!----><!><p> </p><!><button>+</button>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_on = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<!--${_escape_comment(input.label)} ${_escape_comment(count)}-->${_el_resume($scope0_id, "#comment/0")}`);
	const $show = input.on;
	_show_start($show);
	_html(`<p>${_patch_text($scope0_id, "#text/2", input.label, void 0, $scope0_reason, 0)}</p>`);
	_show_end($scope0_id, "#text/3", $show, $sg__input_on, $sg__input_on, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, 0);
