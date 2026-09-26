// template.marko
const $template = "<button>drop</button><ul></ul>";
const $walks = " b b";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b ;<button>drop</button><ul></ul>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	_html(`<button>drop</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.id)}: ${_text_resume($scope1_id, "#text/1", input.label, $sg__input_label * 2)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, "id", $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		items
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		items: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.label);
}, 1, 0);
