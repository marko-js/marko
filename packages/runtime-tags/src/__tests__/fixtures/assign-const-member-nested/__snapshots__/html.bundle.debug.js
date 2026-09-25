// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const live = {
		inner: { open: false },
		label: "live"
	};
	_html(`<span>${_escape(live.label)}</span><button class=open>open</button>${_el_resume($scope0_id, "#button/1")}<button class=read>read</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_live_inner#5");
	_scope($scope0_id, { live_inner: live.inner }, "__tests__/template.marko", 0, { live_inner: ["live.inner", "1:8"] });
}, 1);
