// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let bar = 0;
	const { fooChange: $fooChange, foo } = {
		foo: 1,
		fooChange: _resume(function(v) {
			bar = v;
		}, "a0", $scope0_id)
	};
	_html(`<button>${_escape(foo)}:${_text_resume($scope0_id, "c", bar, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: bar,
		g: $fooChange
	});
}, 1);
