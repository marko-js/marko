// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))}: <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { h: count });
	_resume_branch($scope0_id);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	_html(`<button class=parent>Inc</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (value % 2 === 0) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			$Child_withLoadAssets({
				label: "child",
				value
			});
			writeScope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: value });
	_resume_branch($scope0_id);
}, 1);
