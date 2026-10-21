// tags/make.marko
var make_default = _template("__tests__/tags/make.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = _resume(() => input.v, "__tests__/tags/make.marko_0/_return", $scope0_id);
	_scope($scope0_id, { input_v: input.v }, "__tests__/tags/make.marko", 0, { input_v: ["input.v"] });
	return $return;
});

// tags/reader.marko
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p></p>${_el_resume($scope0_id, "#p/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_input#2");
	_scope($scope0_id, { input }, "__tests__/tags/reader.marko", 0, { input: 0 });
});

// tags/pair.marko
var pair_default = _template("__tests__/tags/pair.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_v = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let fn = make_default({ v: input.v });
	$wi__input_v && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/pair.marko_0_fn#6/var");
	const $childScope2 = _peek_scope_id();
	reader_default({ fn });
	$wi__input_v && _scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/tags/pair.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	pair_default({ v });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
