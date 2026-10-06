// tags/grand.marko
var grand_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		set: _resume(function(value) {
			n = value;
		}, "c0", $scope0_id)
	};
	_html(`<span>${_text_resume($scope0_id, "a", n)}</span>`);
	_scope($scope0_id, {});
	return $return;
});

// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let g = grand_default({});
	_var($scope0_id, "b", $childScope, "a0");
	const $return = g;
	_scope($scope0_id, { a: _existing_scope($childScope) });
	return $return;
});

// template.marko
withLoadAssets(child_default, flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	_html(`<button class=mount>mount</button>${_el_resume($scope0_id, "a")}`);
	const $mounted$Child_withLoadAssetsnull_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "b", null, {});
	_var($scope0_id, "c", $mounted$Child_withLoadAssetsnull_scope, "b0");
	_html(`<button class=inc>${_text_resume($scope0_id, "e", "0:" + v?.n)}</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		f: a,
		h: v,
		i: v?.n
	});
}, 1);
