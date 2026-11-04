// tags/widget/index.marko
_shells({ b: "b !b0;D%c%l ;<em><!> x<!></em><button class=bump>+</button>" });
_stateful_return("b");
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<em>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)} x${_text_mark($scope0_id, "b", count, 2)}</em><button class=bump>+</button>${_el_mark($scope0_id, "c")}`);
	const $return = count;
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, { g: count });
	return $return;
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			let w = widget_default({ label: input.label });
			_var($scope1_id, "b", $childScope, "a0");
			_patch_child_end();
			_html(`<p class=echo>${_text_mark($scope1_id, "c", w)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_label && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: input.label,
		f: show
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
