// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let message = "hello";
	let log = "";
	_html(`<button>show</button>${_el_resume($scope0_id, "a")}<button>append</button>${_el_resume($scope0_id, "b")}<div class=message>${_text_resume($scope0_id, "c", message)}</div><div class=log>${_text_resume($scope0_id, "d", log)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: message,
		f: log
	});
}, 1);
