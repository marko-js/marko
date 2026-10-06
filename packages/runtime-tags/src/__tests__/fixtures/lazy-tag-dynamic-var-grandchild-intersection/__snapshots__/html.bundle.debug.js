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
	_html(`<button class=mount>mount</button>${_el_resume($scope0_id, "#button/0")}`);
	const $mounted$Child_withLoadAssetsnull_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/1", mounted ? $Child_withLoadAssets : null, {});
	_var($scope0_id, "#scopeOffset/2", $mounted$Child_withLoadAssetsnull_scope, "__tests__/template.marko_0_v#7/var");
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/4", a + ":" + v?.n)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		a,
		v,
		v_n: v?.n
	}, "__tests__/template.marko", 0, {
		a: "2:6",
		v: "5:28",
		v_n: ["v.n", "5:28"]
	});
}, 1);
