// tags/card.marko
const wrapper = "section";
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card>${_text_mark($scope0_id, "#text/0", input.title, _write_guard($scope0_reason, 0))}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	card_default({ title: "default" });
	_dynamic_tag($scope0_id, "#text/1", wrapper, { class: "named" }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("body");
	}, $scope0_id), 0, 0);
	_dynamic_tag($scope0_id, "#text/2", input.same ? card_default : card_default, { title: "same file" }, 0, 0, _write_guard($scope0_reason, 1));
	_dynamic_tag($scope0_id, "#text/3", input.same ? input.other ? card_default : card_default : card_default, { title: "listed once" }, 0, 0, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_same: _write_if($scope0_reason, 2) && input.same,
		input_other: _write_if($scope0_reason, 1) && input.other
	}, "__tests__/template.marko", 0, {
		input_same: ["input.same"],
		input_other: ["input.other"]
	});
}, 1);
