// template.marko
const $class = [
	"",
	" class=on",
	" class=off",
	" class=\"on off\""
];
const $class2 = [
	"x",
	"\"x on\"",
	"\"x off\"",
	"\"x on off\""
];
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${$class[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></div>${_el_mark($scope0_id, "#div/0", $wg__input_a__OR__input_b)}<span${$class[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></span>${_el_mark($scope0_id, "#span/1", $wg__input_a__OR__input_b)}<p${$class[(input.b ? 1 : 0) + (input.a ? 2 : 0)]}></p>${_el_mark($scope0_id, "#p/2", $wg__input_a__OR__input_b)}`);
	_for_of([1, 2], () => {
		const $scope1_id = _scope_id();
		_html(`<li${$class[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></li>${_el_mark($scope1_id, "#li/0", $wg__input_a__OR__input_b)}`);
		$wi__input_a__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, 0, $scope0_id, "#text/3", $wg__input_a__OR__input_b, 0, 0, 0, 1);
	_html(`<em class=${$class2[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></em>${_el_mark($scope0_id, "#em/4", $wg__input_a__OR__input_b)}<b class=${$class2[(input.b ? 1 : 0) + (input.a ? 2 : 0)]}></b>${_el_mark($scope0_id, "#b/5", $wg__input_a__OR__input_b)}`);
	$wi__input_a__OR__input_b && _scope($scope0_id, {
		a: _write_if($scope0_reason, 2) && input.a,
		b: _write_if($scope0_reason, 1) && input.b
	}, "__tests__/template.marko", 0, {
		a: "1:10",
		b: "1:13"
	});
}, 1);
