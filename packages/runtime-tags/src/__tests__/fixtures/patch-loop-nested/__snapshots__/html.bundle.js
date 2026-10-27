// template.marko
_shells({ a: "a !a1;D%b b ;<main><!><button class=o>o</button><button class=i>i</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let outer = ["a"];
	let inner = ["x"];
	_html("<main>");
	if ($scope0_page) _for_of(outer, (o) => {
		const $scope1_id = _scope_id();
		if ($scope0_page) _for_of(inner, (i) => {
			const $scope2_id = _scope_id();
			_html(`<div>${_text_resume($scope2_id, "a", o)}${_text_resume($scope2_id, "b", i, 2)}: ${_text_resume($scope2_id, "c", input.note, _write_guard($scope0_reason, 0) * 2)}</div>`);
			$scope0_page && _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, {}), "a0");
		}, 0, $scope1_id, "a", 1, 1, 0, 0, 1);
		$scope0_page && _scope($scope1_id, { c: o });
	}, 0, $scope0_id, "a");
	_html(`<button class=o>o</button>${_el_resume($scope0_id, "b")}<button class=i>i</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		f: input.note,
		g: outer,
		h: inner,
		i: $wi__input_note && $input_note__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 0));
}, 1);
