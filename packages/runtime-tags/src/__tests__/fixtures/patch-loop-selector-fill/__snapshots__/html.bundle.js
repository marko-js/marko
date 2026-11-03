// template.marko
_shells({ a: "a !a1;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_selected = _write_guard($scope0_reason, 0), $wi__input_selected = _write_if($scope0_reason, 0), $fg__input_selected = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html("<main><ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.id)}`);
		_if(() => {
			if (input.selected === item.id) {
				const $scope2_id = _scope_id();
				_html("<span>*</span>");
				$wi__input_selected && _scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "b", $wg__input_selected, $wg__input_selected, 0, 0, 1);
		_html("</li>");
		_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
		_scope($scope1_id, { M: $wi__input_selected && item?.id });
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_selected && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.selected,
		f: items
	}) || $fg__input_selected && _patch_write($scope0_id, "xe", input.selected, !_server_guard($scope0_reason, 0));
}, 1);
