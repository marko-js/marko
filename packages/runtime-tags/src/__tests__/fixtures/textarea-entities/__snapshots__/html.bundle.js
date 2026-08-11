// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_v = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<textarea id=body>${_textarea_value("<p>hi & <b> ©")}</textarea><textarea id=mixed>${_textarea_value(`&start ${input.v} &end`)}</textarea>${_el_resume($scope0_id, "b", $sg__input_v)}<textarea id=quasi>${_textarea_value(`pre&mid-${input.v}-post&end`)}</textarea>${_el_resume($scope0_id, "c", $sg__input_v)}<p id=text>&lt;p&gt;hi &amp; &copy;</p>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
