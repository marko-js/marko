// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_p = _serialize_guard($scope0_reason, 1), $sg__input_p2 = _serialize_guard($scope0_reason, 2), $sg__input_p3 = _serialize_guard($scope0_reason, 3), $sg__input_p4 = _serialize_guard($scope0_reason, 4), $sg__input_p5 = _serialize_guard($scope0_reason, 5), $sg__input_p6 = _serialize_guard($scope0_reason, 6), $sg__input_p7 = _serialize_guard($scope0_reason, 7), $sg__input_p8 = _serialize_guard($scope0_reason, 8), $sg__input_p9 = _serialize_guard($scope0_reason, 9), $sg__input_p10 = _serialize_guard($scope0_reason, 10), $sg__input_p11 = _serialize_guard($scope0_reason, 11), $sg__input_p12 = _serialize_guard($scope0_reason, 12), $sg__input_p13 = _serialize_guard($scope0_reason, 13), $sg__input_p14 = _serialize_guard($scope0_reason, 14), $sg__input_p15 = _serialize_guard($scope0_reason, 15), $sg__input_p16 = _serialize_guard($scope0_reason, 16);
	const $scope0_id = _scope_id();
	const { p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15 } = input;
	_html(`<div id=d0${_attr("data-p", p0)}></div>${_el_resume($scope0_id, "#div/0", $sg__input_p)}<div id=d1${_attr("data-p", p1)}></div>${_el_resume($scope0_id, "#div/1", $sg__input_p2)}<div id=d2${_attr("data-p", p2)}></div>${_el_resume($scope0_id, "#div/2", $sg__input_p3)}<div id=d3${_attr("data-p", p3)}></div>${_el_resume($scope0_id, "#div/3", $sg__input_p4)}<div id=d4${_attr("data-p", p4)}></div>${_el_resume($scope0_id, "#div/4", $sg__input_p5)}<div id=d5${_attr("data-p", p5)}></div>${_el_resume($scope0_id, "#div/5", $sg__input_p6)}<div id=d6${_attr("data-p", p6)}></div>${_el_resume($scope0_id, "#div/6", $sg__input_p7)}<div id=d7${_attr("data-p", p7)}></div>${_el_resume($scope0_id, "#div/7", $sg__input_p8)}<div id=d8${_attr("data-p", p8)}></div>${_el_resume($scope0_id, "#div/8", $sg__input_p9)}<div id=d9${_attr("data-p", p9)}></div>${_el_resume($scope0_id, "#div/9", $sg__input_p10)}<div id=d10${_attr("data-p", p10)}></div>${_el_resume($scope0_id, "#div/10", $sg__input_p11)}<div id=d11${_attr("data-p", p11)}></div>${_el_resume($scope0_id, "#div/11", $sg__input_p12)}<div id=d12${_attr("data-p", p12)}></div>${_el_resume($scope0_id, "#div/12", $sg__input_p13)}<div id=d13${_attr("data-p", p13)}></div>${_el_resume($scope0_id, "#div/13", $sg__input_p14)}<div id=d14${_attr("data-p", p14)}></div>${_el_resume($scope0_id, "#div/14", $sg__input_p15)}<div id=d15${_attr("data-p", p15)}></div>${_el_resume($scope0_id, "#div/15", $sg__input_p16)}`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=inc></button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", n >= 0 ? child_default : null, {
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
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "3:6" });
}, 1);
