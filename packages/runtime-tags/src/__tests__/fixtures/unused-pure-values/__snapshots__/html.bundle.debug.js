// template.marko
function track(value) {
	return value;
}
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a_b = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const tracked = class {
		static made = track(3);
	};
	const keyed = { [track(4)]() {} };
	const field = class {
		[track(5)] = 1;
	};
	const called = track(input.a);
	const impureIife = (() => track(2))();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.a?.b, $sg__input_a_b)}</div>`);
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
