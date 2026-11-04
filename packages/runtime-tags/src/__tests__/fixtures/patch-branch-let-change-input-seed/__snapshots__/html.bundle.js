// template.marko
_shells({
	a: "a;Eb%l%;<main><p>last <!></p><!></main>",
	a4: "a4 !a1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_start = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><p>last ${_text_mark($scope0_id, "a", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<span>Seen ${_text_mark($scope1_id, "a", count, 2)}</span><button>+</button>${_el_mark($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a2");
			const $countChange = _resume(function(next) {
				last = next;
			}, "a0", $scope1_id) || void 0;
			_patch_let_change($scope1_id, "va3", count, "wd", $countChange, $scope0_reason, 1);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a4"], $scope0_reason, 0);
	_html("</main>");
	$fg__input_start && $cg__input_show && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, { f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.start }) || $fg__input_start && $cg__input_show && _patch_write($scope0_id, "xf", input.start, !_server_guard($scope0_reason, 1));
}, 1);
