// template.marko
_shells({ a: "a !a0;D%b b ;<main><!><button class=o>o</button><button class=i>i</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let outer = ["a"];
	let inner = ["x"];
	_html("<main>");
	if ($scope0_reason) _for_of(outer, (o) => {
		const $scope1_id = _scope_id();
		if ($scope0_reason) _for_of(inner, (i) => {
			const $scope2_id = _scope_id();
			_html(`<div>${_text_resume($scope2_id, "a", o)}${_text_resume($scope2_id, "b", i, 2)}: ${_text_resume($scope2_id, "c", input.note, 2)}</div>`);
			_subscribe(_source_if($scope0_reason, 0) && $input_note__closures, _scope($scope2_id, {}));
		}, 0, $scope1_id, "a", 1, 1, 1, 0, 1);
		_scope($scope1_id, { c: o });
	}, 0, $scope0_id, "a");
	_html(`<button class=o>o</button>${_el_resume($scope0_id, "b")}<button class=i>i</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		f: input.note,
		g: outer,
		h: inner,
		i: $input_note__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.note);
}, 1, 0);
