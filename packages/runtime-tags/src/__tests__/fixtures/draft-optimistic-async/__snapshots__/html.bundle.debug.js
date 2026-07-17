// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverCount = 0;
	let count = serverCount;
	const increment = _action(_resume(async () => {
		count = count + 5;
		serverCount = await resolveAfter(serverCount + 1);
	}, "__tests__/template.marko_0/increment", $scope0_id));
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<p id=draft>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</p><p id=server>${_escape(serverCount)}${_el_resume($scope0_id, "#text/2")}</p><p id=pending>${_escape(String(increment.pending))}${_el_resume($scope0_id, "#text/3")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_increment");
	writeScope($scope0_id, {
		serverCount,
		count,
		increment
	}, "__tests__/template.marko", 0, {
		serverCount: "4:6",
		count: "5:8",
		increment: "6:9"
	});
	_resume_branch($scope0_id);
}, 1);
