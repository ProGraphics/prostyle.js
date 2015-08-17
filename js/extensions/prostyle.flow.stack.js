/*!
 * VERSION: 0.20.0
 * DATE: 17-Aug-2015
 * UPDATES AND DOCS AT: https://prostyle.io/plus/
 * 
 * This file is part of ProStyle Plus, a set of premium extensions for ProStyle. It may be
 * used for free for personal projects or licensed per website domain name for commercial use.
 * 
 * @copyright - Copyright (c) 2013-2015, Pro Graphics, Inc. All rights reserved. 
 * @license - This work is subject to the terms at https://prostyle.io/plus/license/
 * @author: Gary Chamberlain, gary@pro.graphics.
 * 
 **/

/// <reference path="../../../ts/prostyle.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Flows;
        (function (Flows) {
            var Stack;
            (function (Stack) {
                var Models = ProStyle.Models;
                var StackFlowModel = (function (_super) {
                    __extends(StackFlowModel, _super);
                    function StackFlowModel(story, placement, defaultPageClass, pageAspectRatio, stacks) {
                        _super.call(this, story, "stack", placement, defaultPageClass, pageAspectRatio, "stackedpage");
                        this.stacks = stacks;
                    }
                    StackFlowModel.prototype.serialize = function () {
                        return Stack.serialize(this);
                    };
                    StackFlowModel.prototype.createView = function (camera, flowIndex) {
                        return new Stack.StackFlowView(this, camera, flowIndex);
                    };
                    StackFlowModel.defaultStacksJson = {
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
                    return StackFlowModel;
                })(Models.Flows.PlacementFlowModel);
                Stack.StackFlowModel = StackFlowModel;
            })(Stack = Flows.Stack || (Flows.Stack = {}));
        })(Flows = Extensions.Flows || (Extensions.Flows = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="StackFlowModel.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Flows;
        (function (Flows) {
            var Stack;
            (function (Stack) {
                var Views = ProStyle.Views;
                var StackFlowView = (function (_super) {
                    __extends(StackFlowView, _super);
                    function StackFlowView(stackFlow, camera, flowIndex) {
                        _super.call(this, stackFlow, camera, flowIndex);
                        this.stackFlow = stackFlow;
                    }
                    StackFlowView.prototype.initializePages = function (timeline) {
                        var _this = this;
                        var pageSize = this.camera.size.getContainedSize(this.stackFlow.pageAspectRatio);
                        this.pages.forEach(function (pageElem, index) {
                            var css = {
                                width: pageSize.width,
                                height: pageSize.height,
                                perspective: 10000
                            };
                            timeline.set(_this.pages[index].div, css, "initialize");
                        });
                    };
                    StackFlowView.prototype.generatePageMovement = function (timeline, label, pageIndex) {
                        var current = this.stackFlow.stacks.current;
                        var future = this.stackFlow.stacks.future;
                        var futureOffset = this.stackFlow.stacks.futureOffset;
                        var past = this.stackFlow.stacks.past;
                        var pastOffset = this.stackFlow.stacks.pastOffset;
                        var pageSize = this.camera.size.getContainedSize(this.stackFlow.pageAspectRatio);
                        var css = current.renderCss(pageSize);
                        this.applyCss(timeline, this.pages[pageIndex].div, label, 1, css, Expo.easeOut);
                        past = past.duplicate();
                        for (var i = pageIndex - 1; i >= 0; i--) {
                            css = past.renderCss(pageSize);
                            this.applyCss(timeline, this.pages[i].div, label, 1, css, Expo.easeOut);
                            past.adjust(pastOffset);
                        }
                        future = future.duplicate();
                        for (var i = pageIndex + 1; i < this.pages.length; i++) {
                            css = future.renderCss(pageSize);
                            this.applyCss(timeline, this.pages[i].div, label, 1, css, Expo.easeOut);
                            future.adjust(futureOffset);
                        }
                    };
                    StackFlowView.prototype.applyCss = function (timeline, div, label, duration, css, ease) {
                        if (label === "initialize") {
                            timeline.set(div, css, label);
                        }
                        else {
                            css.ease = ease;
                            timeline.to(div, duration, css, label);
                        }
                    };
                    return StackFlowView;
                })(Views.Flows.PlacementFlowView);
                Stack.StackFlowView = StackFlowView;
            })(Stack = Flows.Stack || (Flows.Stack = {}));
        })(Flows = Extensions.Flows || (Extensions.Flows = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="StackFlowModel.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Flows;
        (function (Flows) {
            var Stack;
            (function (Stack) {
                var Util = ProStyle.Util;
                function deserialize(story, json) {
                    var placement = ProStyle.Types.Placement.fromJson(Util.getSetup(json, "placement"));
                    var pageAspectRatio = Util.convertToNumber(Util.getSetup(json, "pageAspectRatio"), 4 / 3);
                    var stacks = ProStyle.Types.Stacks.fromJson(Util.getSetup(json, "stacks") || Stack.StackFlowModel.defaultStacksJson);
                    return new Stack.StackFlowModel(story, placement, Util.getSetup(json, "defaultPageClass"), pageAspectRatio, stacks);
                }
                Stack.deserialize = deserialize;
            })(Stack = Flows.Stack || (Flows.Stack = {}));
        })(Flows = Extensions.Flows || (Extensions.Flows = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="StackFlowModel.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Flows;
        (function (Flows) {
            var Stack;
            (function (Stack) {
                function serialize(model) {
                    //TODO: write the json configuration back out.
                    // Important,
                    //   don't write current page placement values if it is default
                    //   don't write future and past page placements and their offsets if they equal the defaults
                    var json = {};
                    json.setup = {};
                    if (model.defaultPageClass !== undefined)
                        json.setup.defaultPageClass = model.defaultPageClass;
                    return json;
                }
                Stack.serialize = serialize;
            })(Stack = Flows.Stack || (Flows.Stack = {}));
        })(Flows = Extensions.Flows || (Extensions.Flows = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.flow.stack.js.map