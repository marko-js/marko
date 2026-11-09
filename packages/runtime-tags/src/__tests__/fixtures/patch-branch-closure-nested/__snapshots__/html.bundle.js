// template.marko
_shells({
	a: "a;E l%;<main><h1> </h1><!></main>",
	a1: "a1 !a2; b%;<button>+</button><!><!>",
	a0: "a0 a6;Db%;<p>Seen <!></p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_outer = _unfilled_if($scope0_reason, 1), $fg__input_inner = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1>`);
	_if(() => {
		if (input.outer) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button>+</button>${_el_mark($scope1_id, "a")}`);
			_if(() => {
				if (input.inner) {
					const $scope2_id = _scope_id();
					_html(`<p>Seen ${_text_mark($scope2_id, "a", count, 2)}</p>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) });
					return 0;
				}
			}, $scope1_id, "b", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a0"], $scope0_reason, 2);
			_script($scope1_id, "a2");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a3");
			_patch_fill($scope1_id, "va4", count, 1);
			_scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	$fg__input_inner && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "a3", "g");
	_scope($scope0_id, { g: ($ui__input_outer || _unfilled_if($scope0_reason, 2)) && input.inner }) || $fg__input_inner && $ui__input_outer && _patch_write($scope0_id, "xg", input.inner, !_server_guard($scope0_reason, 2));
}, 1);
