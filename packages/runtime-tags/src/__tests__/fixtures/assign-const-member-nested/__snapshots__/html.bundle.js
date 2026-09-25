// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = {
		inner: { open: false },
		label: "live"
	};
	_html(`<span>${_escape(live.label)}</span><button class=open>open</button>${_el_resume($scope0_id, "b")}<button class=read>read</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { f: live.inner });
}, 1);
