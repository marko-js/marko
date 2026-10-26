// template.marko
_shells({
	a5: "a5 !a9; ;<button>two</button>",
	a6: "a6 !a1; ;<button>one</button>",
	a7: "a7 !a1; ;<button>one</button>",
	a8: "a8 !a9; ;<button>two</button>",
	a: "a !;D%b%bD ;<main><!><!><em> </em></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 3), $scope0_page = _page_render(), $wi__input_title = _write_if($scope0_reason, 3), $sg__input_title = _server_guard($scope0_reason, 3), $cg__input_one = _client_guard($scope0_reason, 4), $cg__input_two = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $handler2__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 3) && ($cg__input_one || $cg__input_two ? _patch_fill($scope0_id, "va13", input.title, !$sg__input_title) : _patch_write($scope0_id, "xf", input.title, !$sg__input_title)), ($cg__input_one || $cg__input_two) && _content_withhold(input.title);
	let count = 0;
	const handler = _bind_resume((event) => event.target.dataset.seen = input.title, "a0", $scope0_id);
	_html("<main>");
	_await($scope0_id, "a", input.one, () => {
		const $scope1_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "one",
			title: input.title,
			onClick: handler
		}, "a", $scope1_id, "button", void 0, $scope0_reason, 3)}>one</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "a2");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "a3");
		$cg__input_title && _patch_init($scope1_id, "a4");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_title__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_title && "a2"), $cg__input_title && "a3");
	}, 1, "a6", 1, 1);
	_await($scope0_id, "b", input.two, () => {
		const $scope2_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "two",
			title: input.title,
			onClick: handler
		}, "a", $scope2_id, "button", void 0, $scope0_reason, 3)}>two</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a9");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a10");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a11");
		$cg__input_title && _patch_init($scope2_id, "a12");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_title__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			Ck: $wi__input_title && 1,
			Cl: $wi__input_title && 1
		}), $cg__input_title && "a10"), $cg__input_title && "a11");
	}, 1, "a5", 1, 1);
	_html(`<em>${_patch_text($scope0_id, "c", count, void 0, 0, 0)}</em></main>`);
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		j: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && handler,
		k: $wi__input_title && $input_title__closures,
		l: $wi__input_title && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && $handler2__closures
	}) : (_filled_guard($scope0_reason, 3) && ($cg__input_one || $cg__input_two) && _patch_fill($scope0_id, "va14", handler, !$sg__input_title), ($cg__input_one || $cg__input_two) && _content_withhold(handler));
}, 1);
