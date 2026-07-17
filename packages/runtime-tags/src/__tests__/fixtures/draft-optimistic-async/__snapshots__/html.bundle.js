// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverCount = 0;
	let count = serverCount;
	const increment = _action(_resume(async () => {
		count = count + 5;
		serverCount = await resolveAfter(serverCount + 1);
	}, "a0", $scope0_id));
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<p id=draft>${_escape(count)}${_el_resume($scope0_id, "b")}</p><p id=server>${_escape(serverCount)}${_el_resume($scope0_id, "c")}</p><p id=pending>${_escape(String(increment.pending))}${_el_resume($scope0_id, "d")}</p>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: serverCount,
		f: count,
		g: increment
	});
	_resume_branch($scope0_id);
}, 1);
