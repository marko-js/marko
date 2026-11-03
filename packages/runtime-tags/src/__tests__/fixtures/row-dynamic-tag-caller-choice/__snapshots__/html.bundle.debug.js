// tags/rowsy.marko
var rowsy_default = _template("__tests__/tags/rowsy.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $wi__input_tags__OR__input_card = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const Card = { content: _content_resume("__tests__/tags/rowsy.marko_3*content", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2), $wg__label = _write_guard($scope3_reason, 1);
		_html(`<p>${_text_resume($scope3_id, "#text/0", label, $wg__label)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", content, {}, 0, 0, $wg__content);
				_write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) }, "__tests__/tags/rowsy.marko", "2:15");
				return 0;
			}
		}, $scope3_id, "#text/1", _write_guard($scope3_reason, 0), $wg__label);
		_html("</p>");
		_write_if($scope3_reason, 1) && _scope($scope3_id, { content }, "__tests__/tags/rowsy.marko", "1:2", { content: "1:23" });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("__tests__/tags/rowsy.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, _write_guard($scope0_reason, 1))} ${_text_resume($scope1_id, "#text/1", n, 2)}</em>`);
		_subscribe($n__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/rowsy.marko", "5:2"), "__tests__/tags/rowsy.marko_1_input_label#0:5/subscribe"), "__tests__/tags/rowsy.marko_1_n#0:9/subscribe");
	}, $scope0_id, ($scope) => [{ input_label: input.label }]) };
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "#text/0", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 0, 0, $wg__input_tags__OR__input_card);
		$wi__input_tags__OR__input_card && _scope($scope2_id, {
			tag: _write_if($scope0_reason, 3) && tag,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/rowsy.marko", "7:2", { tag: "7:6" });
	}, 0, $scope0_id, "#text/2", $wg__input_tags__OR__input_card, _write_guard($scope0_reason, 2));
	_script($scope0_id, "__tests__/tags/rowsy.marko_0");
	_scope($scope0_id, {
		input_label: $wi__input_tags__OR__input_card && input.label,
		input_card: _write_if($scope0_reason, 2) && input.card,
		Card: $wi__input_tags__OR__input_card && Card,
		n,
		Label: $wi__input_tags__OR__input_card && Label,
		"ClosureScopes:input_label/11": $wi__input_label && $input_label__closures,
		"ClosureScopes:n/14": $n__closures
	}, "__tests__/tags/rowsy.marko", 0, {
		input_label: ["input.label"],
		input_card: ["input.card"],
		Card: "1:9",
		n: "4:6",
		Label: "5:9"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	_html(`<button class=c>c</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		card,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { card: "1:6" });
}, 1);
