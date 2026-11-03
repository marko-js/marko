// tags/list.marko
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", it, {}, 0, 0, $wg__input_item);
		_html("</li>");
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/list.marko", "1:6");
	}, 0, $scope0_id, "#ul/0", $wg__input_item, $wg__input_item, $wg__input_item, "</ul>", 1);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/list.marko", 0);
});

// tags/list2.marko
var list2_default = _template("__tests__/tags/list2.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 0), $wi__input_item = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ol>");
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "#text/0", it, {}, 0, 0, $wg__input_item);
		_html("</li>");
		$wi__input_item && _scope($scope1_id, {}, "__tests__/tags/list2.marko", "1:6");
	}, 0, $scope0_id, "#ol/0", $wg__input_item, $wg__input_item, $wg__input_item, "</ol>", 1);
	$wi__input_item && _scope($scope0_id, {}, "__tests__/tags/list2.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_as = _write_guard($scope0_reason, 5), $wg__input_note = _write_guard($scope0_reason, 6), $wi__input_as__OR__input_on__OR__input_bs__OR__input_note = _write_if($scope0_reason, 4), $wg__input_on__OR__input_bs = _write_guard($scope0_reason, 2), $wi__input_as = _write_if($scope0_reason, 5), $wi__input_note = _write_if($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let n = 0;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.as, (a) => {
		const $scope1_id = _scope_id();
		const $for_content__a__closures = new Set();
		let $item;
		forOf(input.bs, (b) => {
			$item = attrTags($item, { content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason(), $wg__b = _write_guard($scope2_reason, 0), $wi__b = _write_if($scope2_reason, 0);
				const $scope2_id = _scope_id();
				_html(`${_text_resume($scope2_id, "#text/0", a, $wg__input_as)}:${_text_resume($scope2_id, "#text/1", b, $wg__b * 2)}:${_text_resume($scope2_id, "#text/2", input.note, $wg__input_note * 2)}`);
				($wi__input_as__OR__input_on__OR__input_bs__OR__input_note || $wi__b) && _subscribe($wi__input_as && $for_content__a__closures, _subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: $wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:8"), "__tests__/template.marko_2_input_note#0:8/subscribe", $wg__input_as || $wg__input_note || $wg__b), "__tests__/template.marko_2_a#1:3/subscribe", $wg__input_as || $wg__input_note || $wg__b);
				$wg__input_as || $wg__input_note || $wg__b || ($wi__input_as__OR__input_on__OR__input_bs__OR__input_note || $wi__b) && _resume_branch($scope2_id);
			}, $scope1_id, () => [{ b }]) });
		});
		_dynamic_tag($scope1_id, "#text/0", input.on ? list_default : list2_default, { item: $item }, 0, 0, $wg__input_on__OR__input_bs);
		$wi__input_as__OR__input_on__OR__input_bs__OR__input_note && _scope($scope1_id, {
			a: _write_if($scope0_reason, 2) && a,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:a/13": $wi__input_as && $for_content__a__closures
		}, "__tests__/template.marko", "5:2", { a: "5:6" });
	}, 0, $scope0_id, "#text/2", _write_guard($scope0_reason, 3), $wg__input_as);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_on: _write_if($scope0_reason, 1) && input.on,
		input_bs: _write_if($scope0_reason, 0) && input.bs,
		input_note: _write_if($scope0_reason, 3) && input.note,
		n,
		"ClosureScopes:input_note/12": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_on: ["input.on"],
		input_bs: ["input.bs"],
		input_note: ["input.note"],
		n: "3:6"
	});
}, 1);
