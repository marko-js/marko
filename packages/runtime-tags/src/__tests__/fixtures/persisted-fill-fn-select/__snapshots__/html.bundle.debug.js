// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	const pick = input.upper ? up : low;
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<p>${_escape(pick())}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		input_upper: input.upper,
		up,
		low,
		pick,
		open
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_upper: ["input.upper"],
		up: "1:8",
		low: "2:8",
		pick: "3:8",
		open: "4:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", pick), _owned_guard($scope0_owned, 1) && _patch_write($scope0_id, "input_title", input.title));
	_resume_branch($scope0_id);
}, 1, 0);
