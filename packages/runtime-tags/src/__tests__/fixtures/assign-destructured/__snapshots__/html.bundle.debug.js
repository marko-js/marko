// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = 0;
	const { fooChange: $fooChange, foo } = {
		foo: 1,
		fooChange: _resume(function(v) {
			bar = v;
		}, "__tests__/template.marko_0/foo", $scope0_id)
	};
	_html(`<button>${_escape(foo)}:<!>${_escape(bar)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_$fooChange");
	writeScope($scope0_id, {
		bar,
		$fooChange
	}, "__tests__/template.marko", 0, {
		bar: "1:5",
		$fooChange: "9:20"
	});
	_resume_branch($scope0_id);
}, 1);
