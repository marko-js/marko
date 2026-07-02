// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let total = 0;
	let seen = "";
	forOf([
		1,
		2,
		3
	], (i) => {
		const $scope1_id = _scope_id();
		_html(`<button>pick ${_escape(i)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			d: i,
			_: _scope_with_id($scope0_id)
		});
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "b")}<div class=total>${_escape(total)}${_el_resume($scope0_id, "c")}</div><div class=seen>${_escape(seen)}${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: total,
		f: seen
	});
	_resume_branch($scope0_id);
}, 1);
