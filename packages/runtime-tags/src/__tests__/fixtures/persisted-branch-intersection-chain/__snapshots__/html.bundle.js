// template.marko
_renderer_shells({
	a0: ",`a0 a5;Db%;<p>A <!></p>`",
	a1: ",`a1 a6;Db%;<p>B <!></p>`",
	a2: ",`a2 a7;Db%;<p>None <!></p>`"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_kind = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main><div>");
	_if(() => {
		if (input.kind === "a") {
			const $scope1_id = _scope_id();
			_html(`<p>A <!>${_escape(input.title + " #0")}${_el_resume($scope1_id, "a")}</p>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else if (input.kind === "b") {
			const $scope2_id = _scope_id();
			_html(`<p>B <!>${_escape(input.title + " @0")}${_el_resume($scope2_id, "a")}</p>`);
			writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 1;
		} else {
			const $scope3_id = _scope_id();
			_html(`<p>None <!>${_escape(count)}${_el_resume($scope3_id, "a")}</p>`);
			writeScope($scope3_id, { _: _scope_with_id($scope0_id) });
			return 2;
		}
	}, $scope0_id, "a", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, [
		"a0",
		"a1",
		"a2"
	]);
	_html(`</div>${_el_resume($scope0_id, "a", $sg__input_kind)}<span>${_escape(input.title + " root #0")}${_el_resume($scope0_id, "b")}</span><button>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a3");
	$scope0_reason ? writeScope($scope0_id, {
		g: input.title,
		h: count
	}) : _patch_value($scope0_id, "a0", input.title);
	_resume_branch($scope0_id);
}, 1);
