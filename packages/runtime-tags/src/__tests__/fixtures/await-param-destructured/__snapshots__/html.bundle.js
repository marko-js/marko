// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_user = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_await($scope0_id, "c", resolveAfter(input.user), ({ name, tags: [first] }) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_mark($scope1_id, "a", name, $wg__input_user)}:${_text_mark($scope1_id, "b", first, $wg__input_user * 2)}:${_text_mark($scope1_id, "c", count, 2)}</span>`);
		_subscribe($count__closures, _scope($scope1_id, {}), "a0");
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: count,
		h: $count__closures
	});
}, 1);
