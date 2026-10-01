// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0), $wi__input = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input__closures = new Set();
	let x = 1;
	const args = [x, 2];
	const MyTag = { content: _content("__tests__/template.marko_1*content", (a, b) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__a = _write_guard($scope1_reason, 1), $wg__b = _write_guard($scope1_reason, 2), $wi__a__OR__b = _write_if($scope1_reason, 0);
		_html(`<div>${_text_resume($scope1_id, "#text/0", a, $wg__a)}|${_text_resume($scope1_id, "#text/1", b, $wg__b * 2)}|${_text_resume($scope1_id, "#text/2", JSON.stringify(input), $wg__input * 2)}</div>`);
		($wi__input || $wi__a__OR__b) && _subscribe($wi__input && $input__closures, _scope($scope1_id, { _: $wi__input && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input#0:6/subscribe", $wg__input || $wg__a || $wg__b);
		$wg__input || $wg__a || $wg__b || ($wi__input || $wi__a__OR__b) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	MyTag.content(...args);
	MyTag.content(7, 8, void 0);
	_set_scope_reason(42);
	let $cgrp;
	if (x) {
		$cgrp = attrTag({ y: 1 });
	} else {
		$cgrp = attrTag({ y: 2 });
	}
	const $childScope2 = _peek_scope_id();
	MyTag.content(...args, {
		cgrp: $cgrp,
		row: attrTag({ r: x })
	});
	_html(`<button>inc ${_text_resume($scope0_id, "#text/4", x, 2)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"ClosureScopes:input/9": $wi__input && $input__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
