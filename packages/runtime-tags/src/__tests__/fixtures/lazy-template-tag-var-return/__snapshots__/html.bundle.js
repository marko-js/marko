// tags/some.marko
var some_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	return { n: 1 };
});

// template.marko
withLoadAssets(some_default, flush, "_b");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = false;
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	const $mounted$Some_withLoadAssets_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "b", mounted, {});
	_var($scope0_id, "c", $mounted$Some_withLoadAssets_scope, "a0");
	_html(`<p>${_text_resume($scope0_id, "d", String(v && v.n))}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
