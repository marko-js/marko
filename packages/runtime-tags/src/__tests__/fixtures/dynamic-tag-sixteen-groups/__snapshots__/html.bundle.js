// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_p = _write_guard($scope0_reason, 1), $wg__input_p2 = _write_guard($scope0_reason, 2), $wg__input_p3 = _write_guard($scope0_reason, 3), $wg__input_p4 = _write_guard($scope0_reason, 4), $wg__input_p5 = _write_guard($scope0_reason, 5), $wg__input_p6 = _write_guard($scope0_reason, 6), $wg__input_p7 = _write_guard($scope0_reason, 7), $wg__input_p8 = _write_guard($scope0_reason, 8), $wg__input_p9 = _write_guard($scope0_reason, 9), $wg__input_p10 = _write_guard($scope0_reason, 10), $wg__input_p11 = _write_guard($scope0_reason, 11), $wg__input_p12 = _write_guard($scope0_reason, 12), $wg__input_p13 = _write_guard($scope0_reason, 13), $wg__input_p14 = _write_guard($scope0_reason, 14), $wg__input_p15 = _write_guard($scope0_reason, 15), $wg__input_p16 = _write_guard($scope0_reason, 16);
	const $scope0_id = _scope_id();
	_html(`<div id=d0${_attr("data-p", input.p0)}></div>${_el_resume($scope0_id, "a", $wg__input_p)}<div id=d1${_attr("data-p", input.p1)}></div>${_el_resume($scope0_id, "b", $wg__input_p2)}<div id=d2${_attr("data-p", input.p2)}></div>${_el_resume($scope0_id, "c", $wg__input_p3)}<div id=d3${_attr("data-p", input.p3)}></div>${_el_resume($scope0_id, "d", $wg__input_p4)}<div id=d4${_attr("data-p", input.p4)}></div>${_el_resume($scope0_id, "e", $wg__input_p5)}<div id=d5${_attr("data-p", input.p5)}></div>${_el_resume($scope0_id, "f", $wg__input_p6)}<div id=d6${_attr("data-p", input.p6)}></div>${_el_resume($scope0_id, "g", $wg__input_p7)}<div id=d7${_attr("data-p", input.p7)}></div>${_el_resume($scope0_id, "h", $wg__input_p8)}<div id=d8${_attr("data-p", input.p8)}></div>${_el_resume($scope0_id, "i", $wg__input_p9)}<div id=d9${_attr("data-p", input.p9)}></div>${_el_resume($scope0_id, "j", $wg__input_p10)}<div id=d10${_attr("data-p", input.p10)}></div>${_el_resume($scope0_id, "k", $wg__input_p11)}<div id=d11${_attr("data-p", input.p11)}></div>${_el_resume($scope0_id, "l", $wg__input_p12)}<div id=d12${_attr("data-p", input.p12)}></div>${_el_resume($scope0_id, "m", $wg__input_p13)}<div id=d13${_attr("data-p", input.p13)}></div>${_el_resume($scope0_id, "n", $wg__input_p14)}<div id=d14${_attr("data-p", input.p14)}></div>${_el_resume($scope0_id, "o", $wg__input_p15)}<div id=d15${_attr("data-p", input.p15)}></div>${_el_resume($scope0_id, "p", $wg__input_p16)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=inc></button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", child_default, {
		p0: `v0-${n}`,
		p1: `v1-${n}`,
		p2: `v2-${n}`,
		p3: `v3-${n}`,
		p4: `v4-${n}`,
		p5: `v5-${n}`,
		p6: `v6-${n}`,
		p7: `v7-${n}`,
		p8: `v8-${n}`,
		p9: `v9-${n}`,
		p10: `v10-${n}`,
		p11: `v11-${n}`,
		p12: `v12-${n}`,
		p13: `v13-${n}`,
		p14: `v14-${n}`,
		p15: `v15-${n}`
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: n });
}, 1);
