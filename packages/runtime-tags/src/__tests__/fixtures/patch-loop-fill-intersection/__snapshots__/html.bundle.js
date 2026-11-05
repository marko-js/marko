// template.marko
_shells({ a: "a !a1;D b b ;<main><ul></ul><button class=add>+</button><button class=inc>c</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_note = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = ["a"];
	let count = 0;
	_html("<main><ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "a", input.note + item + count)}</li>`);
		_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 0) && ">f");
		_scope($scope1_id, { c: item });
	}, 0, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button class=add>+</button>${_el_mark($scope0_id, "b")}<button class=inc>c</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_note && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: input.note,
		g: items,
		h: count
	}) || $fg__input_note && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 0));
}, 1);
