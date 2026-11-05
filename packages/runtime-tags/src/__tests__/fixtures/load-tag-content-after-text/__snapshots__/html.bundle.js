// child.marko
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_n = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(_text_mark($scope0_id, "a", input.n, $wg__input_n * 2));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html("<div>hello ");
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	$Child_withLoadAssets({ n });
	_html(`</div><button>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: n,
		b: _existing_scope($childScope)
	});
}, 1);
