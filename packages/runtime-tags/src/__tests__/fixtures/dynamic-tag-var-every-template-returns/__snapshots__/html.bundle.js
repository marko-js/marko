// tags/a.marko
var a_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>a</span>");
	return "a";
});

// tags/b.marko
var b_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>b</span>");
	return "b";
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let isA = true;
	const $isAAB_scope = _peek_scope_id();
	let value = _dynamic_tag($scope0_id, "a", a_default, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "b", $isAAB_scope, "a0");
	_html(`<button>${_text_resume($scope0_id, "d", value)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { e: isA });
}, 1);
