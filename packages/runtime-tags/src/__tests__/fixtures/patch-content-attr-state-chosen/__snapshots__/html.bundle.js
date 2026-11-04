// template.marko
_shells({ a: "a !a4; b ;<button>toggle</button><section></section>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0), $cg__input_b = _client_guard($scope0_reason, 0), $wi__input_b = _write_if($scope0_reason, 0), $fg__input_b = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	let mode = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	const one = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "a", input.b, $wg__input_b * 2)}</em>`);
		$cg__input_b && _patch_render($scope1_id, "a1");
		_subscribe($wi__input_b && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_b && "a1", $wg__input_b);
	}, $scope0_id) };
	const two = { content: _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "a", input.b, $wg__input_b * 2)}</strong>`);
		$cg__input_b && _patch_render($scope2_id, "a3");
		_subscribe($wi__input_b && $input_b__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Cj: $wi__input_b && 1
		}), $cg__input_b && "a3", $wg__input_b);
	}, $scope0_id) };
	_html("<section>");
	_attr_content("b", $scope0_id, two, 0);
	_html(`</section>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$fg__input_b && _patch_subscribers($scope0_id, "a5", "e");
	_scope($scope0_id, {
		e: input.b,
		f: mode,
		g: one,
		h: two,
		j: $wi__input_b && $input_b__closures
	}) || $fg__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 0));
}, 1);
