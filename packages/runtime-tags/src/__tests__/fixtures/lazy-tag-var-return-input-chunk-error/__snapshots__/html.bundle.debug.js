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
	_html(`<button class=mount>mount</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (mounted) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				_scope_reason();
				const $childScope = _peek_scope_id();
				let focusChild = $Child_withLoadAssets({ label: "x" });
				_var($scope2_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_2_focusChild#4/var");
				_html(`<button class=focus>focus</button>${_el_resume($scope2_id, "#button/3")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, {
					focusChild,
					"#childScope/1": _existing_scope($childScope)
				}, "__tests__/template.marko", "6:4", { focusChild: "7:12" });
			}, $scope1_id), {
				placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
					_scope_reason();
					const $scope3_id = _scope_id();
					_html("loading");
				}, $scope1_id) }),
				catch: attrTag({ content: _content_resume("__tests__/template.marko_4*content", (err) => {
					const $scope4_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope4_reason, 0);
					const $scope4_id = _scope_id();
					_html(`<span class=err>${_text_resume($scope4_id, "#text/0", err.message, $sg__err_message)}</span>`);
					_serialize_if($scope4_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "10:6");
				}, $scope1_id) })
			});
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
