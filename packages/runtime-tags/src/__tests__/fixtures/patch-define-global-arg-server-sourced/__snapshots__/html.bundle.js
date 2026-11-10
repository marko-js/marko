// template.marko
const $Label_content__walks = "D l%c";
const $Label_content__template = "<p> </p><!><!>";
_shells({ a: `a !a5;${((_w0) => `b/${_w0}& b`)($Label_content__walks)};${((_w0) => `<pre id=log></pre>${_w0}<button>toggle</button>`)($Label_content__template)}` });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $open__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	let open = false;
	const Label = { content: _content("a0", ({ text }) => {
		const $scope1_id = _scope_id(), $scope1_reason = _scope_reason();
		_write_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "a", text, 1, $scope1_reason, 0)}</p>`);
		_if(() => {}, $scope1_id, "b", 1, 1, 0, 0, 1);
		_script($scope1_id, "a1", 1, 1);
		_patch_render($scope1_id, "a2", "e");
		_subscribe($open__closures, _scope($scope1_id, {
			e: text,
			_: _scope_with_id($scope0_id)
		}), "a3") || _patch_write($scope1_id, "xe", text);
	}, $scope0_id) };
	_html("<pre id=log></pre>");
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Label.content({ text: $global$1.text });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_fill_global_subscribe("a4", $scope0_id);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		c: open,
		d: $open__closures,
		a: _existing_scope($childScope)
	});
}, 1);
