// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let id = 1;
	let status = "idle";
	const start = _resume(function() {
		const myId = id;
		(() => {
			throw new Error("Cannot use $signal in a server render.");
		})().onabort = () => {
			status = "aborted " + myId;
		};
		status = "started " + myId;
	}, "__tests__/template.marko_0/start", $scope0_id);
	_html(`<button id=start>start</button>${_el_resume($scope0_id, "#button/0")}<button id=next>next</button>${_el_resume($scope0_id, "#button/1")}<p>${_text_resume($scope0_id, "#text/2", status)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		id,
		start
	}, "__tests__/template.marko", 0, {
		id: "1:6",
		start: "3:8"
	});
}, 1);
