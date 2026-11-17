// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div id=d0${_attr("data-p", input.p0)}></div>${_el_mark($scope0_id, "#div/0", _write_guard($scope0_reason, 1))}<div id=d1${_attr("data-p", input.p1)}></div>${_el_mark($scope0_id, "#div/1", _write_guard($scope0_reason, 2))}<div id=d2${_attr("data-p", input.p2)}></div>${_el_mark($scope0_id, "#div/2", _write_guard($scope0_reason, 3))}<div id=d3${_attr("data-p", input.p3)}></div>${_el_mark($scope0_id, "#div/3", _write_guard($scope0_reason, 4))}<div id=d4${_attr("data-p", input.p4)}></div>${_el_mark($scope0_id, "#div/4", _write_guard($scope0_reason, 5))}<div id=d5${_attr("data-p", input.p5)}></div>${_el_mark($scope0_id, "#div/5", _write_guard($scope0_reason, 6))}<div id=d6${_attr("data-p", input.p6)}></div>${_el_mark($scope0_id, "#div/6", _write_guard($scope0_reason, 7))}<div id=d7${_attr("data-p", input.p7)}></div>${_el_mark($scope0_id, "#div/7", _write_guard($scope0_reason, 8))}<div id=d8${_attr("data-p", input.p8)}></div>${_el_mark($scope0_id, "#div/8", _write_guard($scope0_reason, 9))}<div id=d9${_attr("data-p", input.p9)}></div>${_el_mark($scope0_id, "#div/9", _write_guard($scope0_reason, 10))}<div id=d10${_attr("data-p", input.p10)}></div>${_el_mark($scope0_id, "#div/10", _write_guard($scope0_reason, 11))}<div id=d11${_attr("data-p", input.p11)}></div>${_el_mark($scope0_id, "#div/11", _write_guard($scope0_reason, 12))}<div id=d12${_attr("data-p", input.p12)}></div>${_el_mark($scope0_id, "#div/12", _write_guard($scope0_reason, 13))}<div id=d13${_attr("data-p", input.p13)}></div>${_el_mark($scope0_id, "#div/13", _write_guard($scope0_reason, 14))}<div id=d14${_attr("data-p", input.p14)}></div>${_el_mark($scope0_id, "#div/14", _write_guard($scope0_reason, 15))}<div id=d15${_attr("data-p", input.p15)}></div>${_el_mark($scope0_id, "#div/15", _write_guard($scope0_reason, 16))}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button id=inc></button>${_el_mark($scope0_id, "#button/0")}`);
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
