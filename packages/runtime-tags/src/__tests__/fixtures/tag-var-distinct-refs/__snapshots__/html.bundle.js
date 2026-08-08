// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const box = {
		a: _el($scope0_id, "a0"),
		b: _el($scope0_id, "a1")
	};
	_html(`<div>first</div>${_el_resume($scope0_id, "a")}<div>second</div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { c: box });
}, 1);
