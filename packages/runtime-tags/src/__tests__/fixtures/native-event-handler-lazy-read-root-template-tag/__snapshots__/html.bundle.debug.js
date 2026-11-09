// tags/child.marko
var Box = class {
	constructor(n) {
		this.n = n;
	}
};
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $return = {
		n,
		fmt: _resume((strings, value) => strings.join(String(value + n)), "__tests__/tags/child.marko_0/_return", $scope0_id),
		Box: _resume((v) => new Box(v), "__tests__/tags/child.marko_0/_return2")
	};
	_scope($scope0_id, { n }, "__tests__/tags/child.marko", 0, { n: "6:6" });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	let show = true;
	let api = child_default({});
	_html(`<button class=whole>whole</button>${_el_mark($scope0_id, "#button/2")}`);
	if (show) {
		const $scope1_id = _scope_id();
		_html(`<button class=tag>tag</button>${_el_mark($scope1_id, "#button/0")}<button class=new>new</button>${_el_mark($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2");
	}
	_html(`<div class=log>${_text_mark($scope0_id, "#text/4", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { api }, "__tests__/template.marko", 0, { api: "5:8" });
}, 1);
