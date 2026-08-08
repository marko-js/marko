// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_title = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let a = false;
	let b = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (a) {
			const $scope1_id = _scope_id();
			if ($scope0_reason) _if(() => {
				if (b) {
					const $scope2_id = _scope_id();
					_html(`<p>${_escape("p:" + input.title)}${_el_resume($scope2_id, "#text/0")}</p>`);
					_subscribe($si__input_title && $input_title__closures, writeScope($scope2_id, {}, "__tests__/template.marko", "5:6"));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
			if ($scope0_reason) _if(() => {
				if (b) {
					const $scope3_id = _scope_id();
					_html(`<span>${_escape("s:" + input.title)}${_el_resume($scope3_id, "#text/0")}</span>`);
					_subscribe($si__input_title && $input_title__closures, writeScope($scope3_id, { "ClosureSignalIndex:input_title": 1 }, "__tests__/template.marko", "8:6"));
					return 0;
				}
			}, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		a,
		b,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		a: "1:6",
		b: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
