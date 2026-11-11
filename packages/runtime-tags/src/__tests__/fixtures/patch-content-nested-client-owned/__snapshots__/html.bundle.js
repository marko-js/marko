// tags/grand/index.marko
const $template = "<div><!></div>";
const $setup$1 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var grand_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/child/index.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `E l/${_w0}&l`)("D%l")};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template)}` });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2>`);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	grand_default({ content: input.content });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({ a: "a !a3;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	_client_guard($scope0_reason, 1);
	const $fg__input_title = _filled_guard($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$fg__input_title && _patch_render($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: input.title,
		f: input.note,
		g: open,
		i: $wi__input_note && $input_note__closures
	}) || ($fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.note, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a4", "f"));
}, 1);
