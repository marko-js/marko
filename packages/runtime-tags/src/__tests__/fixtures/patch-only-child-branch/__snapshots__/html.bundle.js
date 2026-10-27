// template.marko
_shells({
	a: "a !a2;D b Db%;<main><div></div><button>c <!></button></main>",
	a1: "a1;Db%;<span>hi <!></span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>hi ${_patch_text($scope1_id, "a", input.msg, 2, $scope0_reason, 1)}</span>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 0);
	_html(`</div>${_el_resume($scope0_id, "a", $wg__input_show)}<button>c ${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.msg,
		h: count
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.msg, !_server_guard($scope0_reason, 1));
}, 1);
