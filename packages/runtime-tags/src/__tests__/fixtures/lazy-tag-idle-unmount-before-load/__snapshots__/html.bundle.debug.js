// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "__tests__/child.marko_0");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", [{
	type: "idle",
	options: { timeout: 100 }
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let value = 0;
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			$Child_withLoadAssets({ value });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html(`<button id=inc>Inc</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		show,
		value
	}, "__tests__/template.marko", 0, {
		show: "3:6",
		value: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
