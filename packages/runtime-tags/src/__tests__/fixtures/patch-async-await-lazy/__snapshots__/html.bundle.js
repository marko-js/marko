// template.marko
_shells({
	a0: "a0;D ;<span> </span>",
	a1: "a1;D ;<em> </em>",
	a2: "a2",
	a3: "a3;D ;<em> </em>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;D ;<span> </span>",
	a: "a !a9;E lD%lD%l Db%;<main><h1> </h1><section><!></section><footer><!></footer><button>Count <!></button></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_related__OR__input_slow = _write_if($scope0_reason, 0), $cg__input_slow = _client_guard($scope0_reason, 5), $cg__input_related = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_related__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 3)}</h1><section>`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter(input.related, input.slow ? 1 : 0), (related) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", related, void 0, $scope0_reason, 0)}</em>`);
			$scope0_page && _scope($scope3_id, {});
		}, 1, "a1", 1);
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "a6");
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "a7");
		_patch_join_init($scope1_id, "a8", $scope0_reason, 0, _filled_guard($scope0_reason, 4) && ">i", _filled_guard($scope0_reason, 5) && ">j");
		$scope0_page && $wi__input_related__OR__input_slow && _subscribe(_unfilled_if($scope0_reason, 5) && $input_slow__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_related__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_related && "a6", 0), $cg__input_slow && "a7", 0);
		$wi__input_related__OR__input_slow && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "a2", void 0, "a4", 1, void 0, 2);
	_html("</section><footer>");
	_await($scope0_id, "c", resolveAfter(input.note, input.slow ? 2 : 0), (note) => {
		const $scope4_id = _scope_id();
		_html(`<span>${_patch_text($scope4_id, "a", note, void 0, $scope0_reason, 2)}</span>`);
		$scope0_page && _scope($scope4_id, {});
	}, 1, "a0", 1);
	_html(`</footer><button>Count ${_text_resume($scope0_id, "e", count, 2)}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a9");
	_filled_guard($scope0_reason, 4) && $cg__input_slow && _patch_write($scope0_id, "xi", input.related);
	_filled_guard($scope0_reason, 5) && ($cg__input_related || _client_guard($scope0_reason, 6)) && _patch_write($scope0_id, "xj", input.slow);
	_filled_guard($scope0_reason, 6) && $cg__input_slow && _patch_write($scope0_id, "xk", input.note);
	_patch_join_init($scope0_id, "a10", $scope0_reason, 2, _filled_guard($scope0_reason, 5) && "j", _filled_guard($scope0_reason, 6) && "k");
	$scope0_page && _scope($scope0_id, {
		i: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && input.related,
		j: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.slow,
		k: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && input.note,
		m: count,
		n: _write_if($scope0_reason, 4) && (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && $input_related__closures,
		o: _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && $input_slow__closures
	});
}, 1);
