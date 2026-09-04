// template.marko
_shells({
	a1: "a1; ;<button>two</button>",
	a2: "a2; ;<button>one</button>",
	a3: "a3; ;<button>one</button>",
	a4: "a4; ;<button>two</button>",
	a: "a;D%b%bD ;<main><!><!><em> </em></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_title = _source_if($scope0_reason, 0);
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
		}, "a", $scope1_id, "button", void 0, $scope0_owned, 0)}>one</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a5");
		_subscribe($si__input_title && $handler2__closures, _subscribe($si__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, 1, "a3", 1);
	_await($scope0_id, "b", input.two, () => {
		const $scope2_id = _scope_id();
		_html(`<button${_patch_attrs({
			id: "two",
			title: input.title,
			onClick: handler
		}, "a", $scope2_id, "button", void 0, $scope0_owned, 0)}>two</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a6");
		_subscribe($si__input_title && $handler2__closures, _subscribe($si__input_title && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ck: 1,
			Cl: 1
		})));
	}, 1, "a4", 1);
	_html(`<em>${_patch_text($scope0_id, "c", count)}</em></main>`);
	$scope0_reason ? _scope($scope0_id, {
		f: input.title,
		j: handler,
		k: $input_title__closures,
		l: $handler2__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "f", input.title);
}, 1, 0);
