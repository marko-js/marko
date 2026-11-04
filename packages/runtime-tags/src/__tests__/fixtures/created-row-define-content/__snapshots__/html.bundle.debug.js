// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content_resume("__tests__/template.marko_1*content", ({ label, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__content = _write_guard($scope1_reason, 2), $wg__label = _write_guard($scope1_reason, 1);
		_html(`<p>${_text_mark($scope1_id, "#text/0", label, $wg__label)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "#text/0", content, {}, 0, 0, $wg__content);
				_write_if($scope1_reason, 0) && _scope($scope4_id, { _: _write_if($scope1_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:15");
				return 0;
			}
		}, $scope1_id, "#text/1", _write_guard($scope1_reason, 0), $wg__label);
		_html("</p>");
		_write_if($scope1_reason, 1) && _scope($scope1_id, { content }, "__tests__/template.marko", "1:2", { content: "1:23" });
	}, $scope0_id) };
	_for_of(input.rows, (row) => {
		const $scope2_id = _scope_id();
		const $for_content__row_label__closures = new Set();
		const $for_content__n__closures = new Set();
		let n = 0;
		const Label = { content: _content_resume("__tests__/template.marko_5*content", () => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			_html(`<em>${_text_mark($scope5_id, "#text/0", row.label, $wg__input_rows)} ${_text_mark($scope5_id, "#text/1", n, 2)}</em>`);
			_subscribe($for_content__n__closures, _subscribe($wi__input_rows && $for_content__row_label__closures, _scope($scope5_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_5_row_label#2:7/subscribe"), "__tests__/template.marko_5_n#2:11/subscribe");
		}, $scope2_id, ($scope) => [{ row_label: row?.label }]) };
		_html(`<section><button>${_text_mark($scope2_id, "#text/1", n)}</button>${_el_mark($scope2_id, "#button/0")}`);
		Card.content({
			label: "direct",
			content: _content("__tests__/template.marko_6*content", () => {
				const $scope6_reason = _scope_reason();
				const $scope6_id = _scope_id();
				_html(`<i>${_text_mark($scope6_id, "#text/0", row.label, $wg__input_rows)} ${_text_mark($scope6_id, "#text/1", n, 2)}</i>`);
				_subscribe($for_content__n__closures, _subscribe($wi__input_rows && $for_content__row_label__closures, _scope($scope6_id, {
					_: _scope_with_id($scope2_id),
					"ClosureSignalIndex:row_label/13": $wi__input_rows && 1,
					"ClosureSignalIndex:n/15": 1
				}, "__tests__/template.marko", "9:6"), "__tests__/template.marko_6_row_label#2:7/subscribe"), "__tests__/template.marko_6_n#2:11/subscribe");
			}, $scope2_id)
		});
		_dynamic_tag($scope2_id, "#text/3", row.card ? Card : "span", { label: "dynamic" }, _content_resume("__tests__/template.marko_7*content", () => {
			const $scope7_id = _scope_id();
			const $scope7_reason = _scope_reason();
			_html(`<b>${_text_mark($scope7_id, "#text/0", row.label, $wg__input_rows)} ${_text_mark($scope7_id, "#text/1", n, 2)}</b>`);
			_subscribe($for_content__n__closures, _subscribe($wi__input_rows && $for_content__row_label__closures, _scope($scope7_id, {
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:row_label/13": $wi__input_rows && 2,
				"ClosureSignalIndex:n/15": 2
			}, "__tests__/template.marko", "10:8"), "__tests__/template.marko_7_row_label#2:7/subscribe"), "__tests__/template.marko_7_n#2:11/subscribe");
		}, $scope2_id, ($scope2) => [{ row_label: row?.label }]), 0, $wg__input_rows);
		_for_of(row.tags, (tag) => {
			const $scope3_id = _scope_id();
			_dynamic_tag($scope3_id, "#text/0", row.card ? Card : "span", {
				label: tag,
				content: Label
			}, 0, 0, $wg__input_rows);
			$wi__input_rows && _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "11:6");
		}, 0, $scope2_id, "#text/4", $wg__input_rows, $wg__input_rows);
		_html("</section>");
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			n,
			Label: $wi__input_rows && Label,
			_: $wi__input_rows && _scope_with_id($scope0_id),
			"ClosureScopes:row_label/13": $wi__input_rows && $for_content__row_label__closures,
			"ClosureScopes:n/15": $for_content__n__closures
		}, "__tests__/template.marko", "4:2", {
			n: "5:8",
			Label: "6:11"
		});
	}, "id", $scope0_id, "#text/0", $wg__input_rows, $wg__input_rows, 0, 0, 1);
	$wi__input_rows && _scope($scope0_id, { Card }, "__tests__/template.marko", 0, { Card: "1:9" });
}, 1);
