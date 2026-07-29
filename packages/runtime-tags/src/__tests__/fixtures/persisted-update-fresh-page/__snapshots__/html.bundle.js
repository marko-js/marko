// data.js
function getProduct(id) {
	if (typeof window !== "undefined") throw new Error("getProduct is server-only");
	return {
		id,
		title: `Product ${id}`,
		price: id * 100 + .5,
		image: `/images/${id}.svg`
	};
}
function getRecommendations(id) {
	if (typeof window !== "undefined") throw new Error("getRecommendations is server-only");
	return resolveAfter([{
		id: id + 1,
		title: `Product ${id + 1}`
	}, {
		id: id + 2,
		title: `Product ${id + 2}`
	}], 1);
}
const getProducts = typeof window === "undefined" ? (ids) => ids.map((id) => ({
	id,
	title: `Product ${id}`,
	price: id * 100 + .5
})) : void 0;
const getTags = typeof window === "undefined" ? () => [
	"all",
	"dev",
	"news"
] : void 0;

// tags/shared-list.marko
const subsByKey = {};
var shared_list_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = $global().data[input.name];
	const $return = value;
	_script($scope0_id, "d2");
	writeScope($scope0_id, {
		c: input.name,
		d: _seed_fill(_state_reason() && value),
		U: _state_reason() && (_resume(function(next) {
			$global().data[input.name] = next;
			subsByKey[input.name]?.forEach((cb) => cb());
		}, "d0", $scope0_id) || void 0)
	});
	_resume_branch($scope0_id);
	return $return;
});
_renderer_shells({
	"d1": ["", ""],
	"d": ["", ""]
});

// tags/actions.marko
var actions_default = _template("b", (input) => {
	const $sg__input_id = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const productId = input.id;
	const $childScope = _peek_scope_id();
	let list = shared_list_default({ name: "cart" });
	_var($scope0_id, "b", $childScope, "b1");
	let added = 0;
	_html(`<button class=add>added <!>${_escape(added)}${_el_resume($scope0_id, "e")} of ${_sep($sg__input_id)}${_escape(productId)}${_el_resume($scope0_id, "f", $sg__input_id)} (<!>${_escape(_hole_value($scope0_id, "Qg", list.length, _state_reason()))}${_el_resume($scope0_id, "g")} in cart)</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "b2");
	writeScope($scope0_id, {
		k: productId,
		l: _seed_fill(_state_reason() && list),
		n: _seed_fill(_state_reason() && added),
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": [[["d"], "<!><button class=add>added <!> of <!> (<!> in cart)</button>"], [
		"0",
		["d"],
		"&%b Db%c%c%l"
	]],
	"b": [[["d"], "<!><button class=add>added <!> of <!> (<!> in cart)</button>"], [
		"0",
		["d"],
		"&%b Db%c%c%l"
	]]
});

// tags/layout.marko
var layout_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>${_escape(_hole_value($scope0_id, "Qb", "expand", _state_reason()))}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</aside><section>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "c0");
	_html("</section>");
	_script($scope0_id, "c2");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && open) });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"c1": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"],
	"c": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Cart = { content: _content("a8", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $childScope = _peek_scope_id();
		let list = shared_list_default({ name: "cart" });
		_var($scope1_id, "b", $childScope, "a3");
		let products = getProducts?.(list) || [];
		const entries = list.map((id) => ({
			product: products.find((p) => p.id === id),
			id
		}));
		_html("<nav class=tags>");
		_region(() => {
			forOf(getTags?.(), (tag) => {
				const $scope3_id = _scope_id();
				const label = tag.toUpperCase();
				_html(`<b${tag === $global().tag ? " class=on" : ""}${_attr("data-tag", tag)}>${_escape(label)}${_el_resume($scope3_id, "b", _persisted_reason())}</b>${_el_resume($scope3_id, "a", _persisted_reason())}`);
				_persisted_reason() && writeScope($scope3_id, {});
			});
		}, $scope1_id, "d", "a4");
		_html(`</nav>${_el_resume($scope1_id, "d", _persisted_reason())}`);
		_if(() => {
			if (!entries.length) {
				_group_site("a7");
				const $scope4_id = _scope_id();
				_html("<p class=cart>cart is empty</p>");
				writeScope($scope4_id, {});
				return 0;
			} else {
				_group_site("a6");
				const $scope2_id = _scope_id();
				_html("<ul class=cart>");
				_for_of(entries, (entry) => {
					const $scope5_id = _scope_id();
					_html(`<li>${_escape(_hole_value($scope5_id, "Qa", entry.product.title, _state_reason()))}${_el_resume($scope5_id, "a")} $<!>${_escape(_hole_value($scope5_id, "Qb", entry.product.price, _state_reason()))}${_el_resume($scope5_id, "b")}</li>`);
					writeScope($scope5_id, {});
				}, function(entry) {
					return entry.id;
				}, $scope2_id, "a", 1, 1, 1, "</ul>", 1, "a5");
				_html(`<p class=total>total $<!>${_escape(_hole_value($scope2_id, "Qb", entries.reduce((sum, e) => sum + e.product.price, 0), _state_reason()))}${_el_resume($scope2_id, "b")}</p>`);
				writeScope($scope2_id, {});
				return 1;
			}
		}, $scope1_id, "e", void 0, void 0, void 0, void 0, void 0, void 0, void 0, ["a7", "a6"]);
		writeScope($scope1_id, {
			g: _state_reason() && products,
			i: _seed_fill(_state_reason() && entries),
			a: _existing_scope($childScope)
		});
		_resume_branch($scope1_id);
	}) };
	const Item = { content: _content("a17", () => {
		const $scope6_id = _scope_id();
		const $Item_content__product_id__closures = /* @__PURE__ */ new Set();
		_scope_reason();
		const product = $global().productId && getProduct($global().productId);
		_if(() => !product ? 0 : 1, $scope6_id, "a", _persisted_reason(), _persisted_reason(), _persisted_reason(), void 0, void 0, "a0", [() => {
			const $scope9_id = _scope_id();
			_html("<h2>not found</h2>");
			_persisted_reason() && writeScope($scope9_id, {});
		}, () => {
			const $scope7_id = _scope_id();
			_html(`<img${_attr("src", _hole_value($scope7_id, "Nsrc:a", product.image, _persisted_reason()))}${_attr("alt", _hole_value($scope7_id, "Nalt:a", product.title, _persisted_reason()))} class=thumb>${_el_resume($scope7_id, "a", _persisted_reason())}<h2 class=title>${_escape(_hole_value($scope7_id, "Qb", product.title, _persisted_reason()))}${_el_resume($scope7_id, "b", _persisted_reason())}</h2><div class=price>$${_sep(_persisted_reason())}${_escape(_hole_value($scope7_id, "Qc", product.price.toFixed(2), _persisted_reason()))}${_el_resume($scope7_id, "c", _persisted_reason())}</div>`);
			_set_serialize_reason(_persisted_reason());
			const $childScope2 = _peek_scope_id();
			actions_default({ id: product.id });
			_try($scope7_id, "f", _content_resume("a12", () => {
				const $scope8_id = _scope_id();
				_scope_reason();
				_await($scope8_id, "a", getRecommendations(product.id), (recs) => {
					const $scope11_id = _scope_id();
					_html("<ul class=recs>");
					_region(() => {
						forOf(recs, (rec) => {
							const $scope12_id = _scope_id();
							_html(`<li>${_escape(rec.title)}${_el_resume($scope12_id, "a", _persisted_reason())}</li>`);
							_persisted_reason() && writeScope($scope12_id, {});
						});
					}, $scope11_id, "a", "a9");
					_html(`</ul>${_el_resume($scope11_id, "a", _persisted_reason())}`);
					_persisted_reason() && writeScope($scope11_id, {});
				}, _persisted_reason(), "a10");
				_persisted_reason() && _subscribe($Item_content__product_id__closures, writeScope($scope8_id, { _: _scope_with_id($scope7_id) }));
				_resume_branch($scope8_id);
			}, $scope7_id), { placeholder: attrTag({ content: _content_resume("a11", () => {
				_scope_reason();
				_scope_id();
				_html("loading recommendations…");
			}, $scope7_id) }) }, "a1", "a13");
			_persisted_reason() && writeScope($scope7_id, {
				_: _scope_with_id($scope6_id),
				d: _existing_scope($childScope2)
			});
		}], ["a15", "a14"], "a16");
		_persisted_reason() && writeScope($scope6_id, { j: $Item_content__product_id__closures });
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope3 = _peek_scope_id();
	layout_default({ content: $global().view === "item" ? Item : Cart });
	_script($scope0_id, "a18");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		c: _persisted_reason() && _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a10": ["<ul class=recs></ul>", " b"],
	"a19": ["<ul class=recs></ul>", " b"],
	"a15": ["<h2>not found</h2>", "b"],
	"a20": ["<h2>not found</h2>", "b"],
	"a13": ["<!><!><!>", "b%c"],
	"a12": ["<!><!><!>", "b%c"],
	"a14": [[
		"<img class=thumb><h2 class=title> </h2><div class=price>$<!></div>",
		["b"],
		"<!><!><!>"
	], [
		" bD lDb%l/",
		["b"],
		"&%b%c"
	]],
	"a21": [[
		"<img class=thumb><h2 class=title> </h2><div class=price>$<!></div>",
		["b"],
		"<!><!><!>"
	], [
		" bD lDb%l/",
		["b"],
		"&%b%c"
	]],
	"a22": ["<!><!><!>", "b%c"],
	"a17": ["<!><!><!>", "b%c"],
	"a5": ["<li><!> $<!></li>", "D%c%l"],
	"a23": ["<li><!> $<!></li>", "D%c%l"],
	"a7": ["<p class=cart>cart is empty</p>", "b"],
	"a24": ["<p class=cart>cart is empty</p>", "b"],
	"a6": ["<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l"],
	"a25": ["<ul class=cart></ul><p class=total>total $<!></p>", " bDb%l"],
	"a26": [[["d"], "<!><nav class=tags></nav><!><!>"], [
		"0",
		["d"],
		"&%b b%c"
	]],
	"a8": [[["d"], "<!><nav class=tags></nav><!><!>"], [
		"0",
		["d"],
		"&%b b%c"
	]],
	"a2": [[
		"<button class=count>clicked <!></button>",
		["c"],
		"<!>"
	], [
		" Db%l/",
		["c"],
		"&%b"
	]],
	"a": [[
		"<button class=count>clicked <!></button>",
		["c"],
		"<!>"
	], [
		" Db%l/",
		["c"],
		"&%b"
	]]
});
