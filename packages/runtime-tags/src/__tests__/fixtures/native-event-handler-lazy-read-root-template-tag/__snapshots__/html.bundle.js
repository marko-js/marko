// tags/child.marko
var Box = class {
	constructor(n) {
		this.n = n;
	}
};
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $return = {
		n,
		fmt: _resume((strings, value) => strings.join(String(value + n)), "b0", $scope0_id),
		Box: _resume((v) => new Box(v), "b1")
	};
	_scope($scope0_id, { a: n });
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	let api = child_default({});
	_html(`<button class=whole>whole</button>${_el_mark($scope0_id, "c")}`);
	{
		const $scope1_id = _scope_id();
		_html(`<button class=tag>tag</button>${_el_mark($scope1_id, "a")}<button class=new>new</button>${_el_mark($scope1_id, "b")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}
	_html(`<div class=log>${_text_mark($scope0_id, "e", log)}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { h: api });
}, 1);
