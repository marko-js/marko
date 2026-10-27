// tags/reader.marko
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>read</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0");
	_scope($scope0_id, { input }, "__tests__/tags/reader.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let shown = "";
	const $childScope = _peek_scope_id();
	reader_default({
		read: _resume(() => input.label, "__tests__/template.marko_0/read", $scope0_id),
		onRead: _resume(function(v) {
			shown = v;
		}, "__tests__/template.marko_0/onRead", $scope0_id),
		opt: attrTag({ v: input.label })
	});
	_html(`<p>${_text_resume($scope0_id, "#text/1", shown)}</p>`);
	_scope($scope0_id, {
		input_label: input.label,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
