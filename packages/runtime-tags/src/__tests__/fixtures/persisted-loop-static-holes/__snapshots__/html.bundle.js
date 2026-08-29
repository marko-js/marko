// template.marko
_shells({
	a: "a; b b%;<ul></ul><ol></ol><!><!>",
	a0: "a0;D%c%;<li><!>:<!></li>",
	a1: "a1; ;<div></div>",
	a2: "a2;D%c%;<p><!>:<!></p>",
	a3: "a3;D ;<li> </li>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_note = _source_guard($scope0_reason, 1), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<ul>");
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", x)}:${_patch_text($scope1_id, "b", input.note, 2, $scope0_owned, 1)}</li>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, $sg__input_note, 0, void 0, void 0, "a0");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_note)}<ol>`);
	_for_of([1, 2], (x) => {
		const $scope4_id = _scope_id();
		_html(`<li>${_patch_text($scope4_id, "a", x)}</li>`);
		_scope($scope4_id, {});
	}, 0, $scope0_id, "b", 1, 1, 0, void 0, void 0, "a3");
	_html(`</ol>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html("<div>");
			_for_of([1, 2], (x) => {
				const $scope3_id = _scope_id();
				_html(`<p>${_patch_text($scope3_id, "a", x)}:${_patch_text($scope3_id, "b", input.note, 2, $scope0_owned, 1)}</p>`);
				_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }));
			}, 0, $scope2_id, "a", 1, 1, 0, void 0, void 0, "a2");
			_html(`</div>${_el_resume($scope2_id, "a")}`);
			$scope0_reason && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a1"]);
	$scope0_reason && _scope($scope0_id, {
		f: input.note,
		h: $input_note__closures
	});
}, 1, 0);
