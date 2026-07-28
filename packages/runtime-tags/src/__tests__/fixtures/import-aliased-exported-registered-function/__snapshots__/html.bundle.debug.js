// tags/greeting.marko
const whisper = (message) => message.toLowerCase();
function shout(message) {
	return message.toUpperCase() + "!";
}
var greeting_default = _template("__tests__/tags/greeting.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_escape(input.message)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/greeting.marko", 0);
});

// template.marko
_resume(shout, "__tests__/tags/greeting.marko_0/export/shout");
_resume(whisper, "__tests__/tags/greeting.marko_0/export/whisper");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loud = shout;
	let quiet = whisper;
	let message = "Hello";
	_html(`<button>shout</button>${_el_resume($scope0_id, "#button/0")}<button>whisper</button>${_el_resume($scope0_id, "#button/1")}`);
	_set_serialize_reason(1);
	const $childScope = _peek_scope_id();
	greeting_default({ message });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		loud,
		quiet,
		message,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		loud: "3:6",
		quiet: "4:6",
		message: "5:6"
	});
	_resume_branch($scope0_id);
}, 1);
