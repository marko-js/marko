// tags/cell/index.marko
var cell_default = _template("__tests__/tags/cell/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=cell>${_escape(input.value)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/cell/index.marko", 0);
});

// tags/row/index.marko
var row_default = _template("__tests__/tags/row/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=row>");
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 1));
	cell_default({ value: input.name });
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 2));
	cell_default({ value: input.quantity });
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		"#childScope/0": _serialize_if($scope0_reason, 1) && _existing_scope($childScope),
		"#childScope/1": _serialize_if($scope0_reason, 2) && _existing_scope($childScope2)
	}, "__tests__/tags/row/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let quantity = 2;
	_html(`<button>add</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason(10);
	row_default({
		name: "Widget",
		quantity
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		quantity,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { quantity: "1:6" });
	_resume_branch($scope0_id);
}, 1);
