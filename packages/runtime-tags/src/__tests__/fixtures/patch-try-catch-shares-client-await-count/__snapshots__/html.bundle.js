// template.marko
_shells({
	a0: "a0;D ;<b> </b>",
	a1: "a1",
	a2: "a2",
	a3: "a3;D ;<b> </b>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5 a16;D%b%;<div><!><!></div>",
	a: "a !a10;D%b ;<main><!><button>x</button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 0), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $pending__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>");
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.a, (a) => {
				const $scope6_id = _scope_id();
				_html(`<b>${_patch_text($scope6_id, "a", a, void 0, $scope0_reason, 0)}</b>`);
				$scope0_page && _scope($scope6_id, {});
			}, 1, "a0", 1);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_a ? "a6" : "a7");
			$scope0_page && $wi__input_a && _subscribe(_unfilled_if($scope0_reason, 0) && $input_a__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_a && "a7", 0);
			$wi__input_a && _resume_branch($scope2_id);
		}, void 0, (e) => {
			_scope_reason();
			const $scope5_page = _page_render();
			const $scope5_id = _scope_id();
			_html(`<s>${_patch_text($scope5_id, "a", e.message)}</s>`);
			$scope5_page && _scope($scope5_id, {});
		}, void 0, "a1", "a4", 1, 1, 1);
		if ($scope0_page) _if(() => {}, $scope1_id, "b");
		_html("</div>");
		$scope0_page && _subscribe($pending__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a9");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, void 0, "a2", void 0, "a5", 1, void 0, 2);
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a10");
	$scope0_page && _scope($scope0_id, {
		g: $wi__input_a && _unfilled_if($scope0_reason, 0) && $input_a__closures,
		h: $pending__closures
	});
}, 1);
