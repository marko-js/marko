// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/child.marko", 0);
});

// template.marko
const $load_Child = withAssets(child_default, "ready:__tests__/child.marko", [{
	type: "visible",
	selector: "#target"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	let value = 0;
	_html(`<button id=show>Show</button>${_el_resume($scope0_id, "#button/0")}<button id=inc>Inc</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<div id=target></div>");
			writeScope($scope1_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	$load_Child({ value });
	_script($scope0_id, "__tests__/template.marko_0_value");
	_script($scope0_id, "__tests__/template.marko_0_show");
	writeScope($scope0_id, {
		show,
		value,
		"#childScope/4": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		show: "3:6",
		value: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
