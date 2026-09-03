// template.marko
const key = "bump";
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const handlers = { [key]: _resume(function() {
		n++;
	}, "a0", $scope0_id) };
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}<div>${_text_resume($scope0_id, "b", n)}</div>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: n,
		d: handlers
	});
}, 1);
