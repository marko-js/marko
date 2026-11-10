// template.marko
_shells({ a: "a !a1;E l ;<main><h1> </h1><input></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_value__OR__input_wire = _unfilled_if($scope0_reason, 0), $ui__input_wire = _unfilled_if($scope0_reason, 3), $fg__input_value = _filled_guard($scope0_reason, 2), $fg__input_wire = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const handler = _resume((next) => {
		document.querySelector("main").dataset.got = next;
	}, "a0");
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 1)}</h1><input${_attr_input_value($scope0_id, "b", input.value, input.wire ? handler : void 0, 3, $scope0_reason, 0)}>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", (($fg__input_value ? " f" : "") + ($fg__input_wire ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: ($ui__input_wire || $ui__input_value__OR__input_wire) && input.value,
		g: $ui__input_value__OR__input_wire && input.wire,
		h: $ui__input_value__OR__input_wire && handler
	}) || ($fg__input_value && $ui__input_wire && _patch_write($scope0_id, "xf", input.value, !_server_guard($scope0_reason, 2)), $fg__input_wire && $ui__input_value__OR__input_wire && _patch_write($scope0_id, "xg", input.wire, !_server_guard($scope0_reason, 3)));
}, 1);
