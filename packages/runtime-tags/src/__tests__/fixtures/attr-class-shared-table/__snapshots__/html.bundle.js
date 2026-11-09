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
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a__OR__input_b = _write_guard($scope0_reason, 0), $wi__input_a__OR__input_b = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${$class[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></div>${_el_mark($scope0_id, "a", $wg__input_a__OR__input_b)}<span${$class[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></span>${_el_mark($scope0_id, "b", $wg__input_a__OR__input_b)}<p${$class[(input.b ? 1 : 0) + (input.a ? 2 : 0)]}></p>${_el_mark($scope0_id, "c", $wg__input_a__OR__input_b)}`);
	_for_of([1, 2], () => {
		const $scope1_id = _scope_id();
		_html(`<li${$class[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></li>${_el_mark($scope1_id, "a", $wg__input_a__OR__input_b)}`);
		$wi__input_a__OR__input_b && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "d", $wg__input_a__OR__input_b, 0, 0, 0, 1);
	_html(`<em class=${$class2[(input.a ? 1 : 0) + (input.b ? 2 : 0)]}></em>${_el_mark($scope0_id, "e", $wg__input_a__OR__input_b)}<b class=${$class2[(input.b ? 1 : 0) + (input.a ? 2 : 0)]}></b>${_el_mark($scope0_id, "f", $wg__input_a__OR__input_b)}`);
	$wi__input_a__OR__input_b && _scope($scope0_id, {
		i: _write_if($scope0_reason, 2) && input.a,
		j: _write_if($scope0_reason, 1) && input.b
	});
}, 1);
