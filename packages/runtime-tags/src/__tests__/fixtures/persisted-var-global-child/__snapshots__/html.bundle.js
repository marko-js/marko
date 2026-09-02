// tags/greet/index.marko
_shells({ b: "b;D ;<span> </span>" });
var greet_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	const double = input.n * 2;
	_html(`<span>${_patch_text($scope0_id, "a", $global$1.locale)}</span>`);
	const $return = double;
	_global_subscribe("b0", $scope0_id);
	$scope0_reason && _scope($scope0_id, {});
	return $return;
}, 0, 1);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let d = greet_default({ n: count });
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<p>${_text_resume($scope0_id, "c", d)}</p><button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1, () => [greet_default]);
