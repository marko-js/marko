// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<p>n ${_text_resume($scope0_id, "#text/0", n, 2)}</p>`);
	const $return = {
		count: n,
		inc: _resume(() => n++, "__tests__/child.marko_0/_return", $scope0_id)
	};
	_scope($scope0_id, { n }, "__tests__/child.marko", 0, { n: "1:6" });
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { count, inc } = $Child_withLoadAssets({});
	_var($scope0_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_0_$pattern#11/var");
	const $inputshow$Child_withLoadAssets_scope = _peek_scope_id();
	let { count: dynamicCount, inc: dynamicInc } = _dynamic_tag($scope0_id, "#text/3", input.show && $Child_withLoadAssets, {});
	_var($scope0_id, "#scopeOffset/4", $inputshow$Child_withLoadAssets_scope, "__tests__/template.marko_0_$pattern2#14/var");
	_html(`<button class=inc>inc</button>${_el_resume($scope0_id, "#button/5")}<div class=count>${_text_resume($scope0_id, "#text/6", count)} ${_text_resume($scope0_id, "#text/7", dynamicCount, 2)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0_inc#13_dynamicInc#16");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0, {
		inc: "3:17",
		dynamicInc: "4:53"
	});
	_var_scope($childScope, $scope0_id, { inc });
	_var_scope($inputshow$Child_withLoadAssets_scope, $scope0_id, { dynamicInc });
}, 1);
