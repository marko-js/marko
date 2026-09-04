// template.marko
const $template = "<main><h2> </h2><!><button>toggle</button></main>";
const $walks = "E l%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b ;<main><h2> </h2><!><button>toggle</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	const label = input.no + "!";
	_html(`<main><h2>${_patch_text($scope0_id, "#text/0", input.yes, void 0, $scope0_owned, 1)}</h2>`);
	if ($scope0_reason) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "#text/0", input.yes)}</b>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<i>${_text_resume($scope2_id, "#text/0", label)}</i>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "8:4");
			return 1;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_yes: input.yes,
		on,
		label
	}, "__tests__/template.marko", 0, {
		input_yes: ["input.yes"],
		on: "1:6",
		label: "2:8"
	}) : (_owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko0", input.yes), _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko1", label));
}, 1, 0);
