// tags/a.marko
var a_default = _template("__tests__/tags/a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	const $return = {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "__tests__/tags/a.marko_0/_return", $scope0_id)
	};
	_html(`<span>a:${_text_resume($scope0_id, "#text/0", value, 2)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/a.marko", 0);
	return $return;
});

// tags/b.marko
var b_default = _template("__tests__/tags/b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 10;
	const $return = {
		value,
		valueChange: _resume(function(v) {
			value = v;
		}, "__tests__/tags/b.marko_0/_return", $scope0_id)
	};
	_html(`<span>b:${_text_resume($scope0_id, "#text/0", value, 2)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/b.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputaAB_scope = _peek_scope_id();
	let { valueChange: $valueChange, value } = _dynamic_tag($scope0_id, "#text/0", input.a ? a_default : b_default, {});
	_var($scope0_id, "#scopeOffset/1", $inputaAB_scope, "__tests__/template.marko_0_$pattern#7/var");
	_html(`<button>${_text_resume($scope0_id, "#text/3", value)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_value#8_$valueChange#9");
	_scope($scope0_id, {
		value,
		$valueChange
	}, "__tests__/template.marko", 0, {
		value: "4:23",
		$valueChange: "5:21"
	});
}, 1);
