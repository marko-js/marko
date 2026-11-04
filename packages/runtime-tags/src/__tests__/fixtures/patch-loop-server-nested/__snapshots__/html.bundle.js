// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_list = _write_guard($scope0_reason, 0), $fg__input_list = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_for_of(input.list, (s) => {
			const $scope2_id = _scope_id();
			_html(`<li>${_text_mark($scope2_id, "a", item)}${_text_mark($scope2_id, "b", s, $wg__input_list * 2)}</li>`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, 0, $scope1_id, "a", 1, $wg__input_list, 0, 0, 1);
		_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
		_scope($scope1_id, { c: _write_if($scope0_reason, 0) && item });
	}, 0, $scope0_id, "a");
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_list && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.list,
		f: items
	}) || $fg__input_list && _patch_write($scope0_id, "xe", input.list, !_server_guard($scope0_reason, 0));
}, 1);
