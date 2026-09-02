// tags/counter-box/index.marko
_shells({ b: "b !;Db%;<span>box <!></span>" });
var counter_box_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = input.start;
	_html(`<span>box ${_text_resume($scope0_id, "a", count, 2)}</span>`);
	const $return = count;
	_patch_bind($scope0_id, "U", _resume(function(v) {
		count = v;
	}, "b0", $scope0_id) || void 0);
	_patch_value($scope0_id, "b0", count, 1);
	$scope0_reason && _scope($scope0_id, { U: _resume(function(v) {
		count = v;
	}, "b0", $scope0_id) || void 0 });
	_resume_branch($scope0_id);
	return $return;
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let count = counter_box_default({ start: 1 });
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<p>${_text_resume($scope0_id, "c", count)}</p><button>+</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {
		e: count,
		a: _existing_scope($childScope)
	});
}, 1, () => [counter_box_default]);
