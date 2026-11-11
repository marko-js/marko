// tags/child.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup$1 = [[], []];
_shells({
	b: "b;b%b%;<!><!><!><!>",
	b1: "b1;D ;<i> </i>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_show__OR__input_items = _unfilled_if($scope0_reason, 0), $fg__input_b = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<i>${_text_mark($scope1_id, "a", input.b, 1, $scope0_reason, 3)}</i>`);
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), 1, 0, 0, ["b1"], $scope0_reason, 2);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 4);
		$fg__input_items && _unfilled_if($scope0_reason, 3) && _patch_write($scope2_id, "xc", item, !_server_guard($scope0_reason, 4));
		const d = input.b + item;
		_html(`<p>${_text_mark($scope2_id, "a", d, 1, $scope0_reason, 1)}</p>`);
		_patch_render($scope2_id, "b3", ((_filled_guard($scope0_reason, 3) ? " >f" : "") + ($fg__input_items ? " c" : "")).slice(1), $scope0_reason, 1);
		_scope($scope2_id, {
			c: _unfilled_if($scope0_reason, 1) && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "b2", $scope0_reason, 4);
	$fg__input_b && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "b0", "f");
	$fg__input_b && _client_guard($scope0_reason, 4) && _patch_render($scope0_id, "b4", "f");
	_scope($scope0_id, { f: ($ui__input_show__OR__input_items || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b }) || $fg__input_b && $ui__input_show__OR__input_items && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 3));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button><button class=s>s</button>`)($template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_b = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let show = true;
	_set_scope_reason(570 | $uf__input_b << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		b: input.b,
		items: list,
		show
	});
	_patch_child_end();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 4) << 5 | $uf__input_b << 7 | _updates_from($scope0_reason, 3) << 9);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	child_default({
		b: input.b,
		items: input.items,
		show: input.show
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "c")}<button class=s>s</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: list,
		k: show,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
