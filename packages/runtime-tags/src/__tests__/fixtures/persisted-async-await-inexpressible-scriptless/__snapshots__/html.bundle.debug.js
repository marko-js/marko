// tags/widget/index.marko
const $template$1 = "";
const $walks$1 = "";
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko," });
var widget_default = _template_persisted("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $return = input.label;
	return $return;
}, 0, 0);

// template.marko
const $template = "<main></main>";
const $walks = " b";
_shells({ "__tests__/template.marko": "__tests__/template.marko; ;<main></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html$1("<main>");
	_if$1(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(input.value), () => {
				const $scope2_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
				const $childScope = _peek_scope_id();
				_patch_child($scope2_id, "#childScope/0", $childScope);
				let w = widget_default({ label: input.value });
				_var$1($scope2_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_2_w#3/var");
				_html$1(`<em>${_patch_text($scope2_id, "#text/2", w, $scope0_owned, 2)}${_el_resume($scope2_id, "#text/2")}</em>`);
				_subscribe(_source_if($scope0_reason, 2) && $input_value__closures, writeScope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:6"));
				_resume_branch($scope2_id);
			}, 1);
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, [0]);
	_html$1(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		input_value: input.value,
		"ClosureScopes:input_value": $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] });
}, 1, () => [widget_default]);
