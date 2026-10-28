// tags/reader.marko
var reader_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=call>call</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.fn });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const fn = _resume(() => {
		document.getElementById("out").textContent = "v:" + input.title;
	}, "a0", $scope0_id);
	_html("<output id=out></output>");
	const $childScope = _peek_scope_id();
	reader_default({ fn });
	_scope($scope0_id, {
		d: input.title,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
