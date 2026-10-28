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

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<output id=out></output>");
	const $childScope = _peek_scope_id();
	let fn = make_default({ title: input.title });
	$wi__input_title && _var($scope0_id, "b", $childScope, "a0");
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "c")}<pre></pre>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		h: fn,
		a: $wi__input_title && _existing_scope($childScope)
	});
}, 1);
