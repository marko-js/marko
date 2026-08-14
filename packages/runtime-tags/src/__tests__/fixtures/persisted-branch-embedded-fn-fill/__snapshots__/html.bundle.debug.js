// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const api = {
		get: _resume(() => input.title, "__tests__/template.marko_0/api", $scope0_id),
		label: "title"
	};
	let show = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_escape(api.label)}${_el_resume($scope1_id, "#text/0")}: <!>${_escape(api.get())}${_el_resume($scope1_id, "#text/1")}</p>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		api,
		api_label: api.label
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		api: "1:8",
		api_label: ["api.label", "1:8"]
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", api), _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko1", api.label), _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_title", input.title));
	_resume_branch($scope0_id);
}, 1, 0);
