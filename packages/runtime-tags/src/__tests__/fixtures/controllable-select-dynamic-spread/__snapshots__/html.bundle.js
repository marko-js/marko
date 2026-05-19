// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "b";
	const tag = "select";
	_dynamic_tag($scope0_id, "a", "select", {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "a0", $scope0_id)
	}, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<option${_attrs({ value: "a" }, "a", $scope1_id, "option")}>A</option>${_el_resume($scope1_id, "a")}<option${_attrs({ value: "b" }, "b", $scope1_id, "option")}>B</option>${_el_resume($scope1_id, "b")}<option${_attrs({ value: "c" }, "c", $scope1_id, "option")}>C</option>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a2");
		writeScope($scope1_id, {});
	}, $scope0_id));
	_html(`<span>${_escape(value)}${_el_resume($scope0_id, "b")}</span>`);
	writeScope($scope0_id, { d: tag });
	_resume_branch($scope0_id);
}, 1);
