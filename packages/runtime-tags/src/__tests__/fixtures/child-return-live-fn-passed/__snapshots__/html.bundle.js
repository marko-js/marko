// tags/make.marko
var make_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = _resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "b0", $scope0_id);
	_scope($scope0_id, { c: input.title });
	return $return;
});

// tags/reader.marko
var reader_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { e: input.fn });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	const $childScope = _peek_scope_id();
	let fn = make_default({ title: input.title });
	$wi__input_title && _var($scope0_id, "b", $childScope, "a0");
	const $childScope2 = _peek_scope_id();
	reader_default({ fn });
	_html(`<button class=other>o</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		a: $wi__input_title && _existing_scope($childScope),
		c: $wi__input_title && _existing_scope($childScope2)
	});
}, 1);
