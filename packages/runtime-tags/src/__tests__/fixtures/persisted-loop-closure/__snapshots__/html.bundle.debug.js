// template.marko
_renderer_shells({ "__tests__/template.marko_1*shell": ",`__tests__/template.marko_1*shell __tests__/template.marko_1_boost#5/init;D bD ;<li> <span> </span></li>`" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let boost = 0;
	_html("<ul>");
	_for_of(input.labels, (label) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", label, $scope0_owned, 0)}${_el_resume($scope1_id, "#text/0")}<span>${_escape(boost)}${_el_resume($scope1_id, "#text/1")}</span></li>`);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#ul/0", 1, 1, _source_guard($scope0_reason, 0), void 0, void 0, "__tests__/template.marko_1*shell");
	_html(`</ul>${_el_resume($scope0_id, "#ul/0")}<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, { boost }, "__tests__/template.marko", 0, { boost: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
