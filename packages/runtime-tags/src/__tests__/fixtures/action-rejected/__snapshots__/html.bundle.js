// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverCount = 0;
	let count = serverCount;
	const save = _action(_resume(async () => {
		count = count + 1;
		serverCount = await rejectAfter(/* @__PURE__ */ new Error("save failed"));
	}, "a0", $scope0_id));
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<p id=draft>${_escape(count)}${_el_resume($scope0_id, "b")}</p><p id=pending>${_escape(String(save.pending))}${_el_resume($scope0_id, "c")}</p>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: count,
		f: save
	});
	_resume_branch($scope0_id);
}, 1);
