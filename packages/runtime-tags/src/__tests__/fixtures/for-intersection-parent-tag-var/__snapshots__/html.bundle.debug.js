// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		inc: _resume(function() {
			n++;
		}, "__tests__/tags/counter.marko_0/_return", $scope0_id)
	};
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let v = counter_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#3/var");
	_for_of([1, 2], (item) => {
		const $scope1_id = _scope_id();
		let m = 0;
		const c = v.n + item;
		_html(`<button${_attr_class("row" + item)}>${_text_resume($scope1_id, "#text/1", c + ":" + m)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			item,
			m,
			c,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			item: "2:6",
			m: "3:8",
			c: "4:10"
		});
	}, 0, $scope0_id, "#text/2", 1, 0, 0, 0, 1);
	_scope($scope0_id, {
		v,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { v: "1:10" });
}, 1);
