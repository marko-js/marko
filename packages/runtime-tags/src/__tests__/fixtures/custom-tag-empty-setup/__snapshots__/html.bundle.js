// tags/cell/index.marko
var cell_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=cell>${_escape(input.value)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/row/index.marko
var row_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=row>");
	_set_serialize_reason(_serialize_guard($scope0_reason, 1));
	const $childScope = _peek_scope_id();
	cell_default({ value: input.name });
	_set_serialize_reason(_serialize_guard($scope0_reason, 2));
	const $childScope2 = _peek_scope_id();
	cell_default({ value: input.quantity });
	_html("</div>");
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {
		a: _serialize_if($scope0_reason, 1) && _existing_scope($childScope),
		b: _serialize_if($scope0_reason, 2) && _existing_scope($childScope2)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let quantity = 2;
	_html(`<button>add</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	row_default({
		name: "Widget",
		quantity
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: quantity,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
