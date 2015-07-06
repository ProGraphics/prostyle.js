/*!
 * @license: MIT License - See https://github.com/GaryChamberlain/pro-motion-flow-pageStack/LICENSE
 * @author: Gary Chamberlain, gary@pro.graphics.
 **/

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Pro;
(function (Pro) {
    var Motion;
    (function (Motion) {
        var Extensions;
        (function (Extensions) {
            var Flows;
            (function (Flows) {
                var pageStack;
                (function (pageStack) {
                    var Models = Pro.Motion.Models;
                    var Extension = (function (_super) {
                        __extends(Extension, _super);
                        function Extension(story, placement, defaultPageClass, pageAspectRatio, stacks) {
                            _super.call(this, story, "pageStack", placement, defaultPageClass, pageAspectRatio, "pageStackPage");
                            this.stacks = stacks;
                        }
                        Extension.defaultStacksJson = {
                            current: {
                                position: [0, 0, 0],
                                rotation: [0, 0, 0],
                                scale: 100,
                                opacity: 100
                            },
                            future: {
                                position: [140, 0, -200],
                                rotation: [0, -10, 5],
                                scale: 100,
                                opacity: 80,
                                offset: {
                                    position: [130, 80, -200],
                                    rotation: [0, -5, 2],
                                    scale: 100,
                                    opacity: 50
                                }
                            },
                            past: {
                                position: [-140, 0, -200],
                                rotation: [0, 10, -5],
                                scale: 100,
                                opacity: 80,
                                offset: {
                                    position: [-130, 80, -200],
                                    rotation: [0, 5, -2],
                                    scale: 100,
                                    opacity: 50
                                }
                            }
                        };
                        return Extension;
                    })(Models.Flows.PlacementFlow);
                    pageStack.Extension = Extension;
                })(pageStack = Flows.pageStack || (Flows.pageStack = {}));
            })(Flows = Extensions.Flows || (Extensions.Flows = {}));
        })(Extensions = Motion.Extensions || (Motion.Extensions = {}));
    })(Motion = Pro.Motion || (Pro.Motion = {}));
})(Pro || (Pro = {}));
var Pro;
(function (Pro) {
    var Motion;
    (function (Motion) {
        var Extensions;
        (function (Extensions) {
            var Flows;
            (function (Flows) {
                var pageStack;
                (function (pageStack) {
                    var Render = Pro.Motion.Render;
                    var Renderer = (function (_super) {
                        __extends(Renderer, _super);
                        function Renderer(pageStackFlow, cameraElem, flowIndex) {
                            _super.call(this, pageStackFlow, cameraElem, flowIndex);
                            this.pageStackFlow = pageStackFlow;
                        }
                        Renderer.prototype.initializePages = function (timeline) {
                            var _this = this;
                            var pageSize = this.cameraElem.size.getContainedSize(this.pageStackFlow.pageAspectRatio);
                            this.pageElems.forEach(function (pageElem, index) {
                                var css = {
                                    width: pageSize.width,
                                    height: pageSize.height,
                                    perspective: 10000
                                };
                                timeline.set(_this.pageElems[index].div, css, "initialize");
                            });
                        };
                        Renderer.prototype.generatePageMovement = function (timeline, label, pageIndex) {
                            var current = this.pageStackFlow.stacks.current;
                            var future = this.pageStackFlow.stacks.future;
                            var futureOffset = this.pageStackFlow.stacks.futureOffset;
                            var past = this.pageStackFlow.stacks.past;
                            var pastOffset = this.pageStackFlow.stacks.pastOffset;
                            var pageSize = this.cameraElem.size.getContainedSize(this.pageStackFlow.pageAspectRatio);
                            var css = current.renderCss(pageSize);
                            this.applyCss(timeline, this.pageElems[pageIndex].div, label, 1, css, Expo.easeOut);
                            past = past.duplicate();
                            for (var i = pageIndex - 1; i >= 0; i--) {
                                css = past.renderCss(pageSize);
                                this.applyCss(timeline, this.pageElems[i].div, label, 1, css, Expo.easeOut);
                                past.adjust(pastOffset);
                            }
                            future = future.duplicate();
                            for (var i = pageIndex + 1; i < this.pageElems.length; i++) {
                                css = future.renderCss(pageSize);
                                this.applyCss(timeline, this.pageElems[i].div, label, 1, css, Expo.easeOut);
                                future.adjust(futureOffset);
                            }
                        };
                        Renderer.prototype.applyCss = function (timeline, div, label, duration, css, ease) {
                            if (label === "initialize") {
                                timeline.set(div, css, label);
                            }
                            else {
                                css.ease = ease;
                                timeline.to(div, duration, css, label);
                            }
                        };
                        return Renderer;
                    })(Render.Flows.PlacementFlow);
                    pageStack.Renderer = Renderer;
                })(pageStack = Flows.pageStack || (Flows.pageStack = {}));
            })(Flows = Extensions.Flows || (Extensions.Flows = {}));
        })(Extensions = Motion.Extensions || (Motion.Extensions = {}));
    })(Motion = Pro.Motion || (Pro.Motion = {}));
})(Pro || (Pro = {}));
var Pro;
(function (Pro) {
    var Motion;
    (function (Motion) {
        var Extensions;
        (function (Extensions) {
            var Flows;
            (function (Flows) {
                var pageStack;
                (function (pageStack) {
                    var Util = Pro.Motion.Util;
                    function readJson(story, json) {
                        var placement = Motion.Types.Placement.fromJson(Util.getSetup(json, "placement"));
                        var pageAspectRatio = Util.convertToNumber(Util.getSetup(json, "pageAspectRatio"), 4 / 3);
                        var stacks = Motion.Types.Stacks.fromJson(Util.getSetup(json, "stacks") || pageStack.Extension.defaultStacksJson);
                        return new pageStack.Extension(story, placement, Util.getSetup(json, "defaultPageClass"), pageAspectRatio, stacks);
                    }
                    pageStack.readJson = readJson;
                    function writeJson(flow, json) {
                        var setup = {};
                        if (flow.defaultPageClass !== undefined)
                            setup.defaultPageClass = flow.defaultPageClass;
                    }
                    pageStack.writeJson = writeJson;
                })(pageStack = Flows.pageStack || (Flows.pageStack = {}));
            })(Flows = Extensions.Flows || (Extensions.Flows = {}));
        })(Extensions = Motion.Extensions || (Motion.Extensions = {}));
    })(Motion = Pro.Motion || (Pro.Motion = {}));
})(Pro || (Pro = {}));
//# sourceMappingURL=pro.motion.flow.pageStack.js.map