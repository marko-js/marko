// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let d = 1;
	const act = _action($scope0_id, "a1");
	_html(`<button>plain</button>${_el_resume($scope0_id, "a")}<button>after await</button>${_el_resume($scope0_id, "b")}<div>${_text_resume($scope0_id, "c", d)}</div>`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: d,
		g: act,
		h: _resume(async () => {
			await 0;
			d = 7;
		}, "a0", $scope0_id) || void 0
	});
}, 1);
