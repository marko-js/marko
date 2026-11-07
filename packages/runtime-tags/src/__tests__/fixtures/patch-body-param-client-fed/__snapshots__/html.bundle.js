// tags/card.marko
_shells({ b: "b; D ;<a> </a>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<a${_attr("href", input.href, $scope0_id, "a", $scope0_reason, 0)}>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 1)}</a>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 0))}`);
	_scope($scope0_id, {});
});

// tags/list.marko
const $template = "<button>add</button><button>rename</button><ul></ul>";
const $walks = " b b b";
const $setup$1 = [[], ["c1"]];
_shells({ c: "c !c1; b b ;<button>add</button><button>rename</button><ul></ul>" });
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_row = _write_if($scope0_reason, 0), $fg__input_row = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let items = [{
		id: "1",
		label: "one"
	}];
	_html(`<button>add</button>${_el_mark($scope0_id, "a")}<button>rename</button>${_el_mark($scope0_id, "b")}<ul>`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_dynamic_tag($scope1_id, "a", input.row, {
			id: item.id,
			label: item.label
		});
		_html("</li>");
		_patch_render($scope1_id, "c0", _filled_guard($scope0_reason, 0) && ">f");
		_scope($scope1_id, {
			d: $wi__input_row && item?.id,
			e: $wi__input_row && item?.label
		});
	}, 0, $scope0_id, "c", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "c1");
	$fg__input_row && _patch_render($scope0_id, "c2", "f");
	_patch_fill($scope0_id, "vc3", items, 1);
	_scope($scope0_id, {
		f: input.row,
		g: items
	}) || $fg__input_row && _patch_write($scope0_id, "xf", input.row, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)($walks)};${((_w0) => `${_w0}<p> </p>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	list_default({ row: attrTag({ content: _content_resume("a0", (r) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({
			label: r.label,
			href: `/x/${r.id}`
		});
		_patch_child_end();
		_write_if($scope1_reason, 0) && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id) }) });
	_patch_child_end();
	_html(`<p>${_text_mark($scope0_id, "b", input.title, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
