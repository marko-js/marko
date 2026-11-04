// template.marko
_shells({ a: "a !a0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_extra = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = ["a"];
	_html("<main><ul>");
	_for_of(items.concat(input.extra), (entry) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", entry)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_extra && "e");
	_scope($scope0_id, {
		e: input.extra,
		f: items
	}) || $fg__input_extra && _patch_write($scope0_id, "xe", input.extra, !_server_guard($scope0_reason, 0));
}, 1);
