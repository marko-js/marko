// tags/child/index.marko
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = 1;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let data1 = child_default({});
	const $inputshowchild_scope = _peek_scope_id();
	let data2 = _dynamic_tag($scope0_id, "#text/2", input.show && child_default, {});
	_var($scope0_id, "#scopeOffset/3", $inputshowchild_scope, "__tests__/template.marko_0_data2/var");
	const $inputdynamic_scope = _peek_scope_id();
	let data3 = _dynamic_tag($scope0_id, "#text/4", input.dynamic, {});
	_var($scope0_id, "#scopeOffset/5", $inputdynamic_scope, "__tests__/template.marko_0_data3/var");
	const $inputshowdiv_scope = _peek_scope_id();
	let el1 = _dynamic_tag($scope0_id, "#text/6", input.show && "div", {});
	_var($scope0_id, "#scopeOffset/7", $inputshowdiv_scope, "__tests__/template.marko_0_el1/var");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
