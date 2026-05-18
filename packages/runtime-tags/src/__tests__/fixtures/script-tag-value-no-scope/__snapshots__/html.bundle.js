// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const setText = _resume(function(arg) {
		if (arg) throw new Error(`Expected no argument to be passed, but received "${typeof arg}".`);
		((el) => el())(_el_read_error).textContent = typeof arg;
	}, "a0", $scope0_id);
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { b: setText });
}, 1);
