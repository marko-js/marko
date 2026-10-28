// template.marko
_shells({ a: "a !a1;D l bD ;<p> </p><input><span> </span>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_resume($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p><input${_attr_input_value($scope0_id, "b", void 0, _resume(function(v) {
		count += v.length;
	}, "a0", $scope0_id))}>${_el_resume($scope0_id, "b")}<span>${_text_resume($scope0_id, "c", count)}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: count });
}, 1);
