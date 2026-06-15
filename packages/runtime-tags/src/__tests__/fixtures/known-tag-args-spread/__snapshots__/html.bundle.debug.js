// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input = _serialize_guard($scope0_reason, 0), $si__input = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input__closures = new Set();
	let x = 1;
	const args = [x, 2];
	const MyTag = { content: _content("__tests__/template.marko_1_content", (a, b) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__b = _serialize_guard($scope1_reason, 2);
		_html(`<div>${_escape(a)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 1))}|${_sep($sg__b)}${_escape(b)}${_el_resume($scope1_id, "#text/1", $sg__b)}|${_sep($sg__input)}${_escape(JSON.stringify(input))}${_el_resume($scope1_id, "#text/2", $sg__input)}</div>`);
		(_serialize_if($scope0_reason, 0) || _serialize_if($scope1_reason, 0)) && _subscribe($si__input && $input__closures, writeScope($scope1_id, { _: $si__input && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"));
		_resume_branch($scope1_id);
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	MyTag.content(...args);
	MyTag.content(7, 8, 9);
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(1);
	let $cgrp;
	if (x) {
		$cgrp = attrTag({ y: 1 });
	} else {
		$cgrp = attrTag({ y: 2 });
	}
	MyTag.content(...args, {
		cgrp: $cgrp,
		row: attrTag({ r: x })
	});
	_html(`<button>inc <!>${_escape(x)}${_el_resume($scope0_id, "#text/4")}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_x");
	writeScope($scope0_id, {
		x,
		"ClosureScopes:input": $si__input && $input__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
