// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = "hello";
	_html("<input");
	_attrs_content({
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "a0", $scope0_id)
	}, "a", $scope0_id, "input");
	_html(`</input>${_el_mark($scope0_id, "a")}<span>${_text_mark($scope0_id, "b", value)}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
