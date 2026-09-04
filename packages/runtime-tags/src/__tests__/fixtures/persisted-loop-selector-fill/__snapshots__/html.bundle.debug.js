// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html("<main><ul>");
	if ($scope0_reason) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item.id)}`);
		if ($scope0_reason) _if(() => {
			if (input.selected === item.id) {
				const $scope2_id = _scope_id();
				_html("<span>*</span>");
				_scope($scope2_id, {}, "__tests__/template.marko", "5:22");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
		_html("</li>");
		_scope($scope1_id, { item_id: item?.id }, "__tests__/template.marko", "4:6", { item_id: ["item.id", "4:10"] });
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_selected: input.selected,
		items
	}, "__tests__/template.marko", 0, {
		input_selected: ["input.selected"],
		items: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.selected);
}, 1, 0);
