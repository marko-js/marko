// template.marko
_shells({
	a: "a !;Eb%l%;<main><p>last <!></p><!></main>",
	a4: "a4 !a1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<main><p>last ${_text_resume($scope0_id, "a", last, 2)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = input.start;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "a1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a2");
			const $countChange = _resume(function(next) {
				last = next;
			}, "a0", $scope1_id) || void 0;
			_patch_let_change($scope1_id, "va3", count, "wd", $countChange, $scope0_reason, 1, 1);
			$scope0_page && _scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a4"], $scope0_reason, 0);
	_html("</main>");
	$scope0_page ? _scope($scope0_id, { f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.start }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va5", input.start, !_server_guard($scope0_reason, 1));
}, 1);
