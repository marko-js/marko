// node_modules/probe-elements/define/probe-badge.js
var ProbeBadge = class extends HTMLElement {
	static observedAttributes = [
		"label",
		"count",
		"disabled"
	];
	constructor() {
		super();
		this.attachShadow({ mode: "open" }).innerHTML = "<button type=\"button\"></button><slot></slot>";
		this.button = this.shadowRoot.querySelector("button");
	}
	connectedCallback() {
		this.button.addEventListener("click", this);
		this.render();
	}
	disconnectedCallback() {
		this.button.removeEventListener("click", this);
	}
	attributeChangedCallback() {
		this.render();
	}
	handleEvent() {
		this.dispatchEvent(new CustomEvent("count-change", {
			detail: Number(this.getAttribute("count") || 0) + 1,
			bubbles: true
		}));
	}
	render() {
		this.button.textContent = `${this.getAttribute("label") || "Likes"}: ${Number(this.getAttribute("count") || 0)}`;
		this.button.disabled = this.hasAttribute("disabled");
	}
};
customElements.define("probe-badge", ProbeBadge);

// template.marko
const $template = "<probe-badge><span><!> on this post</span></probe-badge><output> </output><button id=reset>Reset</button><button id=toggle>Toggle disabled</button>";
const $walks = " E%mD l b b";
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	_attr($scope["#probe-badge/0"], "count", $scope.count);
	_text($scope["#text/2"], $scope.count);
});
const $label = /*@__PURE__*/ _let("label/6", ($scope) => {
	_attr($scope["#probe-badge/0"], "label", $scope.label);
	_text($scope["#text/1"], $scope.label);
});
const $disabled = /*@__PURE__*/ _let("disabled/7", ($scope) => _attr($scope["#probe-badge/0"], "disabled", $scope.disabled));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#probe-badge/0"], "count-change", function(event) {
		$count($scope, event.detail);
	});
	_on($scope["#button/3"], "click", function() {
		$count($scope, 5);
		$label($scope, "Votes");
	});
	_on($scope["#button/4"], "click", function() {
		$disabled($scope, !$scope.disabled);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$label($scope, "Likes");
	$disabled($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
