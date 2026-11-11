// tags/grand/index.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/grand/index.marko": "__tests__/tags/grand/index.marko;D%;<div><!></div>" });
var grand_default = _template("__tests__/tags/grand/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/grand/index.marko", 0);
});

// tags/child/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/tags/child/index.marko": `__tests__/tags/child/index.marko${_shell_marker($setup$1)};${((_w0) => `E l/${_w0}&l`)("D%l")};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2)}` });
var child_default = _template("__tests__/tags/child/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_mark($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</h2>`);
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	grand_default({ content: input.content });
	_patch_child_end();
	_html("</section>");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/child/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $cg__input_note = _client_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let open = false;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({
				title: input.title,
				content: _content("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "#text/0", input.note, $wg__input_note)}</em>`);
					$cg__input_note && _patch_render($scope2_id, "__tests__/template.marko_2_input_note#0:5/subscribe");
					_subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:6"), $cg__input_note && "__tests__/template.marko_2_input_note#0:5/subscribe", $wg__input_note);
				}, $scope1_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/setup");
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:4/setup", "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		input_note: input.note,
		open,
		"ClosureScopes:input_note/8": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_note: ["input.note"],
		open: "1:6"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#5/subscribers", "input_note"));
}, 1);
