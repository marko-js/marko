// template.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
const whisper = _resume((message) => message.toLowerCase(), "__tests__/template.marko_0/export/whisper");
_resume(shout, "__tests__/template.marko_0/export/shout");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let loud = shout;
	let quiet = whisper;
	let message = "Hello";
	_html(`<button>up</button>${_el_resume($scope0_id, "#button/0")}<button>down</button>${_el_resume($scope0_id, "#button/1")}<div>${_text_resume($scope0_id, "#text/2", message)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		loud,
		quiet,
		message
	}, "__tests__/template.marko", 0, {
		loud: "4:6",
		quiet: "5:6",
		message: "6:6"
	});
	_resume_branch($scope0_id);
}, 1);
