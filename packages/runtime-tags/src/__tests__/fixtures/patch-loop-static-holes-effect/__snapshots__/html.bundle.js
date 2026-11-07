// template.marko
_shells({
	a: "a; b b%;<ul></ul><ol></ol><!><!>",
	a2: "a2; D%c%;<li><!>:<!></li>",
	a3: "a3; ;<div></div>",
	a4: "a4;D%c%;<p><!>:<!></p>",
	a5: "a5;D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 1), $wi__input_note__OR__input_show = _write_if($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<ul>");
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_mark($scope1_id, "b", x, 1, 0, 0)}:${_text_mark($scope1_id, "c", input.note, 2, $scope0_reason, 1)}</li>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 1), ">f");
		$cg__input_note && _patch_render($scope1_id, "a1");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a2", 0, 0);
	_html(`</ul>${_el_mark($scope0_id, "a")}<ol>`);
	_for_of([1, 2], (x) => {
		const $scope4_id = _scope_id();
		_html(`<li>${_text_mark($scope4_id, "a", x, 1, 0, 0)}</li>`);
		_scope($scope4_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a5", 0, 0);
	_html(`</ol>${_el_mark($scope0_id, "b")}`);
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_html("<div>");
			_for_of([1, 2], (x) => {
				const $scope3_id = _scope_id();
				_html(`<p>${_text_mark($scope3_id, "a", x, 1, 0, 0)}:${_text_mark($scope3_id, "b", input.note, 2, $scope0_reason, 1)}</p>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope3_id, "a6", $cg__input_note);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope3_id, { _: $wi__input_note__OR__input_show && _scope_with_id($scope2_id) }), $cg__input_note && "a6");
			}, 0, $scope2_id, "a", 1, 1, 1, 0, 0, "a4", 0, 0);
			_html(`</div>${_el_mark($scope2_id, "a")}`);
			_scope($scope2_id, { _: $wi__input_note__OR__input_show && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["a3"], $scope0_reason, 2);
	$fg__input_note && _client_guard($scope0_reason, 2) && _patch_subscribers($scope0_id, "a7", "f");
	_scope($scope0_id, {
		f: input.note,
		h: _write_if($scope0_reason, 1) && $input_note__closures
	}) || $fg__input_note && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 1));
}, 1);
