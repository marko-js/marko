// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const opts = input.label ? { label: input.label } : null;
	_html(`<pre></pre>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: opts });
}, 1);
