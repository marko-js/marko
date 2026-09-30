// c.marko
var c_default = _template("__tests__/c.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=c>c:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/c.marko_0");
	_scope($scope0_id, {
		input_objA: input.objA,
		input_objB: input.objB,
		count
	}, "__tests__/c.marko", 0, {
		input_objA: ["input.objA"],
		input_objB: ["input.objB"],
		count: "1:6"
	});
});

// b.marko
const $C_withLoadAssets = withLoadAssets(c_default, "ready:__tests__/c.marko");
var b_default = _template("__tests__/b.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const objB = { name: "b" };
	let count = 0;
	_html(`<button class=b>b:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	$C_withLoadAssets({
		objA: input.objA,
		objB
	});
	_script($scope0_id, "__tests__/b.marko_0");
	_scope($scope0_id, {
		objB,
		count,
		"#childScope/3": _serialize_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/b.marko", 0, {
		objB: "3:8",
		count: "4:6"
	});
});

// a.marko
const $B_withLoadAssets = withLoadAssets(b_default, "ready:__tests__/b.marko");
var a_default = _template("__tests__/a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const objA = { name: "a" };
	let count = 0;
	_html(`<button class=a>a:${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	$B_withLoadAssets({ objA });
	_script($scope0_id, "__tests__/a.marko_0");
	_scope($scope0_id, {
		objA,
		count
	}, "__tests__/a.marko", 0, {
		objA: "3:8",
		count: "4:6"
	});
});

// template.marko
const $A_withLoadAssets = withLoadAssets(a_default, "ready:__tests__/a.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	$A_withLoadAssets({});
}, 1);
