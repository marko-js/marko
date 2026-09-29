// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const [{ valueChange: $valueChange, value }] = [{
		value: count,
		valueChange: _resume(function(v) {
			count = v;
		}, "a0", $scope0_id)
	}];
	_html(`<button>${_text_resume($scope0_id, "b", value)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: value,
		g: $valueChange
	});
}, 1);
