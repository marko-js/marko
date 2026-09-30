// c.marko
var c_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=c>c:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: input.objA,
		f: input.objB,
		g: count
	});
});

// b.marko
const $C_withLoadAssets = withLoadAssets(c_default, "_c");
var b_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const objB = { name: "b" };
	let count = 0;
	_html(`<button class=b>b:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	$C_withLoadAssets({
		objA: input.objA,
		objB
	});
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		h: objB,
		i: count,
		d: _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	});
});

// a.marko
const $B_withLoadAssets = withLoadAssets(b_default, "_b");
var a_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const objA = { name: "a" };
	let count = 0;
	_html(`<button class=a>a:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	$B_withLoadAssets({ objA });
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: objA,
		f: count
	});
});

// template.marko
const $A_withLoadAssets = withLoadAssets(a_default, "_a");
var template_default = _template("d", (input) => {
	_scope_reason();
	_scope_id();
	$A_withLoadAssets({});
}, 1);
