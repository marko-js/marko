// template.marko
_shells({
	a: "a !a5;D%b ;<main><!><button>+</button></main>",
	a3: "a3;b%;<!><!><!>",
	a2: "a2 a0 a9 a10;D ;<p> </p>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_flag = _write_guard($scope0_reason, 1), $wi__input_suffix = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.flag) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", item + ":" + input.suffix + "@0")}</p>`);
				$scope0_page && _subscribe($count__closures, _subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), _client_guard($scope0_reason, 2) && "a0"), "a1");
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_flag, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a4");
		$scope0_page && _scope($scope1_id, {
			M: item,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a5");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.flag,
		g: input.suffix,
		h: count,
		j: $wi__input_suffix && $input_suffix__closures,
		k: $count__closures
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va6", input.flag, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va7", input.suffix, !_server_guard($scope0_reason, 2)));
}, 1);
