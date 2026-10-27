// tags/reader.marko
var reader_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>read</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: input });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let shown = "";
	const $childScope = _peek_scope_id();
	reader_default({
		read: _resume(() => input.label, "a0", $scope0_id),
		onRead: _resume(function(v) {
			shown = v;
		}, "a1", $scope0_id),
		opt: attrTag({ v: input.label })
	});
	_html(`<p>${_text_resume($scope0_id, "b", shown)}</p>`);
	_scope($scope0_id, {
		e: input.label,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
}, 1);
