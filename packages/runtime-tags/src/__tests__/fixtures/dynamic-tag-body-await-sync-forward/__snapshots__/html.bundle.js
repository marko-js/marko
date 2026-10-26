// tags/keeper.marko
var keeper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wi__input_p__OR__input_content = _write_if($scope0_reason, 0), $wg__input_p = _write_guard($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", x ? keeper_default : "div", {}, _content_resume("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_dynamic_tag($scope2_id, "a", input.content, {}, 0, 0, $wg__input_content);
			$wi__input_p__OR__input_content && _subscribe($wi__input_content && $input_content__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b1", $wg__input_content);
			$wg__input_content || $wi__input_p__OR__input_content && _resume_branch($scope2_id);
		}, $scope1_id, ($scope) => [{ e: input.content }, { _: $scope($scope0_id) }]), 0, $wg__input_p);
		$wi__input_p__OR__input_content && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, _write_guard($scope0_reason, 0));
	$wi__input_p__OR__input_content && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.content,
		f: $wi__input_content && $input_content__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_p__OR__input_note = _write_if($scope0_reason, 1), $wg__input_on__OR__input_p = _write_guard($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", { p: input.on && input.p }, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_p__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_p__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ g: input.note }]), 0, $wg__input_on__OR__input_p);
	_html("</main>");
	$wi__input_on__OR__input_p__OR__input_note && _scope($scope0_id, {
		d: _write_if($scope0_reason, 3) && input.on,
		e: _write_if($scope0_reason, 2) && input.p,
		g: _write_if($scope0_reason, 0) && input.note,
		h: $wi__input_note && $input_note__closures
	});
}, 1);
