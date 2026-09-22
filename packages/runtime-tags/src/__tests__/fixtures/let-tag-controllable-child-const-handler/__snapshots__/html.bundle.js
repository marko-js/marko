// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = input.value;
	_html(`<button>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: _serialize_if($scope0_reason, 1) && input.value,
		f: _serialize_if($scope0_reason, 0) && input.valueChange,
		i: input.valueChange || void 0
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let out = "-";
	child_default({
		value: 1,
		valueChange: _resume((next) => {
			out = String(next);
		}, "a0", $scope0_id)
	});
	_html(`<p id=out>${_text_resume($scope0_id, "b", out)}</p>`);
	_scope($scope0_id, {});
}, 1);
