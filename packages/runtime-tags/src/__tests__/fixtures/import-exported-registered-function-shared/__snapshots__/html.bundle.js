// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
var greeting_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", input.message, _write_guard($scope0_reason, 0))}</div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/panel.marko
_resume("b0", shout);
var panel_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let format = shout;
	let message = "panel";
	_html(`<button>panel</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	greeting_default({ message });
	_script($scope0_id, "c0");
	_scope($scope0_id, {
		c: format,
		d: message,
		b: _existing_scope($childScope)
	});
});

// template.marko
_resume("b0", shout);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let format = shout;
	let message = "page";
	_html(`<button>page</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	greeting_default({ message });
	panel_default({});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: format,
		e: message,
		b: _existing_scope($childScope)
	});
}, 1);
