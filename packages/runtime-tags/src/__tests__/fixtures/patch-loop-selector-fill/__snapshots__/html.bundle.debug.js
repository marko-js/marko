// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_selected = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html("<main><ul>");
	if ($scope0_page) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.id)}`);
		if ($scope0_page) _if(() => {
			if (input.selected === item.id) {
				const $scope2_id = _scope_id();
				_html("<span>*</span>");
				$scope0_page && _scope($scope2_id, {}, "__tests__/template.marko", "5:22");
				return 0;
			}
		}, $scope1_id, "#text/1", $sg__input_selected, $sg__input_selected, $sg__input_selected, 0, 1);
		_html("</li>");
		_scope($scope1_id, { "#LoopKey": _source_if($scope0_reason, 0) && item?.id }, "__tests__/template.marko", "4:6", { "#LoopKey": ["item.id", "4:10"] });
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_selected: input.selected,
		items
	}, "__tests__/template.marko", 0, {
		input_selected: ["input.selected"],
		items: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.selected);
}, 1, 0);
