// tags/show-rate.marko
const $template$1 = "<em> </em>";
const $setup$2 = [[], []];
_shells({ c: "c;D ;<em> </em>" });
var show_rate_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.v, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// shop.marko
const $template = "<button> </button><button>drop</button><!><!>";
const $walks = " D l b%c";
function bankCount(p, id) {
	return p.bank[id];
}
function withDrops(base, drops, id) {
	return base + (drops[id] ?? 0);
}
const UPGRADES = [{
	id: "a",
	parts: ["x", "y"]
}, {
	id: "b",
	parts: ["y"]
}];
const $setup$1 = [[], ["a6"]];
_shells({
	a: "a !a6; D l b%;<button> </button><button>drop</button><!><!>",
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[
		"a12",
		"a13",
		"a14",
		"a15"
	], []], ["d>", $setup$2]))};${/*@__PURE__*/ ((_w0) => ` D%c%l/${_w0}&`)("D l")};${/*@__PURE__*/ ((_w0) => `<span><!> <!></span>${_w0}`)($template$1)}`)()
});
var shop_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $now__closures = /* @__PURE__ */ new Set();
	const $drops__closures = /* @__PURE__ */ new Set();
	const p = $global().data.player;
	const proj = p.rate * 2;
	let now = 0;
	let drops = {};
	_html(`<button>${_text_resume($scope0_id, "b", now)}</button>${_el_resume($scope0_id, "a")}<button>drop</button>${_el_resume($scope0_id, "c")}`);
	_for_of(UPGRADES, (u) => {
		const $scope1_id = _scope_id();
		const owned = p.owned.includes(u.id);
		_if(() => {
			if (u.parts && !owned) {
				const $scope2_id = _scope_id();
				_for_of(u.parts, (part) => {
					const $scope3_id = _scope_id();
					const have = withDrops(bankCount(p, part), drops, part);
					const live = have + now * proj;
					_html(`<span${live < 2 ? " class=short" : ""}>${_text_resume($scope3_id, "b", part, 1, 0, 0)} ${_text_resume($scope3_id, "c", have, 2)}</span>${_el_resume($scope3_id, "a")}`);
					const $childScope = _peek_scope_id($scope3_id, "d", 0);
					show_rate_default({ v: proj });
					_patch_child_end();
					_patch_write($scope3_id, "wf", part, 1);
					_subscribe($drops__closures, _subscribe($now__closures, _scope($scope3_id, {
						f: part,
						h: have,
						_: _scope_with_id($scope2_id),
						d: _existing_scope($childScope)
					}), "a0"), "a1");
				}, 0, $scope2_id, "a", 1, 1, 1, 0, 0, "a2", 0, 0);
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $scope0_page, 1, 0, 0, ["a4"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "d", 1, 1, 1, 0, 0, "a3", 0, 0);
	_fill_global_subscribe("a5", $scope0_id);
	_script($scope0_id, "a6");
	_patch_fill($scope0_id, "va9", now, 1);
	_patch_fill($scope0_id, "va10", drops, 1);
	_scope($scope0_id, {
		e: p,
		h: proj,
		i: now,
		j: drops,
		n: $now__closures,
		o: $drops__closures
	}) || (_patch_fill($scope0_id, "va7", p), _patch_fill($scope0_id, "va8", proj));
});

// template.marko
const $Shop_withLoadAssets = withLoadAssets(() => shop_default, "a", flush, "_a");
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	$Shop_withLoadAssets({});
	_patch_child_end();
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
