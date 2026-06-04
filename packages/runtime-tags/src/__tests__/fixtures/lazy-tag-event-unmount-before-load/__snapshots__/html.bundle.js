// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
const $load_Child = withAssets(child_default, "_a", [{
	type: "on-click",
	selector: "#load"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let value = 0;
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			$load_Child({ value });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b");
	_html(`<button id=load>Load</button><button id=inc>Inc</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {
		d: show,
		e: value
	});
	_resume_branch($scope0_id);
}, 1);
