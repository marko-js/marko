// template.marko
_shells({
	a: "a !a3;D bD l ;<main><div></div><span> </span><button>+</button></main>",
	a0: "a0 a5 a6;Db%;<p>A <!></p>",
	a1: "a1 a7 a8;Db%;<p>B <!></p>",
	a2: "a2 a9;Db%;<p>None <!></p>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_kind = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.kind === "a") {
			const $scope1_id = _scope_id();
			_html(`<p>A ${_text_resume($scope1_id, "a", input.title + " #0", 2)}</p>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else if (input.kind === "b") {
			const $scope2_id = _scope_id();
			_html(`<p>B ${_text_resume($scope2_id, "a", input.title + " @0", 2)}</p>`);
			_scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html(`<p>None ${_text_resume($scope3_id, "a", count, 2)}</p>`);
			_scope($scope3_id, { _: _scope_with_id($scope0_id) });
			return 2;
		}
	}, $scope0_id, "a", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, [
		"a0",
		"a1",
		"a2"
	], $scope0_owned, 0);
	_html(`</div>${_el_resume($scope0_id, "a", $sg__input_kind)}<span>${_text_resume($scope0_id, "b", input.title + " root #0")}</span><button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason ? _scope($scope0_id, {
		g: input.title,
		h: count
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
