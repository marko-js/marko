// template.marko
const $Label_content__walks = "D l%c";
const $Label_content__template = "<p> </p><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<pre id=log></pre>${_w0}<button>toggle</button>`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Label_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}& b`)($Label_content__walks)};${((_w0) => `<pre id=log></pre>${_w0}<button>toggle</button>`)($Label_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $open__closures = new Set();
	const $global$1 = $global();
	let open = false;
	const Label = { content: _content("__tests__/template.marko_1*content", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__text = _write_guard($scope1_reason, 0);
		_html(`<p>${_text_mark($scope1_id, "#text/0", text, 1, $scope1_reason, 0)}</p>`);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_mark($scope2_id, "#text/0", text, $wg__text)}</span>`);
				_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, 1, 0, 0, 1);
		_script($scope1_id, "__tests__/template.marko_1_text#4", 1, 1);
		_patch_render($scope1_id, "__tests__/template.marko_2_text#1:4/setup", "text");
		_subscribe($open__closures, _scope($scope1_id, {
			text,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { text: "2:17" }), "__tests__/template.marko_1_open#0:2/subscribe") || _patch_write($scope1_id, "PatchMarkedWrite:text", text);
	}, $scope0_id) };
	_html("<pre id=log></pre>");
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Label.content({ text: $global$1.text });
	_patch_child_end();
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_global_subscribe("__tests__/template.marko_0_$global_text#12/subscribe", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		open,
		"ClosureScopes:open/3": $open__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
