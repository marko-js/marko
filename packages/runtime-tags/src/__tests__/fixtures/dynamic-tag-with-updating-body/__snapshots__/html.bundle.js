// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=count>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: count });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let tagName = "div";
	_dynamic_tag($scope0_id, "a", tagName, {}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		counter_default({});
	}, $scope0_id));
	_html(`<button id=changeTag></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { c: tagName });
	_resume_branch($scope0_id);
}, 1);
