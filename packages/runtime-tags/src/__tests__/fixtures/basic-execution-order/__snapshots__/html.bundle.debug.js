// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let message = { text: "hi" };
	let show = true;
	_html(`<button>hide</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`${_escape(message.text)}${_el_resume($scope1_id, "#text/0")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { message_text: message?.text }, "__tests__/template.marko", 0, { message_text: ["message.text", "1:6"] });
	_resume_branch($scope0_id);
}, 1);
