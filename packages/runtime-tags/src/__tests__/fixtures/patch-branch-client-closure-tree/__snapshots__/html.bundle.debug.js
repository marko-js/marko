// tags/note/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/note/index.marko": "__tests__/tags/note/index.marko;D ;<p> </p>" });
var note_default = _template("__tests__/tags/note/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "#text/0", "n:" + input.text, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/note/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let show = false;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (show) {
					const $scope2_id = _scope_id();
					_html(`<span>${_text_mark($scope2_id, "#text/0", "d:" + input.title, $wg__input_title)}</span>`);
					$cg__input_title && _patch_render($scope2_id, "__tests__/template.marko_2_input_title#0:4/subscribe");
					_subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, {}, "__tests__/template.marko", "4:6"), $cg__input_title && "__tests__/template.marko_2_input_title#0:4/subscribe", $wg__input_title);
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
			note_default({ text: input.title });
			_patch_child_end();
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/setup");
			_scope($scope1_id, { "#childScope/1": $wi__input_title && _existing_scope($childScope) }, "__tests__/template.marko", "3:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:4/setup", "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		show,
		"ClosureScopes:input_title/6": $wi__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		show: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_title#4/subscribers", "input_title");
}, 1);
