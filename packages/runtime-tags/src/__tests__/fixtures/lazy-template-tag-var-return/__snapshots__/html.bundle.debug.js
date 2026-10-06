// tags/some.marko
var some_default = _template("__tests__/tags/some.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $return = { n };
	return $return;
});

// template.marko
const $Some_withLoadAssets = withLoadAssets(some_default, flush, "ready:__tests__/tags/some.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = false;
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}`);
	const $mounted$Some_withLoadAssets_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/1", mounted && $Some_withLoadAssets, {});
	_var($scope0_id, "#scopeOffset/2", $mounted$Some_withLoadAssets_scope, "__tests__/template.marko_0_v#5/var");
	_html(`<p>${_text_resume($scope0_id, "#text/3", String(v && v.n))}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
