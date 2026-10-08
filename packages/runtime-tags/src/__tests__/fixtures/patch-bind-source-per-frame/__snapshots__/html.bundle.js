// template.marko
_shells({
	a1: "a1 !a10; ;<button>two</button>",
	a2: "a2 !a5; ;<button>one</button>",
	a3: "a3 !a5; ;<button>one</button>",
	a4: "a4 !a10; ;<button>two</button>",
	a: "a;D%b%bD ;<main><!><!><em> </em></main>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
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
		_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a6");
		_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a7");
		_subscribe(_unfilled_if($scope0_reason, 3) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 3) && "a8"), _client_guard($scope0_reason, 3) && "a9");
	}, 1, "a2", 1);
	_await($scope0_id, "b", input.two, () => {
		const $scope2_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "two",
			title: input.title,
			onClick: handler
		}, "a", $scope2_id, "button", void 0, $scope0_reason, 3)}>two</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a10");
		_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a11");
		_client_guard($scope0_reason, 3) && _patch_init($scope2_id, "a12");
		_subscribe(_unfilled_if($scope0_reason, 3) && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ck: 1,
			Cl: 1
		}), _client_guard($scope0_reason, 3) && "a13"), _client_guard($scope0_reason, 3) && "a14");
	}, 1, "a1", 1);
	_html(`<em>${_patch_text($scope0_id, "c", count)}</em></main>`);
	_patch_write($scope0_id, "j", handler, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.title,
		j: _source_if($scope0_reason, 2) && handler,
		k: $input_title__closures,
		l: $handler2__closures
	}) : _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "f", input.title);
}, 1);
