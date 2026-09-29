// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const [{ valueChange: $valueChange, value }] = [{
		value: count,
		valueChange: _resume(function(v) {
			count = v;
		}, "__tests__/template.marko_0/value", $scope0_id)
	}];
	_html(`<button>${_text_resume($scope0_id, "#text/1", value)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_value#5_$valueChange#6");
	_scope($scope0_id, {
		value,
		$valueChange
	}, "__tests__/template.marko", 0, {
		value: "2:11",
		$valueChange: "3:21"
	});
}, 1);
