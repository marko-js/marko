// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_b = _source_guard($scope0_reason, 1), $sg__input_a = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = new Set();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _if(() => {
				if (input.a) {
					const $scope2_id = _scope_id();
					if ($scope0_reason) _if(() => {
						if (input.b) {
							const $scope3_id = _scope_id();
							_html("<p>both</p>");
							$scope0_reason && writeScope($scope3_id, {}, "__tests__/template.marko", "5:8");
							return 0;
						}
					}, $scope2_id, "#text/0", $sg__input_b, $sg__input_b, $sg__input_b, 0, 1);
					_subscribe(_source_if($scope0_reason, 1) && $input_b__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__input_a, $sg__input_a, $sg__input_a);
			writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_a: input.a,
		input_b: input.b,
		open,
		"ClosureScopes:input_b": $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"],
		open: "1:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.a), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/template.marko1", input.b));
	_resume_branch($scope0_id);
}, 1, 0);
