// tags/greet/index.marko
var greet_default = _template_persisted("__tests__/tags/greet/index.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const double = input.n * 2;
	_html(`<span>${_patch_text($scope0_id, "#text/0", $global().locale)}${_el_resume($scope0_id, "#text/0")}</span>`);
	const $return = double;
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/tags/greet/index.marko", 0);
	return $return;
}, 0, 1);

// template.marko
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	const $childScope = _peek_scope_id();
	_set_serialize_reason(2);
	let d = greet_default({ n: count });
	_patch_child($scope0_id, "#childScope/0", $childScope);
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_d/var");
	_html(`<p>${_escape(d)}${_el_resume($scope0_id, "#text/2")}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && writeScope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1, () => [greet_default]);
