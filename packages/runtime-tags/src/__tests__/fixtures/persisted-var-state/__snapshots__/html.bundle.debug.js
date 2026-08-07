// tags/doubler/index.marko
var doubler_default = _template_persisted("__tests__/tags/doubler/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const double = input.value * 2;
	_html("<span>x2</span>");
	const $return = double;
	return $return;
}, 0, 0);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	const $childScope = _peek_scope_id();
	_set_serialize_reason(2);
	let double = doubler_default({ value: count });
	_patch_child($scope0_id, "#childScope/0", $childScope);
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_double/var");
	_html(`<p>${_escape(double)}${_el_resume($scope0_id, "#text/2")}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [doubler_default]);
