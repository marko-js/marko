// template.marko
_shells({
	a1: "a1 !a8; ;<button>two</button>",
	a2: "a2 !a5; ;<button>one</button>",
	a3: "a3 !a5; ;<button>one</button>",
	a4: "a4 !a8; ;<button>two</button>",
	a: "a;D%b%bD ;<main><!><!><em> </em></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $handler2__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const handler = _resume((event) => event.target.dataset.seen = input.title, "a0", $scope0_id);
	_html("<main>");
	_await($scope0_id, "a", input.one, () => {
		const $scope1_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "one",
			title: input.title,
			onClick: handler
		}, "a", $scope1_id, "button", void 0, $scope0_reason, 3)}>one</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a5");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "a6");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, "a7");
		_subscribe(_unfilled_if($scope0_reason, 3) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_title__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "a6"), _client_guard($scope0_reason, 3) && "a7");
	}, 1, "a2", 1, 1);
	_await($scope0_id, "b", input.two, () => {
		const $scope2_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "two",
			title: input.title,
			onClick: handler
		}, "a", $scope2_id, "button", void 0, $scope0_reason, 3)}>two</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a8");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a9");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "a10");
		_subscribe(_unfilled_if($scope0_reason, 3) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_title__closures, _scope($scope2_id, {
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			Ck: $wi__input_title && 1,
			Cl: $wi__input_title && 1
		}), _client_guard($scope0_reason, 3) && "a9"), _client_guard($scope0_reason, 3) && "a10");
	}, 1, "a1", 1, 1);
	_html(`<em>${_patch_text($scope0_id, "c", count)}</em></main>`);
	_patch_write($scope0_id, "wj", handler, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		j: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && handler,
		k: $wi__input_title && $input_title__closures,
		l: $wi__input_title && _unfilled_if($scope0_reason, 3) && $handler2__closures
	}) : _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "wf", input.title, !_server_guard($scope0_reason, 3));
}, 1);
