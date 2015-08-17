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
        var Controllers;
        (function (Controllers) {
            var MouseWheel;
            (function (MouseWheel) {
                var MouseWheelController = (function (_super) {
                    __extends(MouseWheelController, _super);
                    function MouseWheelController(speed, ctrlSpeed, altSpeed, altCtrlSpeed) {
                        if (speed === void 0) { speed = 0.01; }
                        if (ctrlSpeed === void 0) { ctrlSpeed = 0.001; }
                        if (altSpeed === void 0) { altSpeed = 1; }
                        if (altCtrlSpeed === void 0) { altCtrlSpeed = 0.1; }
                        _super.call(this, "mousewheel");
                        this.speed = speed;
                        this.ctrlSpeed = ctrlSpeed;
                        this.altSpeed = altSpeed;
                        this.altCtrlSpeed = altCtrlSpeed;
                        this.wheelEventBound = undefined;
                        this.canvas = undefined;
                        this.player = undefined;
                        this.wheelEventBound = this.wheelEvent.bind(this);
                    }
                    MouseWheelController.prototype.start = function (canvas, player) {
                        this.stop();
                        this.canvas = canvas;
                        this.player = player;
                        canvas.div.addEventListener("wheel", this.wheelEventBound);
                    };
                    MouseWheelController.prototype.stop = function () {
                        if (this.player !== undefined) {
                            this.canvas.div.removeEventListener("wheel", this.wheelEventBound);
                            this.canvas = undefined;
                            this.player = undefined;
                        }
                    };
                    MouseWheelController.prototype.wheelEvent = function (e) {
                        var t;
                        var forward = ProStyle.Util.convertToNumber(e.deltaY, -1) < 0;
                        if (e.shiftKey) {
                            t = this.moveByStep(forward);
                        }
                        else {
                            var delta = (e.altKey ? (e.ctrlKey ? this.altCtrlSpeed : this.altSpeed) : (e.ctrlKey ? this.ctrlSpeed : this.speed));
                            if (!forward)
                                delta = -delta;
                            t = this.moveByTime(delta);
                        }
                        var d = this.player.timeline.totalDuration();
                        if (t < 0.01)
                            t = d;
                        else if (t > d)
                            t = 0.01;
                        this.player.timeline.totalTime(t);
                        this.player.timeline.pause(t);
                        this.player.pause();
                        e.preventDefault();
                        return false;
                    };
                    MouseWheelController.prototype.moveByStep = function (forward) {
                        var step = this.player.getCurrentStep();
                        if (forward) {
                            if (step.playerStepIndex < this.player.steps.length - 1) {
                                this.player.seekStep(this.player.steps[step.playerStepIndex + 1]);
                            }
                        }
                        else {
                            if (step.playerStepIndex > 0) {
                                this.player.seekStep(this.player.steps[step.playerStepIndex - 1]);
                            }
                        }
                        return 0;
                    };
                    MouseWheelController.prototype.moveByTime = function (delta) {
                        var t = this.player.timeline.totalTime() + delta;
                        t = Math.round(t / delta) * delta;
                        return t;
                    };
                    MouseWheelController.prototype.resize = function () {
                    };
                    MouseWheelController.prototype.serialize = function () {
                        return MouseWheel.serialize(this);
                    };
                    return MouseWheelController;
                })(ProStyle.Controllers.Controller);
                MouseWheel.MouseWheelController = MouseWheelController;
            })(MouseWheel = Controllers.MouseWheel || (Controllers.MouseWheel = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="MouseWheelController.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var MouseWheel;
            (function (MouseWheel) {
                function deserialize(json) {
                    return new MouseWheel.MouseWheelController();
                }
                MouseWheel.deserialize = deserialize;
            })(MouseWheel = Controllers.MouseWheel || (Controllers.MouseWheel = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="MouseWheelController.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var MouseWheel;
            (function (MouseWheel) {
                function serialize(controller) {
                    var json = {};
                    return json;
                }
                MouseWheel.serialize = serialize;
            })(MouseWheel = Controllers.MouseWheel || (Controllers.MouseWheel = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.controller.mousewheel.js.map