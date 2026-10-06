// tags/grand.marko
var grand_default = _template("__tests__/tags/grand.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		set: _resume(function(value) {
			n = value;
		}, "__tests__/tags/grand.marko_0/_return", $scope0_id)
	};
	_html(`<span>${_text_resume($scope0_id, "#text/0", n)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/grand.marko", 0);
	return $return;
});

// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let g = grand_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/child.marko_0_g#2/var");
	const $return = g;
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/child.marko", 0);
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let mounted = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (mounted) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			let v = $Child_withLoadAssets({});
			_var($scope1_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_1_v#5/var");
			_html(`<button class=inc>${_text_resume($scope1_id, "#text/4", a + ":" + v?.n)}</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				v,
				v_n: v?.n,
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2", {
				v: "6:10",
				v_n: ["v.n", "6:10"]
			});
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		a,
		mounted
	}, "__tests__/template.marko", 0, {
		a: "2:6",
		mounted: "3:6"
	});
}, 1);
