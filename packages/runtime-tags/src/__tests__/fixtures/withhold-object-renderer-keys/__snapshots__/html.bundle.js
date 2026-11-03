// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, { class: "x" }, 0, 0, $wg__input_content);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: open
	});
});

// tags/holder.marko
var holder_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_mode = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const frag = { content: _content_resume("c0", () => {
		_scope_id();
		_scope_reason();
		_html("<em>held</em>");
	}, $scope0_id) };
	_html("<section>");
	_attr_content("a", $scope0_id, input.mode ? frag.content : null, $wg__input_mode);
	_html(`</section>${_el_resume($scope0_id, "a", $wg__input_mode)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, { f: frag?.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_on__OR__input_note = _write_if($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let m = false;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	holder_default({ mode: input.mode });
	_html("<main>");
	_dynamic_tag($scope0_id, "b", input.on ? card_default : "div", {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
		$wi__input_on__OR__input_note && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_note);
		$wg__input_note || $wi__input_on__OR__input_note && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{ h: input.note }]), 0, _write_guard($scope0_reason, 1));
	_html(`</main><button class=m>m</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: input.mode,
		h: _write_if($scope0_reason, 1) && input.note,
		i: m,
		a: _existing_scope($childScope),
		k: $wi__input_note && $input_note__closures
	});
}, 1);
