// template.marko
_shells({
	a4: "a4; ;<button id=two>two</button>",
	a5: "a5; ;<button id=one>one</button>",
	a6: "a6; ;<button id=one>one</button>",
	a7: "a7; ;<button id=two>two</button>",
	a: "a;D%b%bD ;<main><!><!><em> </em></main>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $handler2__closures = /* @__PURE__ */ new Set();
	$fg__input_title && _patch_write($scope0_id, "xf", input.title, !$sg__input_title);
	let count = 0;
	const handler = _bind_resume((event) => event.target.dataset.seen = input.title, "a0", $scope0_id);
	_html("<main>");
	_await($scope0_id, "a", input.one, () => {
		const $scope1_id = _scope_id();
		_html(`<button id=one${_attr("title", input.title, $scope1_id, "aa$title", $scope0_reason, 0)}>one</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a1", 1, _filled_guard($scope0_reason, 0), [">j", ">f"]);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a2", $cg__input_title);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a3", $cg__input_title);
		_subscribe($wi__input_title && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, {}), $cg__input_title && "a2"), $cg__input_title && "a3");
	}, 1, "a5", _unfilled_if($scope0_reason, 1), 1);
	_await($scope0_id, "b", input.two, () => {
		const $scope2_id = _scope_id();
		_html(`<button id=two${_attr("title", input.title, $scope2_id, "aa$title", $scope0_reason, 0)}>two</button>${_el_mark($scope2_id, "a")}`);
		_script($scope2_id, "a8", 1, _filled_guard($scope0_reason, 0), [">j", ">f"]);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a9", $cg__input_title);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a10", $cg__input_title);
		_subscribe($wi__input_title && $handler2__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, {
			Ck: $wi__input_title && 1,
			Cl: $wi__input_title && 1
		}), $cg__input_title && "a9"), $cg__input_title && "a10");
	}, 1, "a4", _unfilled_if($scope0_reason, 2), 1);
	_html(`<em>${_text_mark($scope0_id, "c", count)}</em></main>`);
	_scope($scope0_id, {
		f: input.title,
		j: handler,
		k: $wi__input_title && $input_title__closures,
		l: $wi__input_title && $handler2__closures
	}) || $fg__input_title && _patch_write($scope0_id, "xj", handler, !$sg__input_title);
}, 1);
