// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main><div>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_escape(input.title)}${_el_resume($scope1_id, "#text/0")}</p>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:6");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<span>${_patch_text($scope0_id, "#text/1", input.label, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</span><button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		show: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
