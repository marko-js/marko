// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (count > 1) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _for_of(input.items, (item) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", item)}</p>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "4:6");
			}, 0, $scope1_id, "#text/0", $sg__input_items, $sg__input_items, $sg__input_items, 0, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_items: input.items,
		count
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.items);
	_resume_branch($scope0_id);
}, 1, 0);
