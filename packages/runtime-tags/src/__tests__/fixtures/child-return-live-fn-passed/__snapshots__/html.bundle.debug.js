// tags/make.marko
var make_default = _template("__tests__/tags/make.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = _resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "__tests__/tags/make.marko_0/_return", $scope0_id);
	_scope($scope0_id, { input_title: input.title }, "__tests__/tags/make.marko", 0, { input_title: ["input.title"] });
	return $return;
});

// tags/reader.marko
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "#button/0")}<pre></pre>${_el_resume($scope0_id, "#pre/1")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_input_fn#4");
	_scope($scope0_id, { input_fn: input.fn }, "__tests__/tags/reader.marko", 0, { input_fn: ["input.fn"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	const $childScope = _peek_scope_id();
	let fn = make_default({ title: input.title });
	$wi__input_title && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_fn#7/var");
	const $childScope2 = _peek_scope_id();
	reader_default({ fn });
	_html(`<button class=other>o</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		"#childScope/0": $wi__input_title && _existing_scope($childScope),
		"#childScope/2": $wi__input_title && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
