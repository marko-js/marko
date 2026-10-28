// tags/widget/index.marko
_shells({ c: "c !c0; D%c%;<button class=c><!>:<!></button>" });
var widget_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=c>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", n, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", n, 1);
	_scope($scope0_id, { g: n });
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=t>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_patch_child($scope1_id, "a", 0);
			widget_default({ label: "fixed" });
			_patch_child_end();
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
