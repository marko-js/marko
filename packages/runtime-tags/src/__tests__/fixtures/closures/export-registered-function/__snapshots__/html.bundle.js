// template.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
const whisper = _resume((message) => message.toLowerCase(), "a1");
_resume(shout, "a0");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loud = shout;
	let quiet = whisper;
	let message = "Hello";
	_html(`<button>up</button>${_el_resume($scope0_id, "a")}<button>down</button>${_el_resume($scope0_id, "b")}<div>${_text_resume($scope0_id, "c", message)}</div>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: loud,
		e: quiet,
		f: message
	});
}, 1);
