// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = input.value;
	_html(`<button class=child>${_escape(input.label)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))}: <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0_count");
	writeScope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $load_Child = withAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let value = 0;
	_html(`<button class=parent>Inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (value % 2 === 0) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			$load_Child({
				label: "child",
				value
			});
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0_value");
	writeScope($scope0_id, { value }, "__tests__/template.marko", 0, { value: "4:6" });
	_resume_branch($scope0_id);
}, 1);
