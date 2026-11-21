// tags/card.marko
const wrapper = "section";
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div class=card>${_text_mark($scope0_id, "a", input.title, _write_guard($scope0_reason, 0))}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	card_default({ title: "default" });
	_dynamic_tag($scope0_id, "b", wrapper, { class: "named" }, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("body");
	}, $scope0_id), 0, 0);
	_dynamic_tag($scope0_id, "c", input.same ? card_default : card_default, { title: "same file" }, 0, 0, _write_guard($scope0_reason, 1));
	_dynamic_tag($scope0_id, "d", input.same ? input.other ? card_default : card_default : card_default, { title: "listed once" }, 0, 0, _write_guard($scope0_reason, 0));
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		g: _write_if($scope0_reason, 2) && input.same,
		h: _write_if($scope0_reason, 1) && input.other
	});
}, 1);
