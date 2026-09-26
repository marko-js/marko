// tags/a.marko
var a_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	const $return = {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "b0", $scope0_id)
	};
	_html(`<span>a:${_text_resume($scope0_id, "a", value, 2)}</span>`);
	_scope($scope0_id, {});
	return $return;
});

// tags/b.marko
var b_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 10;
	const $return = {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "c0", $scope0_id)
	};
	_html(`<span>b:${_text_resume($scope0_id, "a", value, 2)}</span>`);
	_scope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputaAB_scope = _peek_scope_id();
	let { valueChange: $valueChange, value } = _dynamic_tag($scope0_id, "a", input.a ? a_default : b_default, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "b", $inputaAB_scope, "a0");
	_html(`<button>${_text_resume($scope0_id, "d", value)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		i: value,
		j: $valueChange
	});
}, 1);
