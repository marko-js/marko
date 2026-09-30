// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $inputas_scope = _peek_scope_id();
	let el = _dynamic_tag($scope0_id, "a", input.as, {}, _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("child body");
	}, $scope0_id));
	_var($scope0_id, "b", $inputas_scope, "b1");
	const $return = el;
	_scope($scope0_id, {});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = child_default({ as: "section" });
	_var($scope0_id, "b", $childScope, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: v,
		a: _existing_scope($childScope)
	});
}, 1);
