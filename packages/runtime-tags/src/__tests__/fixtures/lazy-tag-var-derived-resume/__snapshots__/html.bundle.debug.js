// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>n ${_text_resume($scope0_id, "#text/0", n, 2)}</p>`);
	const $return = _resume(() => n++, "__tests__/child.marko_0/_return", $scope0_id);
	_scope($scope0_id, { n }, "__tests__/child.marko", 0, { n: "1:6" });
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let api = $Child_withLoadAssets({});
	_var($scope0_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_0_api#5/var");
	const actions = { api };
	const inc = _resume(function() {
		api();
	}, "__tests__/template.marko_0/inc", $scope0_id);
	_html(`<button class=actions>inc</button>${_el_resume($scope0_id, "#button/3")}<button class=inc>inc</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0_inc#7");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		inc,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		api: "3:8",
		actions: "4:8",
		inc: "5:8"
	});
	_var_scope($childScope, $scope0_id, {
		api,
		actions
	});
}, 1);
