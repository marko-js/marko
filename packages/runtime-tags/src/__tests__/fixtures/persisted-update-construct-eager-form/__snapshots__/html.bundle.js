// data.js
const getServerProduct = typeof window === "undefined" ? (id) => ({
	id,
	title: `Product ${id}`
}) : void 0;

// tags/shared-list.marko
const subsByKey = {};
var shared_list_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = $global().data[input.name];
	const $return = value;
	_script($scope0_id, "c2");
	writeScope($scope0_id, {
		c: input.name,
		d: _state_reason() && value,
		U: _state_reason() && (_resume(function(next) {
			$global().data[input.name] = next;
			subsByKey[input.name]?.forEach((cb) => cb());
		}, "c0", $scope0_id) || void 0)
	});
	_resume_branch($scope0_id);
	return $return;
});
_renderer_shells({
	"c1": ["", ""],
	"c": ["", ""]
});

// tags/add-form.marko
var add_form_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let cart = shared_list_default({ name: "cart" });
	_var($scope0_id, "b", $childScope, "b2");
	const productId = input.productId;
	let watched = false;
	let quantity = 1;
	_html(`<button class=watch>watch${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}<form class=add><input type=hidden name=productId${_attr("value", productId)} class=pid>${_el_resume($scope0_id, "f", _serialize_guard($scope0_reason, 0))}<input${_attr_input_value($scope0_id, "g", quantity, _resume((_new_quantity) => {
		quantity = Number(_new_quantity);
	}, "b0", $scope0_id))} type=number name=quantity min=1 class=qty>${_el_resume($scope0_id, "g")}<button type=button class=plus>+</button>${_el_resume($scope0_id, "h")}</form>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "b3");
	writeScope($scope0_id, {
		l: _state_reason() && cart,
		m: productId,
		n: _state_reason() && watched,
		o: _state_reason() && quantity,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b1": [[["c"], "<button class=watch> </button><form class=add><input type=hidden name=productId class=pid><input type=number name=quantity min=1 class=qty><button type=button class=plus>+</button></form>"], [
		"0",
		["c"],
		"& D l D b b l"
	]],
	"b": [[["c"], "<button class=watch> </button><form class=add><input type=hidden name=productId class=pid><input type=number name=quantity min=1 class=qty><button type=button class=plus>+</button></form>"], [
		"0",
		["c"],
		"& D l D b b l"
	]]
});

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_productId = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $input_productId__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Item = { content: _content("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const product = getServerProduct?.(input.productId);
		_html(`<section class=item><h2 class=title>${_escape(_hole_value($scope1_id, "Qa", product.title, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_productId)}</h2>`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason($sg__input_productId);
		add_form_default({ productId: product.id });
		_html("</section>");
		$sg__input_productId | _persisted_reason() && _subscribe($sg__input_productId && $input_productId__closures, writeScope($scope1_id, {
			_: $sg__input_productId && _scope_with_id($scope0_id),
			b: _existing_scope($childScope)
		}));
		_resume_branch($scope1_id);
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "item" ? Item : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		g: _state_reason() && count,
		k: $sg__input_productId && $input_productId__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": [[
		"<section class=item><h2 class=title> </h2>",
		["b"],
		"</section>"
	], [
		"E l/",
		["b"],
		"&l"
	]],
	"a3": [[
		"<section class=item><h2 class=title> </h2>",
		["b"],
		"</section>"
	], [
		"E l/",
		["b"],
		"&l"
	]],
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
