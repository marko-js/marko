// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let id = 1;
	let status = "idle";
	const start = _resume(function() {
		(() => {
			throw new Error("Cannot use $signal in a server render.");
		})().onabort = () => {
			status = "aborted 1";
		};
		status = "started 1";
	}, "a0", $scope0_id);
	_html(`<button id=start>start</button>${_el_resume($scope0_id, "a")}<button id=next>next</button>${_el_resume($scope0_id, "b")}<p>${_text_resume($scope0_id, "c", status)}</p>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: id,
		f: start
	});
}, 1);
