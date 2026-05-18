// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { fooChange: $fooChange, foo: bar } = {
		foo: 1,
		fooChange: _resume(function(v) {
			(($btn) => $btn())(_el_read_error).textContent = v;
		}, "a0", $scope0_id)
	};
	_html(`<button>Before</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { c: $fooChange });
}, 1);
