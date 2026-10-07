// tags/none.marko
var none_default = _template("__tests__/tags/none.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>none</span>");
});

// tags/some.marko
var some_default = _template("__tests__/tags/some.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $return = { n };
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let Tag = some_default;
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/0", Tag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $Tag_scope, "__tests__/template.marko_0_v#5/var");
	_html(`<p>${_text_resume($scope0_id, "#text/2", String(v && v.n))}</p><button></button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
