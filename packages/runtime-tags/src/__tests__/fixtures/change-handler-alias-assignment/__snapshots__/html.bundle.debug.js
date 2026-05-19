// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { fooChange: $fooChange, foo: bar } = {
		foo: 1,
		fooChange: _resume(function(v) {
			(($btn) => $btn())(_el_read_error).textContent = v;
		}, "__tests__/template.marko_0/fooBar", $scope0_id)
	};
	_html(`<button>Before</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_$fooChange");
	writeScope($scope0_id, { $fooChange }, "__tests__/template.marko", 0, { $fooChange: "9:3" });
}, 1);
