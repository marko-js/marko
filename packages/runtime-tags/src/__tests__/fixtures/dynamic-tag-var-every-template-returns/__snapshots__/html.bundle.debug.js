// tags/a.marko
var a_default = _template("__tests__/tags/a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>a</span>");
	const $return = "a";
	return $return;
});

// tags/b.marko
var b_default = _template("__tests__/tags/b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>b</span>");
	const $return = "b";
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let isA = true;
	const $isAAB_scope = _peek_scope_id();
	let value = _dynamic_tag($scope0_id, "#text/0", isA ? a_default : b_default, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $isAAB_scope, "__tests__/template.marko_0_value#5/var");
	_html(`<button>${_text_resume($scope0_id, "#text/3", value)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { isA }, "__tests__/template.marko", 0, { isA: "4:6" });
}, 1);
