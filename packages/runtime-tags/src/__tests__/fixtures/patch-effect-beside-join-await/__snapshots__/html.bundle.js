// template.marko
_shells({
	a5: "a5 a4 a9!a1; bD l ;<button class=n>n</button><p class=j> </p><div class=e></div>",
	a6: "a6 a4 a9!a1; bD l ;<button class=n>n</button><p class=j> </p><div class=e></div>",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_a = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", Promise.resolve(1), (x) => {
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<button class=n>n</button>${_el_resume($scope1_id, "a")}<p class=j>${_text_resume($scope1_id, "b", input.a + n)}</p><div class=e></div>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 0), ">d");
		_script($scope1_id, "a1");
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a2");
		_patch_fill($scope1_id, "va3", n, 1);
		_subscribe($wi__input_a && $input_a__closures, _scope($scope1_id, { d: n }), "a4");
	}, 1, "a5", void 0, 1);
	_scope($scope0_id, {
		d: input.a,
		e: $wi__input_a && $input_a__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.a, !_server_guard($scope0_reason, 0));
}, 1);
