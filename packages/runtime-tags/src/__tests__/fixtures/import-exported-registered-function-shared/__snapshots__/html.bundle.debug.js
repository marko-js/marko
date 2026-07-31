// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var greeting_default = _template("__tests__/tags/greeting.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html_opens("__tests__/tags/greeting.marko:5:1"), _html(`<div>${_escape(input.message)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/greeting.marko", 0);
});

// tags/panel.marko
_resume(shout, "__tests__/tags/greeting.marko_0/export/shout");
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let format = shout;
	let message = "panel";
	_html_opens("__tests__/tags/panel.marko:5:1"), _html(`<button>panel</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	greeting_default({ message });
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	writeScope($scope0_id, {
		format,
		message,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/panel.marko", 0, {
		format: "3:6",
		message: "4:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
_resume(shout, "__tests__/tags/greeting.marko_0/export/shout");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let format = shout;
	let message = "page";
	_html_opens("__tests__/template.marko:5:1"), _html(`<button>page</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	greeting_default({ message });
	panel_default({});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		format,
		message,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		format: "3:6",
		message: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
