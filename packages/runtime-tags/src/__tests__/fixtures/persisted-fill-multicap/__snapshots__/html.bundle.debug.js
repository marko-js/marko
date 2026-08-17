// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const fmt = _resume(() => input.a + ":" + input.b, "__tests__/template.marko_0/fmt", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_escape(fmt())}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		fmt,
		open
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		fmt: "1:8",
		open: "2:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", fmt), _owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "input_a", input.a), _owned_guard($scope0_owned, 2) && _patch_write($scope0_id, "input_b", input.b));
	_resume_branch($scope0_id);
}, 1, 0);
