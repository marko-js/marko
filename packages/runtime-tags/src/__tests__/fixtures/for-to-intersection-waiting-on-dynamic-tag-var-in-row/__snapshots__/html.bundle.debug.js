// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = input.v;
	return $return;
});

// tags/other.marko
var other_default = _template("__tests__/tags/other.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = !input.v;
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let useChild = true;
	forOf([0, 1], (outer) => {
		const $scope1_id = _scope_id();
		let l = [
			{ name: "a" },
			{ name: "b" },
			{ name: "c" }
		];
		let short = false;
		const $useChildChildOther_scope = _peek_scope_id();
		let r = _dynamic_tag($scope1_id, "#text/0", useChild ? child_default : other_default, { v: short }, 0, 0, 1, 1);
		_var($scope1_id, "#scopeOffset/1", $useChildChildOther_scope, "__tests__/template.marko_1_r#8/var");
		_for_to(r ? 0 : l.length - 1, 0, 1, (i) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_mark($scope2_id, "#text/0", l[i].name)}</span>`);
			_scope($scope2_id, { "#LoopKey": i }, "__tests__/template.marko", "8:4", { "#LoopKey": "8:8" });
		}, 0, $scope1_id, "#text/2", 1, 1, 0, 0, 1);
		_html(`<button>go</button>${_el_mark($scope1_id, "#button/3")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			l,
			l_length: l?.length,
			r,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:2", {
			l: "5:8",
			l_length: ["l.length", "5:8"],
			r: "7:32"
		});
	});
	_scope($scope0_id, { useChild }, "__tests__/template.marko", 0, { useChild: "3:6" });
}, 1);
