// template.marko
_shells({ a: "a !a1; b ;<button>drop</button><ul></ul>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	_html(`<button>drop</button>${_el_mark($scope0_id, "a")}<ul>`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.id)}: ${_text_mark($scope1_id, "b", input.label, $wg__input_label * 2)}</li>`);
		_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
		_scope($scope1_id, {});
	}, "id", $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a1");
	$fg__input_label && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.label,
		f: items
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
