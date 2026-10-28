// template.marko
_shells({
	a2: "a2;D%c%;<p><!>:<!></p>",
	a: "a !a5; b%;<button class=open>inc</button><!><!>",
	a3: "a3;D%c%;<p><!>:<!></p>",
	a4: "a4 a8;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_await($scope1_id, "a", Promise.resolve(n), (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", item, 1, $scope0_reason, 0)}:${_text_resume($scope2_id, "b", x, 2)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_items ? "a0" : "a1");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item__closures, _scope($scope2_id, {}), $cg__input_items && "a1");
		}, 1, "a2", 1);
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			h: _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $for_content__item__closures
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_script($scope0_id, "a5");
	_scope($scope0_id, { f: n });
}, 1);
