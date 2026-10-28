// tags/widget/tags/inner/index.marko
const $template = "<button class=bump>+</button>";
const $setup$1 = [[], ["c1"]];
_shells({ c: "c !c1; ;<button class=bump>+</button>" });
_stateful_return("c");
var inner_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=bump>+</button>${_el_resume($scope0_id, "a")}`);
	const $return = n;
	_script($scope0_id, "c1");
	const $valueChange2 = _patch_bind($scope0_id, "wU", _resume(function(v) {
		n = v;
	}, "c0", $scope0_id) || void 0, 0, 0);
	_patch_fill($scope0_id, "vc2", n, 1);
	_scope($scope0_id, {
		b: n,
		U: $valueChange2
	});
	return $return;
});

// tags/widget/index.marko
const $setup = _shell_setup([[], ["b1"]], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `0${_w0}&D l b`)(" b")};${((_w0) => `${_w0}<em> </em><button class=reset>r</button>`)($template)}`)() });
var widget_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let v = inner_default({});
	_var($scope0_id, "b", $childScope, "b0");
	_patch_child_end();
	_html(`<em>${_text_resume($scope0_id, "c", v)}</em><button class=reset>r</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b1");
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
			_patch_child(0);
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
