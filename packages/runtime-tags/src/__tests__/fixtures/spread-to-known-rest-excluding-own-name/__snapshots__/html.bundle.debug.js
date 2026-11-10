// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { rest: x, ...rest } = input;
	_html(`<span${_attrs(rest, "#span/0", $scope0_id, "span")}>${_text_mark($scope0_id, "#text/1", x, _write_guard($scope0_reason, 0))}</span>${_el_mark($scope0_id, "#span/0")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0_rest#5");
	_scope($scope0_id, {}, "__tests__/tags/child.marko", 0, { "EventAttributes:#span/0": ["...rest", "2:10"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = {
		rest: 1,
		a: 2
	};
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	child_default(o);
	_html(`<button>Change</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
