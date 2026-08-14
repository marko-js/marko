// tags/badge/index.marko
_shells({ "__tests__/tags/badge/index.marko_1*shell": ",`__tests__/tags/badge/index.marko_1*shell;D ;<b> </b>`" });
var badge_default = _template_persisted("__tests__/tags/badge/index.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.label) {
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "#text/0", input.label, $scope0_owned, 0)}${_el_resume($scope1_id, "#text/0")}</b>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/badge/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_label, $sg__input_label, void 0, void 0, ["__tests__/tags/badge/index.marko_1*shell"]);
	_html(`<i>${_patch_text($scope0_id, "#text/1", input.note, $scope0_owned, 1)}${_el_resume($scope0_id, "#text/1")}</i></div>`);
	$scope0_reason && writeScope($scope0_id, { input_label: input.label }, "__tests__/tags/badge/index.marko", 0, { input_label: ["input.label"] });
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	badge_default({
		label: "hi",
		note: input.title
	});
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [badge_default]);
