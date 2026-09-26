// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = { n };
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let b = 0;
	let Tag = child_default;
	let items = [1, 2];
	const $Tag_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/0", Tag, {});
	_var($scope0_id, "#scopeOffset/1", $Tag_scope, "__tests__/template.marko_0_v#7/var");
	const c = (v ? v.n : 0) + b;
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		let m = 0;
		_html(`<button${_attr_class("row" + item)}>${_text_resume($scope1_id, "#text/1", m + ":" + c)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			m,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "7:2", { m: "8:8" });
	}, 0, $scope0_id, "#text/2", 1, 0, 0, 0, 1);
	_html(`<button class=toggle></button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		b,
		Tag,
		v,
		c
	}, "__tests__/template.marko", 0, {
		b: "2:6",
		Tag: "3:6",
		v: "5:9",
		c: "6:8"
	});
}, 1);
