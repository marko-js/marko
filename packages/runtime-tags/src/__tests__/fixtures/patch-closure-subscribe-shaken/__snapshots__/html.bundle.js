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
_shells({
	a: "a !a7; D l b%;<button> </button><button>drop</button><!><!>",
	a0: "a0;b%;<!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a2: "a2 a13 a14 a15 a16; D%c%;<span><!> <!></span>"
});
var shop_default = _template_patch("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $now__closures = /* @__PURE__ */ new Set();
	const $drops__closures = /* @__PURE__ */ new Set();
	const p = $global().data.player;
	const proj = p.rate;
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
					_patch_value($scope3_id, "a3", part);
					const have = withDrops(bankCount(p, part), drops, part);
					const live = have + now * proj;
					_html(`<span${live < 2 ? " class=short" : ""}>${_patch_text($scope3_id, "b", part, void 0, 0, 0)} ${_text_resume($scope3_id, "c", have, 2)}</span>${_el_resume($scope3_id, "a")}`);
					_subscribe($drops__closures, _subscribe($now__closures, _scope($scope3_id, {
						e: part,
						g: have,
						_: _scope_with_id($scope2_id)
					}), "a4"), "a5");
				}, 0, $scope2_id, "a", 1, void 0, void 0, void 0, void 0, "a2", 0, 0);
				_scope($scope2_id, { _: _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $scope0_page, void 0, void 0, void 0, ["a1"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "d", 1, void 0, void 0, void 0, void 0, "a0", 0, 0);
	_fill_global_subscribe("a6", $scope0_id);
	_script($scope0_id, "a7");
	_patch_value($scope0_id, "a10", now, 1);
	_patch_value($scope0_id, "a11", drops, 1);
	$scope0_page ? _scope($scope0_id, {
		e: p,
		k: proj,
		l: now,
		m: drops,
		q: $now__closures,
		r: $drops__closures
	}) : (_patch_value($scope0_id, "a8", p), _patch_value($scope0_id, "a9", proj));
});

// template.marko
const $Shop_withLoadAssets = withLoadAssets(shop_default, flush, "_a");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `b%b/${_w0}&b`)($walks)};${((_w0) => `<!><!>${_w0}<!>`)($template)}`)() });
var template_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Shop_withLoadAssets({});
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
