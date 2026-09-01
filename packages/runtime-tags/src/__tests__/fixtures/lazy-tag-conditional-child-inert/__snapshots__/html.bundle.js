// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "a", input.label, _serialize_guard($scope0_reason, 1))}: ${_text_resume($scope0_id, "b", input.value, _serialize_guard($scope0_reason, 2) * 2)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>Inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(10);
			const $childScope = _peek_scope_id();
			$Child_withLoadAssets({
				label: "x",
				value: count
			});
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: count });
	_resume_branch($scope0_id);
}, 1);
