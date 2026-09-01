// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(_text_resume($scope0_id, "#text/0", JSON.stringify(input), _serialize_guard($scope0_reason, 0) * 2));
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_serialize_guard($scope0_reason, 0));
	let $item;
	forUntil(1, 0, 1, (i) => {
		$item = attrTags($item, { value: i });
	});
	const $childScope = _peek_scope_id();
	child_default({
		...input,
		item: $item
	});
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
