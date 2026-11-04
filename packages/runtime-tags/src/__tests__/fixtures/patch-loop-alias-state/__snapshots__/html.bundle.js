// template.marko
_shells({
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a1: "a1 a4;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 0);
		$fg__input_items && _patch_write($scope1_id, "xd", item.name, !$sg__input_items);
		$fg__input_items && _patch_write($scope1_id, "xe", item.id, !$sg__input_items);
		_html(`<p>${_text_mark($scope1_id, "a", item.name + "/" + item.id + "#0")}</p>`);
		_patch_render($scope1_id, "a0", (($fg__input_items ? " d" : "") + ($fg__input_items ? " e" : "")).slice(1));
		_scope($scope1_id, {
			d: item.name,
			e: item.id,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item.id, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { f: count });
}, 1);
