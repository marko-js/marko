// tags/widget/tags/inner/index.marko
const $template = "<button class=bump>+</button>";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0; ;<button class=bump>+</button>" });
_stateful_return("c");
var inner_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=bump>+</button>${_el_resume($scope0_id, "a")}`);
	const $return = n;
	_script($scope0_id, "c0");
	_patch_fill($scope0_id, "vc1", n, 1);
	_scope($scope0_id, { b: n });
	return $return;
});

// tags/widget/index.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `0${_w0}&D l`)(" b")};${((_w0) => `${_w0}<em> </em>`)($template)}`)() });
var widget_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a", 0, 1);
	let v = inner_default({});
	_var($scope0_id, "b", $childScope, "b0");
	_patch_child_end();
	_html(`<em>${_text_resume($scope0_id, "c", v)}</em>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button class=toggle>t</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_patch_child($scope1_id, "a", 0);
			widget_default({});
			_patch_child_end();
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
