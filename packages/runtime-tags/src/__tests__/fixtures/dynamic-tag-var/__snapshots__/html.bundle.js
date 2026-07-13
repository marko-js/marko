// tags/child/index.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return 1;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({});
	const $inputshowchild_scope = _peek_scope_id();
	_dynamic_tag($scope0_id, "c", input.show && child_default, {});
	_var($scope0_id, "d", $inputshowchild_scope, "a0");
	const $inputdynamic_scope = _peek_scope_id();
	_dynamic_tag($scope0_id, "e", input.dynamic, {});
	_var($scope0_id, "f", $inputdynamic_scope, "a1");
	const $inputshowdiv_scope = _peek_scope_id();
	_dynamic_tag($scope0_id, "g", input.show && "div", {});
	_var($scope0_id, "h", $inputshowdiv_scope, "a2");
	writeScope($scope0_id, {});
}, 1);
