// tags/show-rate.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/show-rate.marko": "__tests__/tags/show-rate.marko;D ;<em> </em>" });
var show_rate_default = _template("__tests__/tags/show-rate.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.v, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/show-rate.marko", 0);
});

// shop.marko
const $template$1 = "<button> </button><button>drop</button><!><!>";
const $walks$1 = " D l b%c";
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
const $setup$1 = [[], ["__tests__/shop.marko_0"]];
_shells({
	"__tests__/shop.marko": "__tests__/shop.marko !__tests__/shop.marko_0; D l b%;<button> </button><button>drop</button><!><!>",
	"__tests__/shop.marko_1*shell": "__tests__/shop.marko_1*shell;b%;<!><!><!>",
	"__tests__/shop.marko_2*shell": "__tests__/shop.marko_2*shell;b%;<!><!><!>",
	"__tests__/shop.marko_3*shell": /*@__PURE__*/ (() => `__tests__/shop.marko_3*shell${_shell_marker(_shell_setup([[
		"__tests__/shop.marko_3_now#0:8/init",
		"__tests__/shop.marko_3_drops#0:9/init",
		"__tests__/shop.marko_3_p#0:4_drops#0:9_part#5/init",
		"__tests__/shop.marko_3_proj#0:7_now#0:8_have#7/init"
	], []], ["#childScope/3>", $setup$2]))};${/*@__PURE__*/ ((_w0) => ` D%c%l/${_w0}&`)("D l")};${/*@__PURE__*/ ((_w0) => `<span><!> <!></span>${_w0}`)($template$2)}`)()
});
var shop_default = _template("__tests__/shop.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $now__closures = new Set();
	const $drops__closures = new Set();
	const $global$1 = $global();
	const p = $global$1.data.player;
	const proj = p.rate * 2;
	let now = 0;
	let drops = {};
	_html(`<button>${_text_resume($scope0_id, "#text/1", now)}</button>${_el_resume($scope0_id, "#button/0")}<button>drop</button>${_el_resume($scope0_id, "#button/2")}`);
	_for_of(UPGRADES, (u) => {
		const $scope1_id = _scope_id();
		const owned = p.owned.includes(u.id);
		_if(() => {
			if (u.parts && !owned) {
				const $scope2_id = _scope_id();
				_for_of(u.parts, (part) => {
					const $scope3_id = _scope_id();
					_patch_fill($scope3_id, "PatchFill:__tests__/shop.marko_fill4", part);
					const have = withDrops(bankCount(p, part), drops, part);
					const live = have + now * proj;
					_html(`<span${live < 2 ? " class=short" : ""}>${_text_resume($scope3_id, "#text/1", part, 1, 0, 0)} ${_text_resume($scope3_id, "#text/2", have, 2)}</span>${_el_resume($scope3_id, "#span/0")}`);
					const $childScope = _peek_scope_id($scope3_id, "#childScope/3", 0);
					show_rate_default({ v: proj });
					_patch_child_end();
					_subscribe($drops__closures, _subscribe($now__closures, _scope($scope3_id, {
						part,
						have,
						_: _scope_with_id($scope2_id),
						"#childScope/3": _existing_scope($childScope)
					}, "__tests__/shop.marko", "20:6", {
						part: "20:10",
						have: "21:14"
					}), "__tests__/shop.marko_3_now#0:8/subscribe"), "__tests__/shop.marko_3_drops#0:9/subscribe");
				}, 0, $scope2_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/shop.marko_3*shell", 0, 0);
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/shop.marko", "19:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $scope0_page, void 0, void 0, void 0, ["__tests__/shop.marko_2*shell"]);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/shop.marko", "17:2");
	}, 0, $scope0_id, "#text/3", 1, void 0, void 0, void 0, void 0, "__tests__/shop.marko_1*shell", 0, 0);
	_fill_global_subscribe("__tests__/shop.marko_0_$global_data#6", $scope0_id);
	_script($scope0_id, "__tests__/shop.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/shop.marko_fill2", now, 1);
	_patch_fill($scope0_id, "PatchFill:__tests__/shop.marko_fill3", drops, 1);
	_scope($scope0_id, {
		p,
		proj,
		now,
		drops,
		"ClosureScopes:now/13": $now__closures,
		"ClosureScopes:drops/14": $drops__closures
	}, "__tests__/shop.marko", 0, {
		p: "11:8",
		proj: "12:8",
		now: "13:6",
		drops: "14:6"
	}) || (_patch_fill($scope0_id, "PatchFill:__tests__/shop.marko_fill0", p), _patch_fill($scope0_id, "PatchFill:__tests__/shop.marko_fill1", proj));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Shop_withLoadAssets = withLoadAssets(() => shop_default, "__tests__/shop.marko", flush, "ready:__tests__/shop.marko");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&b`)($walks$1)};${((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	$Shop_withLoadAssets({});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
