// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.p, (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, _content_resume("b0", () => {
			_scope_id();
			_scope_reason();
			_html("<i>x</i>");
		}, $scope1_id), 0, $wg__input_content);
		$wi__input_content && _subscribe($input_content__closures, _scope($scope1_id, {}), "b1", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $wg__input_content);
	$wi__input_content && _scope($scope0_id, { f: $input_content__closures });
});

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

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 4), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 3), $wi__input_on = _write_if($scope0_reason, 3), $wi__input_note = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	const $childScope = _peek_scope_id();
	card_default({
		p: input.p,
		content: _content("a3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.on ? keeper_default : "div", {}, _content_resume("a0", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				_html(`<em>${_text_resume($scope2_id, "a", input.note, $wg__input_note)}</em>`);
				$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_note);
				$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope2_id);
			}, $scope1_id, ($scope) => [{ f: input.note }, { _: $scope($scope0_id) }]), 0, $wg__input_on);
			$wi__input_on__OR__input_note && _subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a2", $wg__input_on);
			$wg__input_on || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		f: $wi__input_on && input.note,
		h: $wi__input_note && $input_note__closures,
		g: $wi__input_on && $input_on__closures,
		a: _write_if($scope0_reason, 2) && _existing_scope($childScope)
	});
}, 1);
