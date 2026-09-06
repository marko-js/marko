// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let start = 0;
	_html("<main>");
	if ($scope0_reason) _for_to(input.end, Math.max(0, start), 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "#text/0", i)}</span>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_end: input.end,
		start
	}, "__tests__/template.marko", 0, {
		input_end: ["input.end"],
		start: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.end);
}, 1, 0);
