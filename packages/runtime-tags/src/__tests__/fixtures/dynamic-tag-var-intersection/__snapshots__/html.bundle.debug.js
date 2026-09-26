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
	_html(`<span>${_text_resume($scope0_id, "#text/0", n)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let Tag = child_default;
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/0", Tag, {});
	_var($scope0_id, "#scopeOffset/1", $Tag_scope, "__tests__/template.marko_0_v#7/var");
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/3", a + ":" + v?.n)}</button>${_el_resume($scope0_id, "#button/2")}<button class=toggle></button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		a,
		Tag,
		v,
		v_n: v?.n
	}, "__tests__/template.marko", 0, {
		a: "2:6",
		Tag: "3:6",
		v: "4:9",
		v_n: ["v.n", "4:9"]
	});
}, 1);
