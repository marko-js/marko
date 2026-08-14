// template.marko
_shells({ "__tests__/template.marko_1*shell": ",`__tests__/template.marko_1*shell;b%;<!><!><!>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_inner__closures = new Set();
	_html$1("<main>");
	_if$1(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", input.outer, (outer) => {
				const $scope2_id = _scope_id();
				const $await_content__outer__closures = new Set();
				_await($scope2_id, "#text/0", input.inner, (inner) => {
					const $scope3_id = _scope_id();
					_html$1(`<em>${_patch_text($scope3_id, "#text/0", outer, $scope0_owned, 4)}${_el_resume($scope3_id, "#text/0")}:<!>${_patch_text($scope3_id, "#text/1", inner, $scope0_owned, 5)}${_el_resume($scope3_id, "#text/1")}</em>`);
					_subscribe($scope0_reason && $await_content__outer__closures, writeScope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"));
					_resume_branch($scope3_id);
				});
				$scope0_reason && _subscribe(_source_if($scope0_reason, 5) && $input_inner__closures, writeScope($scope2_id, {
					outer,
					_: _scope_with_id($scope1_id),
					"ClosureScopes:outer": $await_content__outer__closures
				}, "__tests__/template.marko", "3:6", { outer: "3:12" }));
				_resume_branch($scope2_id);
			}, _source_guard($scope0_reason, 2), "__tests__/template.marko_1_#text#0/await");
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"]);
	_html$1(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		input_outer: input.outer,
		input_inner: input.inner,
		"ClosureScopes:input_inner": $input_inner__closures
	}, "__tests__/template.marko", 0, {
		input_outer: ["input.outer"],
		input_inner: ["input.inner"]
	});
}, 1, 0);
