// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let foo = { content: _content("a2", (input) => {
		const $scope1_id = _scope_id();
		const $el = _el($scope1_id, "a1");
		_scope_reason();
		_html(`<button></button>${_el_resume($scope1_id, "a")}`);
		const $return = $el;
		_script($scope1_id, "a3");
		writeScope($scope1_id, { d: input.onClick });
		return $return;
	}, $scope0_id) }.content({ onClick: _resume(function() {
		foo().innerHTML = "clicked";
	}, "a0", $scope0_id) });
	writeScope($scope0_id, { c: foo });
}, 1);
