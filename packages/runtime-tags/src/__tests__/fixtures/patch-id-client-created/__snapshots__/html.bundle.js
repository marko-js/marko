// template.marko
_shells({ a: "a !a0; b%;<button>add</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_prefix = _write_guard($scope0_reason, 1), $fg__input_prefix = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let items = input.items;
	_html(`<button>add</button>${_el_mark($scope0_id, "a")}`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		const headingId = _id("A");
		_html(`<h2${_attr("id", headingId)}>${_escape(item.key)}</h2><input${_attr("aria-describedby", headingId)}${_attr("title", input.prefix + " " + headingId)}>${_el_mark($scope1_id, "c", $wg__input_prefix)}`);
		_scope($scope1_id, { e: _write_if($scope0_reason, 1) && headingId });
	}, "key", $scope0_id, "b");
	_script($scope0_id, "a0");
	$fg__input_prefix && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		f: input.prefix,
		g: items
	}) || $fg__input_prefix && _patch_write($scope0_id, "xf", input.prefix, !_server_guard($scope0_reason, 1));
}, 1);
