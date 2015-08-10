/*!
 * VERSION: 0.19.0
 * DATE: 10-Aug-2015
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

var ProStyle;
(function (ProStyle) {
    var Cursors;
    (function (Cursors) {
        Cursors.back_24x24 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAVSwAAFUsBs3yoNwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMRSURBVEiJtZbPS1xXFMc/575RM1VHQpEylCwqqa3IQJpxISlugmCF4iYL/QtiKSQ0BPpK7TowbksWClGoSEYhiJtYV11MUg1IFrUuRBDbWmwSJBpjxx/z7sli7jWDyGRCzIELj/vj+/2ec9673yeqyvuMGICIBEAVUA3U+HkgAg6AfeAQiPSYIhERwI8AMG7JAha3/wzwXRAEzwAFNAiCF8Ad4FOgEYg7AFFVf86DVgN1QCtwBbgAfAjUiqoiIgljzHpzc3NdT0+PiAi5XI65uTlV1V7gD+ApsAsUnAhxaquBBuAnEflGVQ0wBQwAz72SRkDDMFQfo6Oj6oC+B9qBZEkWXnU9cNkYswxob2+vdnZ2qjFmH+gEPvP1qirTpwRQ6wAD158aN/+jiPxaX19/PpvNks1mSafTWGurgY+AhG+mOQnZRY0Dr3IjBnwuIrdV9WJXV5eOjIxIMpk8SdgZDyxlCEyJ6jrgW2PMb/F4/IuhoSFmZmZOAseJisVOWjkWAcW37BMR+UFVv2xvb9exsTFpamoqd84AUq40pUouG2PuxmKxS5lMhlwu9ybwo6gkg6+Bc62trTo+Pi6pVKoiYB+VZHAuDEMWFhbeGrxSgneKSgieZDIZ2tradHFx8b0QPADuLy0t7afTaQYHB7HWnirBLvDQWnurUCgsh2FIR0eHrq6unirBU+BPVR0Afpmfny+kUikdHh4+FYIDYBv4D1gDRq21N/P5/Fp/fz/d3d1sbGy8E0EE7AEvKGbyN/C7ql4D7s3OzkYtLS06MTFx/JwF1H9o5XzTUvSAfeCl25sH/gd+VtVHOzs7N/r6+pJTU1Nsbm5ijClYaw+Agiewxpjd6enpD1T1yHBERFV125XpsGR4G80Du9baFeDq5OTkV6oqwGOX8Z53tEbgWhAE16MoagAIgmAviqJHFG1zBfgL2HLgULwE/Q17lqJpNQNNwDqwDPxzZJluw8cUnSvhQF4CT4B/KW+ZcUeUcM/qzj73JTpw6gB23CbhdXO33HMEqPuzUBFRV6rSHnl3PAT2XgGbYEB3V/699wAAAABJRU5ErkJggg==)";
        Cursors.play_20x28 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAQAAABQQhX9AAABiklEQVQoz42TPWhTYRiFn/vd2+anP5qGtkikSLGEYEJEHJpSwYC2g2CGtmAGBxGkEVESEWm3DA4WJ12yFwTXtiAdutoOVaeAowpxFSTQUtLvOBjQa27S8q4P5+W87zmI0w0CjwjDxDjLICE8DE4wGHV2zBfeMcMFRhmkH7cTRTCDMvKs2+QlWSYYIdKpi+Ah+qi6chaZOkVSnGOYkF8XwRP0WZJVTUPWtFgnxyRxovT91UVQ+QNK0g8tCZkGj0mT4AxhPBycDlCSNpU4xrLNDaba5gwOgqd+UGqqLGPdX7wgywQxwniBoCTt67JFzicWSTLGQFdQaumVItYc8YY04z1ASfqq63IsJZKnA59z5eTVLTa40wNsm/nGax4w12V1U2UZuQdsscI95rqY2VTCIuqs8YgFZgPP037hT97yjLvc9B+84gvFMbtUWabA9P8vrPwTswY1yhTJB4ViHmXkyT3kPavc5xZXg2N23tkz3/lAlRKLXOse3Dgp8hS4Tb53FaKMcZFLpHqV6zcTCrtuAskQ/wAAAABJRU5ErkJggg==)";
        Cursors.pause_21x24 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAASogAAEqIBzWOC0wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGsSURBVDiN7ZWxahRRFIa/c3LPmsQoLCjJRFbFxgewEWTBKk3KvICQal9gG99gCxvbrXYfwcbOUvAlNCw6WMUxQc3ObG6KOddMFpyAaLc/XGYu893/Hs7AfyTGyL9WABCRNX/vAAas+fdzoATmQOV7XWLV2cVv1ivdMLN3qloCEYgisgghfAaeARlw043um9mRiCwSq6qlmb0HHgN3g9/SL8vy+Wg0otfrATCfz3UwGOxUVXUIvPYqfwAvzOzeeDzWTqcDwGw2C8Ph8CmwD7xNlR4AMc/z2FSWZRXwBtgDHgF3gFGWZWWTy/M8etWvgH7qR+rhsgTYALaAG97D8AcW5zaTqbaA6ceoXyItbABCMmsDZWldJ2mr8K+1Ml2Zrkz/h2nbTIlL6zrFFGO/AKbTaTOkKYoCro6SCJwVRSGTyYRGSNPwqVJI75rZB1WtuBwn5yGEb8BLrob0kxBCLiLpkqiqCzP7CAyAvsQYEZEu9Rx66M8t6pj7CXwFjoAv1ONkE9gFHgDb1CEegVMgBz4l03XgFtAFblOnvFBPxxPgGPjue3Om62cstcWZ4wuzhaHs/zLlmAAAAABJRU5ErkJggg==)";
        Cursors.next_37x24 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAYCAYAAAB9ejRwAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAW9AAAFvQBCBMfJAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAR7SURBVEiJzZdNaFRXGIaf70yimXSSqrF/UqylpS0FCdXFtFUItgotbrKyC0VUqgQpSrvsrivBTUHRnRKpFA0E1DS0pQFbGFoSat1I26QKsVOTSUwy6UxqjJm5bxf33HAzOvlx075wuLO475nne78z55wxSfzfVANgZgY4oDY2AMpACZj1nwNVVBHz1gAr/NP592cX8laTiz1rgVbgd+BrYA/wNLAaeAJYCdSYmfMgEZB57zvAAPAd8GHMm3qUd0F5+FqgEfg+kUgEDQ0NASCgB9gOvAo8CzT4L0h4GBfzXnHOqbGxMfJmgPeB14Dn/DtzXklUGxHUSuAp59zE1q1bNTY2pl27dgmQcy4PfAq8AbwArAGShG2q8d61Zja0efNmTUxMaPfu3ZG3CHwGbAI2AE1AvS/EVYOLoJLAOudcvqWlRZEuXLigVatWRZV/C7wLvAI841NL+tauM7PhdDo95+3s7FRTU1Pk/QF4z6f2UOLVoOqB5yuhJGloaEg7d+6MKr8LfAw0A+uBtb76DWaWi0NJ0sjIiFpbW5eS+LzU4lDrHwUV6cyZM0qlUgEQAJeBFl/5i8DrZjZSCRXp3Llziq3TRyW+Ip7akqEkaXBwUNu2bRMgM7sDfAS8CbxtZqPVoCQpm81qx44dkXcU+CSW+Gqgzqdmy4KSpCAIdOLECdXV1QVmVgY6gQ/MbGwhqMh76tQpJZPJysRf9kshbOdyoSL19/crnU7PpWZm04tBRbp586a2bNkST3yPb2cTUPfYUJJUKpV07NgxmZkALRVKksrlso4fP65EIhEAvwFv+VY2RDv6fyLnHISbcA3h5loHJGoed8KBgQH27t1Lb28vZjZhZinCX9GiunXrFvv27SOTyWBm48CX82CXCyOJkydP0tzcTF9fn4CfJX0BzCzFe/r0aTZu3KhMJiPgmqTPCc/bAnAfKC8rqdu3b7N//36uXr2KmU1K6vITzhDeBKoqm81y4MABenp6MLMp4ArwCzAM3AHGgX+A2SVDnT17lqNHj2pqagrguqSvgByQJ7zeVIVqb2/nyJEjKhaLBtyQdBn4y/tHgLvAJHAPKC0KNTw8zMGDB+nu7sY5F1V43U82Shi7I9x35imXy3Ho0CG6urpwzk0D3UCf9+a8Pw8UgemouAWhLl68SFtbmyYnJw24EQRBZYV5wtYlCY+QOXV0dNDW1qZ8Pm9AfxAEl4A/vTcHjAF/+3Si9geSFIcKAMrlMuPj4xw+fJiOjo7FKrznYQSoVCpVemeAb4CfYoWMAhOxdGb9d0t+0zRJmFmS8PzpTCQS6fr6enz/fyU8CrKxSeMVlnzrngTanXPbU6kUhULBgD+AS8Cg90XeScIF/cD7H7omR0kFnvh8uVx+qVgs5oEfgWs+kbt+VFYI4en+ADgfBMGmQqEw4VPt9QCjVbzleDpxRUnVEq6LNYR36zWEG+GMTyXvn/MqJNyNE967OuZd6b2FCu9MtXSqJfXATxL4Z5TAdGzCeRX6/wDlmFc+jYR/954f9xdLJ65/AQvRzjZ9X0BiAAAAAElFTkSuQmCC)";
        Cursors.seek_36x12 = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAMCAMAAAA9Ie/xAAAApVBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3Nzc4ODhISEhPT09QUFBgYGB4eHizs7O/v7/g4ODk5OT4+Pj6+vr///+KeuFaAAAAKHRSTlMABQgMDxARExYbISQmLzE4O0JFS1pfZGh3g4iKi5DC1dja3ePo9Pb5CC6TmQAAAIpJREFUGNONT8sKwkAQS7KzhVY86P//owexYOtOPNhDC66Y00AyeQB/gADOl6nLz7c7EKCuY99kKtnWAGPAqXQ07VEDDlAFZVm8ozRquwoUzgAJwHn4T+1ai/qIfkDk5qR6iNtXJBkAUq3WTnEYQMB+DY9+WrNdoGJFV7Mua7aA/cxZ5JcBtp1OvwEAqjJOoPY7bwAAAABJRU5ErkJggg==)";
    })(Cursors = ProStyle.Cursors || (ProStyle.Cursors = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="../../../ts/prostyle.d.ts" />
/// <reference path="../Cursors.ts" />
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
            var Tap;
            (function (Tap) {
                var TapController = (function (_super) {
                    __extends(TapController, _super);
                    function TapController(playbuttonSizes, rowSizes, cursors) {
                        if (playbuttonSizes === void 0) { playbuttonSizes = [25, 50, 25]; }
                        if (rowSizes === void 0) { rowSizes = [75, 25]; }
                        if (cursors === void 0) { cursors = true; }
                        _super.call(this, "tap");
                        this.playbuttonSizes = playbuttonSizes;
                        this.rowSizes = rowSizes;
                        this.cursors = cursors;
                        this.backDiv = undefined;
                        this.playDiv = undefined;
                        this.nextDiv = undefined;
                        this.seekDiv = undefined;
                        this.backBound = undefined;
                        this.playBound = undefined;
                        this.nextBound = undefined;
                        this.seekBound = undefined;
                        this.stateChangedBound = undefined;
                        this.canvas = undefined;
                        this.player = undefined;
                        this.bwr = 0.25;
                        this.pwr = 0.50;
                        this.nwr = 0.25;
                        this.phr = 0.75;
                        this.shr = 0.25;
                        if (playbuttonSizes instanceof Array && playbuttonSizes.length > 2) {
                            playbuttonSizes[0] = Math.abs(playbuttonSizes[0]);
                            playbuttonSizes[1] = Math.abs(playbuttonSizes[1]);
                            playbuttonSizes[2] = Math.abs(playbuttonSizes[2]);
                            var total = playbuttonSizes[0] + playbuttonSizes[1] + playbuttonSizes[2];
                            if (total > 0) {
                                this.bwr = playbuttonSizes[0] / total;
                                this.pwr = playbuttonSizes[1] / total;
                                this.nwr = playbuttonSizes[2] / total;
                            }
                        }
                        if (rowSizes instanceof Array && rowSizes.length > 1) {
                            rowSizes[0] = Math.abs(rowSizes[0]);
                            rowSizes[1] = Math.abs(rowSizes[1]);
                            var total = rowSizes[0] + rowSizes[1];
                            if (total > 0) {
                                this.phr = rowSizes[0] / total;
                                this.shr = rowSizes[1] / total;
                            }
                        }
                        this.backBound = this.back.bind(this);
                        this.playBound = this.play.bind(this);
                        this.nextBound = this.next.bind(this);
                        this.seekBound = this.seek.bind(this);
                        this.stateChangedBound = this.stateChanged.bind(this);
                    }
                    TapController.prototype.start = function (canvas, player) {
                        this.stop();
                        this.canvas = canvas;
                        this.player = player;
                        this.backDiv = ProStyle.Util.createChildDivElement(this.canvas.div);
                        this.playDiv = ProStyle.Util.createChildDivElement(this.canvas.div);
                        this.nextDiv = ProStyle.Util.createChildDivElement(this.canvas.div);
                        this.seekDiv = ProStyle.Util.createChildDivElement(this.canvas.div);
                        this.player.stateChanged.on(this.stateChangedBound);
                        this.resize();
                        this.backDiv.addEventListener("click", this.backBound);
                        this.playDiv.addEventListener("click", this.playBound);
                        this.nextDiv.addEventListener("click", this.nextBound);
                        this.seekDiv.addEventListener("click", this.seekBound);
                        if (this.cursors) {
                            this.backDiv.style.cursor = ProStyle.Cursors.back_24x24 + ",w-resize";
                            this.playDiv.style.cursor = ProStyle.Cursors.play_20x28 + ",pointer";
                            this.nextDiv.style.cursor = ProStyle.Cursors.next_37x24 + ",e-resize";
                            this.seekDiv.style.cursor = ProStyle.Cursors.seek_36x12 + ",ew-resize";
                        }
                        this.backDiv.style.position =
                            this.playDiv.style.position =
                                this.nextDiv.style.position =
                                    this.seekDiv.style.position = "absolute";
                    };
                    TapController.prototype.stop = function () {
                        if (this.player !== undefined) {
                            this.backDiv.removeEventListener("click", this.backBound);
                            this.playDiv.removeEventListener("click", this.playBound);
                            this.nextDiv.removeEventListener("click", this.nextBound);
                            this.seekDiv.removeEventListener("click", this.seekBound);
                            this.player.stateChanged.off(this.stateChangedBound);
                            this.backDiv.parentElement.removeChild(this.backDiv);
                            this.playDiv.parentElement.removeChild(this.playDiv);
                            this.nextDiv.parentElement.removeChild(this.nextDiv);
                            this.seekDiv.parentElement.removeChild(this.seekDiv);
                            this.canvas = undefined;
                            this.player = undefined;
                        }
                    };
                    TapController.prototype.mouseout = function (m) {
                        if (this.player)
                            this.player.playCurrentStep();
                    };
                    TapController.prototype.back = function (m) {
                        this.player.backStep(true);
                    };
                    TapController.prototype.play = function (m) {
                        this.player.togglePlay();
                    };
                    TapController.prototype.next = function (m) {
                        this.player.playNextStep(true);
                    };
                    TapController.prototype.seek = function (m) {
                        var pos = m.clientX;
                        var w = m.currentTarget["offsetWidth"];
                        var p = pos / w * 100;
                        this.player.seek(pos / w, true);
                    };
                    TapController.prototype.stateChanged = function (paused) {
                        if (this.cursors) {
                            if (paused) {
                                this.playDiv.style.cursor = ProStyle.Cursors.play_20x28 + ",pointer";
                            }
                            else {
                                this.playDiv.style.cursor = ProStyle.Cursors.pause_21x24 + ",pointer";
                            }
                        }
                    };
                    TapController.prototype.resize = function () {
                        var cw = this.canvas.div.offsetWidth;
                        var ch = this.canvas.div.offsetHeight;
                        var bw = cw * this.bwr;
                        var pw = cw * this.pwr;
                        var nw = cw * this.nwr;
                        var ph = ch * this.phr;
                        var sh = ch * this.shr;
                        this.backDiv.style.left = "0px";
                        this.backDiv.style.top = "0px";
                        this.backDiv.style.width = bw + "px";
                        this.backDiv.style.height = ph + "px";
                        this.playDiv.style.left = bw + "px";
                        this.playDiv.style.top = "0px";
                        this.playDiv.style.width = pw + "px";
                        this.playDiv.style.height = ph + "px";
                        this.nextDiv.style.left = (bw + pw) + "px";
                        this.nextDiv.style.top = "0px";
                        this.nextDiv.style.width = nw + "px";
                        this.nextDiv.style.height = ph + "px";
                        this.seekDiv.style.left = "0px";
                        this.seekDiv.style.top = ph + "px";
                        this.seekDiv.style.width = cw + "px";
                        this.seekDiv.style.height = sh + "px";
                    };
                    TapController.prototype.serialize = function () {
                        return Tap.serialize(this);
                    };
                    return TapController;
                })(ProStyle.Controllers.Controller);
                Tap.TapController = TapController;
            })(Tap = Controllers.Tap || (Controllers.Tap = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="TapController.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var Tap;
            (function (Tap) {
                function deserialize(json) {
                    return new Tap.TapController(json.playbuttonSizes, json.rowSizes, json.cursors);
                }
                Tap.deserialize = deserialize;
            })(Tap = Controllers.Tap || (Controllers.Tap = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
/// <reference path="TapController.ts" />
var ProStyle;
(function (ProStyle) {
    var Extensions;
    (function (Extensions) {
        var Controllers;
        (function (Controllers) {
            var Tap;
            (function (Tap) {
                function serialize(controller) {
                    var json = {
                        playbuttonSizes: controller.playbuttonSizes,
                        rowSizes: controller.rowSizes,
                        cursors: controller.cursors
                    };
                    return json;
                }
                Tap.serialize = serialize;
            })(Tap = Controllers.Tap || (Controllers.Tap = {}));
        })(Controllers = Extensions.Controllers || (Extensions.Controllers = {}));
    })(Extensions = ProStyle.Extensions || (ProStyle.Extensions = {}));
})(ProStyle || (ProStyle = {}));
//# sourceMappingURL=prostyle.controller.tap.js.map