// tags/my-tag.marko
_shells({ b: "b !b1; b%;<button>open</button><!><!>" });
var my_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>open</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a !a2; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	_client_guard($scope0_reason, 0);
	const $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a2");
	$fg__input_label && _patch_subscribers($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: input.label,
		f: show,
		g: $wi__input_label && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
