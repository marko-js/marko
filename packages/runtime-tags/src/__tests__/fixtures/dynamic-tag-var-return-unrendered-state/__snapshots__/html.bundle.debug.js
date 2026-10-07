// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		set: _resume(function(value) {
			n = value;
		}, "__tests__/tags/child.marko_0/_return", $scope0_id)
	};
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let Tag = child_default;
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/0", Tag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $Tag_scope, "__tests__/template.marko_0_v#6/var");
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/3", v.n)}</button>${_el_resume($scope0_id, "#button/2")}`);
	forUntil(2, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		const $Tag_scope2 = _peek_scope_id();
		let row = _dynamic_tag($scope1_id, "#text/0", Tag, {}, void 0, void 0, void 0, 1);
		_var($scope1_id, "#scopeOffset/1", $Tag_scope2, "__tests__/template.marko_1_row#4/var");
		_html(`<button class=row>${_text_resume($scope1_id, "#text/3", row.n)}</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { row }, "__tests__/template.marko", "5:2", { row: "6:11" });
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { v }, "__tests__/template.marko", 0, { v: "3:9" });
}, 1);
