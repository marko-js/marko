// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = 0;
	const obj = {
		foo: 1,
		fooChange: _resume(function(v) {
			bar = v;
		}, "__tests__/template.marko_0/obj", $scope0_id)
	};
	_html(`<button>${_escape(obj.foo)}:${_escape(obj.foo)}:${_text_resume($scope0_id, "#text/3", bar, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_$fooChange#7");
	_scope($scope0_id, {
		bar,
		$fooChange: obj.fooChange
	}, "__tests__/template.marko", 0, {
		bar: "1:5",
		$fooChange: "11:20"
	});
}, 1);
