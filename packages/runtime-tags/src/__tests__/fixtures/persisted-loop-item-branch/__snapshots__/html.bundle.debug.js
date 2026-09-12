// template.marko
const $template = "<ul></ul>";
const $walks = " b";
_shells({
	"__tests__/template.marko": "__tests__/template.marko; ;<ul></ul>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;D%b%;<li><!><!></li>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; ;<ul></ul>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<li> </li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", item.id, void 0, $scope0_owned, 0)}`);
		_if(() => {
			if (item.children.length) {
				const $scope2_id = _scope_id();
				_html("<ul>");
				_for_of(item.children, (child) => {
					const $scope3_id = _scope_id();
					_html(`<li>${_patch_text($scope3_id, "#text/0", child, void 0, $scope0_owned, 0)}</li>`);
					_scope($scope3_id, {}, "__tests__/template.marko", "7:12");
				}, 0, $scope2_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_3*shell", $scope0_owned, 0);
				_html(`</ul>${_el_resume($scope2_id, "#ul/0", $sg__input_items)}`);
				$scope0_reason && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:8");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, $sg__input_items, $sg__input_items, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_owned, 0);
		_html("</li>");
		_scope($scope1_id, { item_children: _source_if($scope0_reason, 0) && item?.children }, "__tests__/template.marko", "2:4", { item_children: ["item.children", "2:8"] });
	}, "id", $scope0_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 0);
	_html(`</ul>${_el_resume($scope0_id, "#ul/0", $sg__input_items)}`);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
