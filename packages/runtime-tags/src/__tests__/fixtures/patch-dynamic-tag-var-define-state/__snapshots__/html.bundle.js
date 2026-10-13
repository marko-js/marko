// template.marko
_shells({ a: "a !;b1bD ;<!><!><p> </p>" });
_client_return("a0");
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_which = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Counter = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		_html(`<button class=inc>${_patch_text($scope1_id, "b", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "c", n, 2)}</button>${_el_resume($scope1_id, "a")}`);
		const $return = n;
		_script($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id)
		}), "a2");
		return $return;
	}, $scope0_id) };
	const Other = { content: _content_resume("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<i>${_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 1)}</i>`);
		const $return2 = -1;
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id),
			Cl: $wi__input_label && 1
		}), "a4");
		return $return2;
	}, $scope0_id) };
	const $inputwhichCounterOther_scope = _peek_scope_id();
	let count = _dynamic_tag($scope0_id, "a", input.which ? Counter : Other, { label: input.label }, void 0, void 0, void 0, "a5", 1, $scope0_reason, 0);
	_var($scope0_id, "b", $inputwhichCounterOther_scope, "a5");
	_html(`<p>${_text_resume($scope0_id, "c", count)}</p>`);
	_patch_write($scope0_id, "wg", input.which, 1);
	_patch_write($scope0_id, "wh", Counter, 1);
	_patch_write($scope0_id, "wi", Other, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a9");
	$scope0_page ? _scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && input.label,
		g: $wi__input_label && input.which,
		h: $wi__input_label__OR__input_which && Counter,
		i: $wi__input_label__OR__input_which && Other,
		l: $wi__input_label && $input_label__closures
	}) : (_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "va6", input.label) : (_content_withheld("a0") && _client_guard($scope0_reason, 0) || _content_withheld("a3") && _client_guard($scope0_reason, 0)) && _patch_value($scope0_id, "va7", input.label)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va8", input.which));
}, 1);
