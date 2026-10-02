// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let obj = { a: 1 };
	const o = obj;
	const p = o;
	const { user } = input;
	const u = user;
	_html(`<div>${_text_resume($scope0_id, "a", o.a)} ${_text_resume($scope0_id, "b", JSON.stringify(p), 2)} ${_text_resume($scope0_id, "c", u.name, _write_guard($scope0_reason, 0) * 2)}</div><button>inc</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { h: obj?.a });
}, 1);
