// tags/rowsy.marko
var rowsy_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $wi__input_tags__OR__input_card = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("b0", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2), $wg__label = _write_guard($scope3_reason, 1);
		_html(`<p>${_text_resume($scope3_id, "a", label, $wg__label)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 0, 0, $wg__content);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", _write_guard($scope3_reason, 0), $wg__label);
		_html("</p>");
		_write_if($scope3_reason, 1) && _scope($scope3_id, { f: content });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, _write_guard($scope0_reason, 1))} ${_text_resume($scope1_id, "b", n, 2)}</em>`);
		_subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2"), "b3");
	}, $scope0_id, ($scope) => [{ f: input.label }]) };
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "a", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 0, 0, $wg__input_tags__OR__input_card);
		$wi__input_tags__OR__input_card && _scope($scope2_id, {
			c: _write_if($scope0_reason, 3) && tag,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", $wg__input_tags__OR__input_card, _write_guard($scope0_reason, 2));
	_script($scope0_id, "b4");
	_scope($scope0_id, {
		f: $wi__input_tags__OR__input_card && input.label,
		h: _write_if($scope0_reason, 2) && input.card,
		i: $wi__input_tags__OR__input_card && Card,
		j: n,
		k: $wi__input_tags__OR__input_card && Label,
		l: $wi__input_label && $input_label__closures,
		o: $n__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let card = true;
	_set_scope_reason(130 | (_write_guard($scope0_reason, 0) << 3 | _write_guard($scope0_reason, 1) << 5));
	const $childScope = _peek_scope_id();
	rowsy_default({
		card,
		label: input.label,
		tags: input.tags
	});
	_html(`<button class=c>c</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: card,
		a: _existing_scope($childScope)
	});
}, 1);
