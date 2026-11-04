// template.marko
_shells({
	a: "a !a5;D bD l ;<main><div></div><span> </span><button>+</button></main>",
	a2: "a2 a10;Db%;<p>A <!></p>",
	a3: "a3 a11;Db%;<p>B <!></p>",
	a4: "a4 a12;Db%;<p>None <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_kind = _write_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $cg__input_kind = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.kind === "a") {
			const $scope1_id = _scope_id();
			_html(`<p>A ${_text_mark($scope1_id, "a", input.title + " #0", 2)}</p>`);
			_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 1) && ">g");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else if (input.kind === "b") {
			const $scope2_id = _scope_id();
			_html(`<p>B ${_text_mark($scope2_id, "a", input.title + " @0", 2)}</p>`);
			_patch_render($scope2_id, "a1", _filled_guard($scope0_reason, 1) && ">g");
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html(`<p>None ${_text_mark($scope3_id, "a", count, 2)}</p>`);
			_scope($scope3_id, { _: _scope_with_id($scope0_id) });
			return 2;
		}
	}, $scope0_id, "a", 1, $wg__input_kind, 1, 0, 0, [
		"a2",
		"a3",
		"a4"
	], $scope0_reason, 0);
	_html(`</div>${_el_mark($scope0_id, "a", $wg__input_kind)}<span>${_text_mark($scope0_id, "b", input.title + " root #0")}</span><button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a5");
	$fg__input_title && $cg__input_kind && _patch_render($scope0_id, "a6", "g");
	$fg__input_title && $cg__input_kind && _patch_render($scope0_id, "a7", "g");
	_patch_render($scope0_id, "a8", $fg__input_title && "g");
	_scope($scope0_id, {
		g: input.title,
		h: count
	}) || $fg__input_title && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 1));
}, 1);
