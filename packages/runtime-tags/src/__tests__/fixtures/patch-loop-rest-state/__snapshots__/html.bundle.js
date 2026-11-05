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
	_for_of(input.items, ({ id, ...rest }) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xe", rest, !$sg__input_items);
		_html(`<p>${_text_mark($scope1_id, "a", id + ":" + Object.keys(rest).join("+") + "#0")}</p>`);
		_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 0) && "e");
		_scope($scope1_id, {
			M: id,
			e: rest,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item.id, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, { f: count });
}, 1);
