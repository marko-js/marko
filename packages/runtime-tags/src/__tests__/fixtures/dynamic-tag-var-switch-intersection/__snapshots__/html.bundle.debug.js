// tags/one.marko
var one_default = _template("__tests__/tags/one.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $return = { n };
	return $return;
});

// tags/two.marko
var two_default = _template("__tests__/tags/two.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	const $return = { n };
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let Tag = one_default;
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/0", Tag, {});
	_var($scope0_id, "#scopeOffset/1", $Tag_scope, "__tests__/template.marko_0_v#8/var");
	_html(`<button class=swap>${_text_resume($scope0_id, "#text/3", a + ":" + v?.n)}</button>${_el_resume($scope0_id, "#button/2")}<button class=clear></button>${_el_resume($scope0_id, "#button/4")}<button class=mount></button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		a,
		Tag,
		v_n: v?.n
	}, "__tests__/template.marko", 0, {
		a: "3:6",
		Tag: "4:6",
		v_n: ["v.n", "5:9"]
	});
}, 1);
