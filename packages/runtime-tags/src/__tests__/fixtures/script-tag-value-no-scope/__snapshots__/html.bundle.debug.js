// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const setText = _resume(function(arg) {
		if (arg) {
			throw new Error(`Expected no argument to be passed, but received "${typeof arg}".`);
		}
		((el) => el())(_el_read_error).textContent = typeof arg;
	}, "__tests__/template.marko_0/setText", $scope0_id);
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_setText");
	writeScope($scope0_id, { setText }, "__tests__/template.marko", 0, { setText: "2:8" });
}, 1);
