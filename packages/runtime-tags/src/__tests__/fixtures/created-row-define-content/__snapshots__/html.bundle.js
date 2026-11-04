// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("a0", ({ label, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 2), $wg__label = _write_guard($scope1_reason, 1);
		_html(`<p>${_text_mark($scope1_id, "a", label, $wg__label)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 0, 0, $wg__content);
				_write_if($scope1_reason, 0) && _scope($scope4_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", _write_guard($scope1_reason, 0), $wg__label);
		_html("</p>");
		_write_if($scope1_reason, 1) && _scope($scope1_id, { f: content });
	}, $scope0_id) };
	_for_of(input.rows, (row) => {
		const $scope2_id = _scope_id();
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		const $for_content__n__closures = /* @__PURE__ */ new Set();
		let n = 0;
		const Label = { content: _content_resume("a1", () => {
			const $scope5_id = _scope_id();
			_scope_reason();
			_html(`<em>${_text_mark($scope5_id, "a", row.label, $wg__input_rows)} ${_text_mark($scope5_id, "b", n, 2)}</em>`);
			_subscribe($for_content__n__closures, _subscribe($wi__input_rows && $for_content__row_label__closures, _scope($scope5_id, { _: _scope_with_id($scope2_id) }), "a2"), "a3");
		}, $scope2_id, ($scope) => [{ h: row?.label }]) };
		_html(`<section><button>${_text_mark($scope2_id, "b", n)}</button>${_el_mark($scope2_id, "a")}`);
		Card.content({
			label: "direct",
			content: _content("a6", () => {
				_scope_reason();
				const $scope6_id = _scope_id();
				_html(`<i>${_text_mark($scope6_id, "a", row.label, $wg__input_rows)} ${_text_mark($scope6_id, "b", n, 2)}</i>`);
				_subscribe($for_content__n__closures, _subscribe($wi__input_rows && $for_content__row_label__closures, _scope($scope6_id, {
					_: _scope_with_id($scope2_id),
					Cn: $wi__input_rows && 1,
					Cp: 1
				}), "a4"), "a5");
			}, $scope2_id)
		});
		_dynamic_tag($scope2_id, "d", row.card ? Card : "span", { label: "dynamic" }, _content_resume("a7", () => {
			const $scope7_id = _scope_id();
			_scope_reason();
			_html(`<b>${_text_mark($scope7_id, "a", row.label, $wg__input_rows)} ${_text_mark($scope7_id, "b", n, 2)}</b>`);
			_subscribe($for_content__n__closures, _subscribe($wi__input_rows && $for_content__row_label__closures, _scope($scope7_id, {
				_: _scope_with_id($scope2_id),
				Cn: $wi__input_rows && 2,
				Cp: 2
			}), "a8"), "a9");
		}, $scope2_id, ($scope2) => [{ h: row?.label }]), 0, $wg__input_rows);
		_for_of(row.tags, (tag) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "a", row.card ? Card : "span", {
				label: tag,
				content: Label
			}, 0, 0, $wg__input_rows);
			$wi__input_rows && _scope($scope3_id, { _: _scope_with_id($scope2_id) });
		}, 0, $scope2_id, "e", $wg__input_rows, $wg__input_rows);
		_html("</section>");
		_script($scope2_id, "a10");
		_scope($scope2_id, {
			l: n,
			m: $wi__input_rows && Label,
			_: $wi__input_rows && _scope_with_id($scope0_id),
			n: $wi__input_rows && $for_content__row_label__closures,
			p: $for_content__n__closures
		});
	}, "id", $scope0_id, "a", $wg__input_rows, $wg__input_rows, 0, 0, 1);
	$wi__input_rows && _scope($scope0_id, { e: Card });
}, 1);
