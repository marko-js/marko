// template.marko
const $template = "<main><!><button>toggle</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>toggle</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_resume($scope1_id, "#text/0", input.title)}</b>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<i>${_text_resume($scope2_id, "#text/0", input.title)}</i>`);
			_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		on
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		on: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, 0);
