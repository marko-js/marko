// tags/inner.marko
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let focused = 0;
	const focus = _resume(() => {
		focused++;
	}, "__tests__/tags/inner.marko_0/focus", $scope0_id);
	_html(`<p>focused ${_text_resume($scope0_id, "#text/0", focused, 2)}</p>`);
	const $return = focus;
	_scope($scope0_id, { focused }, "__tests__/tags/inner.marko", 0, { focused: "1:6" });
	return $return;
});

// child.marko
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let focus = inner_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/child.marko_0_focus#6/var");
	_html(`<span>${_text_resume($scope0_id, "#text/2", input.label, _serialize_guard($scope0_reason, 0))}</span>`);
	const $return = focus;
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/child.marko", 0);
	return $return;
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mounted = false;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (mounted) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			let focusChild = $Child_withLoadAssets({ label: "x" });
			_var($scope1_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_1_focusChild#4/var");
			_html(`<button class=focus>focus</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				focusChild,
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2", { focusChild: "6:10" });
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { mounted }, "__tests__/template.marko", 0, { mounted: "3:6" });
}, 1);
