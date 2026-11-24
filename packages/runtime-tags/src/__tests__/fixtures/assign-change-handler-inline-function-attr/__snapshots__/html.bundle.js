// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "v";
	return {
		value,
		valueChange: _resume(function(next) {
			value = next;
		}, "b0", $scope0_id)
	};
});

// tags/runner/index.marko
var runner_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button${_attr_class(input.class)}>run</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { c: input });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=show>show</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_if(() => {}, $scope0_id, "c");
	_script($scope0_id, "a2");
	_scope($scope0_id, {});
}, 1);
