/// <reference path="greensock.d.ts" />
declare module ProStyle {
    var mediaRootUrl: string;
    var defaultControllers: any;
}
declare module ProStyle.Stories {
    var _empty: boolean;
}
declare module ProStyle.Svg.fastForward {
    var svg: string;
}
declare module ProStyle.Svg.logo {
    var svg: string;
}
declare module ProStyle.Svg.pause {
    var svg: string;
}
declare module ProStyle.Svg.play {
    var svg: string;
}
declare module ProStyle.Svg.toStart {
    var svg: string;
}
declare module ProStyle.Util {
    function setElementText(element: HTMLElement, text: string): void;
}
declare module ProStyle.Models {
    class Model {
        initPropertyLists: Properties.PropertyList[];
        init: Properties.PropertyList;
        constructor(initPropertyLists: Properties.PropertyList[]);
    }
}
declare module ProStyle.Types {
    class Size {
        width: number;
        height: number;
        static DEFAULT_WIDTH: number;
        static DEFAULT_HEIGHT: number;
        static MIN: number;
        static MAX: number;
        constructor(width?: number, height?: number);
        aspectRatio(): number;
        getContainedSize(innerAspectRatio: number): Size;
    }
}
declare module ProStyle.Util {
    function splitNoParens(s: string): string[];
}
declare module ProStyle.Util {
    function isAbsoluteUrl(url: string): boolean;
}
declare module ProStyle.Models {
    import Types = ProStyle.Types;
    class CanvasModel extends Model {
        padding: number;
        canvasMediaUrl: string;
        mediaUrl: string;
        constructor(init: Properties.PropertyList, padding: number, canvasMediaUrl: string);
        private setAdjustedImageRootUrl(canvasUrl);
        adjustBackgroundImage(bg: string, containerSize: Types.Size): string;
        adjustImageUrl(url: string): string;
    }
}
declare module ProStyle.Models {
    class FrameModel extends Model {
        aspectRatio: number;
        padding: number;
        constructor(init: Properties.PropertyList, aspectRatio: number, padding: number);
    }
}
declare module ProStyle.Types {
    class Scale {
        x: number;
        y: any;
        constructor(x?: number, y?: any);
        static fromJson(json: any): Scale;
        equals(other: Scale): boolean;
    }
}
declare module ProStyle.Util {
    function convertToNumber(n: any, fallback?: number, stripTrailingNonDigits?: boolean): number;
    function convertToNumber2(n: any): number;
}
declare module ProStyle.Types {
    class Xyz {
        x: number;
        y: number;
        z: number;
        constructor(x?: number, y?: number, z?: number);
        static fromJson(json: any): Xyz;
        equals(other: Xyz): boolean;
    }
}
declare module ProStyle.Types {
    class Placement {
        position: Xyz;
        rotation: Xyz;
        scale: Scale;
        opacity: number;
        constructor(position: Xyz, rotation: Xyz, scale: Scale, opacity?: number);
        duplicate(): Placement;
        adjust(offset: Placement): void;
        renderCss(containerSize: Types.Size, bucket?: any, centerAlignment?: boolean): any;
        static fromJson(json: any): Placement;
        equals(other: Placement): boolean;
    }
}
declare module ProStyle.Models.Properties.Variables {
    interface IVariable {
        defaultValueOverride: any;
        type: IVariableType;
        getValue(getDefaultIfMissing?: boolean): any;
        setValue(value: any): any;
        render(includeLabel: boolean, includeText: any): string;
    }
}
declare module ProStyle.Models.Properties.Variables {
    interface IVariableType {
        label: string;
        text: string;
        jsonNames: string[];
        cssName: string;
        defaultValue: any;
        alwaysInitializeCss: boolean;
        createVariable(): IVariable;
        scrubValue(value: any): any;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, variable: IVariable, buckets: any[], initializing: boolean): any;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: any): any;
    }
}
declare module ProStyle.Models.Properties {
    interface IPropertyType {
        label: string;
        jsonNames: string[];
        variableTypes: Variables.IVariableType[];
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromObject(json: {}): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    interface IProperty {
        type: IPropertyType;
        getVariable(jsonName: string): Variables.IVariable;
        renderLabel(): string;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, buckets: any[], initializing?: boolean): any;
    }
}
declare module ProStyle.Models.Properties {
    class PropertyList {
        propertyTypes: IPropertyType[];
        properties: IProperty[];
        constructor(propertyTypes: IPropertyType[], properties: IProperty[]);
        getPropertyOfType(propertyType: IPropertyType): IProperty;
        hasAnythingSet(): boolean;
    }
}
declare module ProStyle.Models {
    interface IItemModelSet {
        items: Items.ItemModel[];
        flow: Flows.FlowModel;
        story: Story;
    }
}
declare module ProStyle.Models {
    class PageModel extends Model implements IItemModelSet {
        flow: Flows.FlowModel;
        steps: Step[];
        items: Items.ItemModel[];
        canvasScriptSet: Scripts.ScriptSet;
        frameScriptSet: Scripts.ScriptSet;
        pageScriptSet: Scripts.ScriptSet;
        story: Models.Story;
        constructor(init: Properties.PropertyList, flow: Flows.FlowModel);
        insertStep(index: number): void;
        deleteStep(index: number): void;
        deleteItem(index: number): void;
    }
}
declare module ProStyle.Models.Flows {
    class FlowModel extends Model {
        story: Story;
        flowType: string;
        placement: Types.Placement;
        pageAspectRatio: number;
        defaultPageClass: string;
        pages: PageModel[];
        constructor(story: Story, flowType: string, placement: Types.Placement, pageAspectRatio: number, defaultPageClass?: string);
        getDefaultPageClassName(): string;
        getDefaultPageClassValue(): any;
        serialize(): any;
        createView(camera: Views.CameraView, flowIndex: number): Views.Flows.FlowView;
    }
}
declare module ProStyle.Models {
    class Story {
        canvas: CanvasModel;
        frame: FrameModel;
        flows: Flows.FlowModel[];
        classes: any;
        controllers: Controllers.Controller[];
        usingDefaultControllers: boolean;
        constructor(canvas: CanvasModel, frame: FrameModel, flows: Flows.FlowModel[], classes: any, controllers: Controllers.Controller[], usingDefaultControllers: boolean);
    }
}
declare module ProStyle.Models.Properties {
    class Property implements IProperty {
        type: IPropertyType;
        constructor(type: IPropertyType);
        getVariable(jsonName: string): Variables.IVariable;
        renderLabel(): string;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, buckets: any[], initializing?: boolean): void;
    }
}
declare module ProStyle.Models.Scripts {
    enum ScriptType {
        InitEvent = 0,
        StepEvent = 1,
        SwitchEvent = 2,
        ActionsOrphan = 3,
        PropertyOrphan = 4,
    }
}
declare module ProStyle.Models.Scripts.ScriptType {
    function fromString(value: string): ScriptType;
    function toString(value: ScriptType): string;
}
declare module ProStyle.Views {
    import Properties = ProStyle.Models.Properties;
    interface AfterCssBuckets {
        (properties: Properties.IProperty[], buckets: any[], containerSize: Types.Size): void;
    }
}
declare module ProStyle.Views {
    import Models = ProStyle.Models;
    import Types = ProStyle.Types;
    import Scripts = ProStyle.Models.Scripts;
    import Properties = ProStyle.Models.Properties;
    class View {
        model: Models.Model;
        element: Element;
        div: HTMLDivElement;
        constructor(model: Models.Model, element: Element);
        initializeProperties(story: Models.Story, elements: Element[], containerSize: Types.Size, timeline: TimelineMax, init: Properties.PropertyList, centerAlignment: boolean, forceProps?: any, afterCssBuckets?: AfterCssBuckets): void;
        private generateEventTimeline(itemViewSet, divs, containerSize, event, rootTimeline, label, afterCssBuckets?);
        generateActionsForStep(itemViewSet: IItemViewSet, divs: Element[], containerSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string, scriptSet: Scripts.ScriptSet, afterCssBuckets?: AfterCssBuckets): void;
        static postProcessCssBuckets(buckets: any[], afterCssBuckets: AfterCssBuckets, properties: Properties.IProperty[], containerSize: Types.Size): void;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class FlowReader {
        static read(story: Models.Story, json: any): Models.Flows.FlowModel;
        static lookupExtension(itemType: string): any;
    }
}
declare module ProStyle.Views {
    import Models = ProStyle.Models;
    class CameraView extends View {
        story: Models.Story;
        frame: FrameView;
        size: Types.Size;
        flows: Flows.FlowView[];
        constructor(story: Models.Story, frame: FrameView);
        resize(): void;
        stepStopped(timeline: TimelineMax, step: Step): void;
    }
}
declare module ProStyle.Views {
    import Models = ProStyle.Models;
    class FrameView extends View {
        story: Models.Story;
        canvas: CanvasView;
        size: Types.Size;
        camera: CameraView;
        constructor(story: Models.Story, canvas: CanvasView);
        stepStopped(timeline: TimelineMax, step: Step): void;
        resize(): void;
    }
}
declare module ProStyle.Util.Events {
    interface ILiteEvent<T> {
        on(handler: {
            (data?: T): void;
        }): any;
        off(handler: {
            (data?: T): void;
        }): any;
    }
}
declare module ProStyle.Util.Events {
    class LiteEvent<T> implements ILiteEvent<T> {
        private handlers;
        on(handler: {
            (data?: T): void;
        }): void;
        off(handler: {
            (data?: T): void;
        }): void;
        trigger(data?: T): void;
        dispose(): void;
    }
}
declare module ProStyle.Play {
    interface IPlayerProgress {
        progress: number;
        time: number;
        step: ProStyle.Views.Step;
        subStep: number;
    }
}
declare module ProStyle.Play {
    import Events = ProStyle.Util.Events;
    interface IPlayer {
        steps: ProStyle.Views.Step[];
        getDuration(total?: boolean): number;
        getTime(total?: boolean): number;
        isAtStoryStart(): boolean;
        isAtStoryEnd(): boolean;
        isAtStepStart(): boolean;
        isAtStepEnd(): boolean;
        isPaused(): boolean;
        progressChanged: Events.ILiteEvent<IPlayerProgress>;
        stateChanged: Events.ILiteEvent<boolean>;
        stepComplete: Events.ILiteEvent<ProStyle.Views.Step>;
        seek(progress: number, animate?: boolean): any;
        seekTime(time: number, animate?: boolean): any;
        seekStep(step: ProStyle.Views.Step, animate?: boolean): any;
        playCurrentStep(): any;
        playCurrentStepDelayed(delay: number): any;
        playNextStep(animate?: boolean): any;
        playNextStepDelayed(delay: number): any;
        togglePlay(): any;
        backStep(animate?: boolean): any;
        getCurrentStep(): ProStyle.Views.Step;
        pause(time?: number): any;
    }
}
declare module ProStyle.Play {
    import Events = ProStyle.Util.Events;
    import Views = ProStyle.Views;
    class Player {
        frame: Views.FrameView;
        timeline: TimelineMax;
        steps: Views.Step[];
        progressChanged: Events.LiteEvent<IPlayerProgress>;
        stateChanged: Events.LiteEvent<boolean>;
        stepComplete: Events.LiteEvent<Views.Step>;
        private animating;
        private currentStep;
        private currentSubStep;
        private timeout;
        state: IPlayerProgress;
        constructor(frame: Views.FrameView);
        getDuration(total?: boolean): number;
        getTime(total?: boolean): number;
        refreshTimeline(frame: Views.FrameView): void;
        isAtStoryStart(): boolean;
        isAtStoryEnd(): boolean;
        isAtStepStart(nudgeToStart?: boolean): boolean;
        isAtStepEnd(): boolean;
        isPaused(): boolean;
        isFirstStep(): boolean;
        isLastStep(): boolean;
        private triggerStateChanged();
        private triggerProgressChanged();
        private triggerStepComplete(step);
        private getNextStep(cycle?);
        private getPriorStep();
        private getStepAtTime(time);
        private moveTo(time, animate, thenPlay);
        private thenPlay(isAtStepEnd, playNextStep?);
        seek(progress: number, animate?: boolean): void;
        seekTime(time: number, animate?: boolean): void;
        seekStep(step: Views.Step, animate?: boolean): void;
        private alignSequencedItemsToStep(destStep, atStepStart, atStepEnd, animate?);
        private playSubStep(subStep, animate?);
        private getRemainingSubStepCount();
        togglePlay(): void;
        playCurrentStep(): void;
        playCurrentStepDelayed(delay: number): void;
        playNextStep(animate?: boolean): void;
        playNextStepDelayed(delay: number): void;
        backStep(animate?: boolean): void;
        getCurrentStep(): ProStyle.Views.Step;
        pause(time?: number): void;
    }
}
declare module ProStyle.Util {
    function throttle(fn: any, delay: any): () => void;
}
declare module ProStyle.Views {
    class CanvasView extends View {
        private story;
        frame: Views.FrameView;
        player: Play.IPlayer;
        size: Types.Size;
        fullScreen: boolean;
        constructor(story: Models.Story, div: HTMLDivElement);
        startControllers(): void;
        stopControllers(): void;
        resize(force?: boolean): void;
        private setCanvasSize();
        private generateStyles();
        private hideContextMenu();
    }
}
declare module ProStyle.Controllers {
    class Controller {
        name: string;
        constructor(name: string);
        start(canvas: Views.CanvasView, player: Play.IPlayer): void;
        stop(): void;
        resize(): void;
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Controllers.Auto {
    class AutoController extends ProStyle.Controllers.Controller {
        _start: any;
        _stepAdvance: any;
        _restart: any;
        private autoStart;
        private autoStartDelay;
        private autoStepAdvance;
        private autoStepAdvanceDelay;
        private autoRestart;
        private autoRestartDelay;
        private stepCompleteBound;
        private canvas;
        private player;
        private timeout;
        constructor(_start?: any, _stepAdvance?: any, _restart?: any);
        start(canvas: Views.CanvasView, player: Play.IPlayer): void;
        stop(): void;
        private stepComplete(step);
        resize(): void;
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Controllers.Auto {
    function deserialize(json: any): AutoController;
}
declare module ProStyle.Extensions.Controllers.Auto {
    function serialize(controller: AutoController): any;
}
declare module ProStyle.Extensions.Controllers.Debug {
    class DebugController extends ProStyle.Controllers.Controller {
        cssClass: string;
        private progressBound;
        private canvas;
        private player;
        private div;
        constructor(cssClass?: string);
        start(canvas: Views.CanvasView, player: Play.IPlayer): void;
        stop(): void;
        private progress(state);
        resize(): void;
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Controllers.Debug {
    function deserialize(json: any): DebugController;
}
declare module ProStyle.Extensions.Controllers.Debug {
    function serialize(controller: DebugController): any;
}
declare module ProStyle.Extensions.Controllers.Keyboard {
    class KeyboardListener {
        private player;
        private controller;
        private keydownBound;
        private keyupBound;
        private map;
        constructor(player: Play.IPlayer, controller: KeyboardController);
        private getDefaultKeys();
        private listenForKeyPresses();
        private keydown(event);
        private keyup(event);
        stop(): void;
        private mapKeys(map, keys, func);
        private play();
        private pause();
        private togglePlay();
        private back();
        private playNext();
        private start();
        private end();
    }
}
declare module ProStyle.Extensions.Controllers.Keyboard {
    class KeyboardController extends ProStyle.Controllers.Controller {
        keyMap: any;
        private canvas;
        private player;
        private listener;
        constructor(keyMap: any);
        start(canvas: Views.CanvasView, player: Play.IPlayer): void;
        stop(): void;
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Controllers.Keyboard {
    function deserialize(json: any): KeyboardController;
}
declare module ProStyle.Extensions.Controllers.Keyboard {
    function serialize(controller: KeyboardController): any;
}
declare module ProStyle.Extensions.Controllers.Resize {
    class ResizeController extends ProStyle.Controllers.Controller {
        throttleDelay: number;
        private canvasResize;
        constructor(throttleDelay?: number);
        start(canvas: Views.CanvasView, player: Play.IPlayer): void;
        stop(): void;
        resize(): void;
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Controllers.Resize {
    function deserialize(json: any): ResizeController;
}
declare module ProStyle.Extensions.Controllers.Resize {
    function serialize(controller: ResizeController): any;
}
declare module ProStyle.Util {
    function logError(method: string, message: string): void;
}
declare module ProStyle.Util {
    function querySelector(selector: string, context?: NodeSelector): Element;
}
declare module ProStyle.Util {
    function createChildDivElement(parentDiv: HTMLDivElement, cssClass?: string): HTMLDivElement;
}
declare module ProStyle.Extensions.Controllers.Track {
    class TrackBar {
        private canvas;
        private player;
        private controller;
        private COLOR;
        private HIGHLIGHT_COLOR;
        private BACK_COLOR;
        private STEP_COLOR_1;
        private STEP_COLOR_2;
        private bgDiv;
        private logoDiv;
        private backDiv;
        private playDiv;
        private nextDiv;
        private divScrubber;
        private divScrubberBar;
        private divScrubberStep;
        private divScrubberProgress;
        private divScrubberHoverPoint;
        private divScrubberHoverText;
        private scrubberSize;
        private bgClass;
        private btnClass;
        private scrubberClass;
        private scrubberBarClass;
        private scrubberStepClass;
        private scrubberProgressClass;
        private scrubberHoverPointClass;
        private scrubberHoverTextClass;
        private progress;
        constructor(canvas: Views.CanvasView, player: Play.IPlayer, controller: TrackController);
        private setupButtons();
        private setupScrubber();
        private scrubberMouseMove(e);
        private scrubberMouseClick(e);
        private setupPlayerEvents();
        private setupMenuOnMouseMove();
        private progressChanged(state);
        private stateChanged(isPaused);
        resize(): void;
        private resizeScrubber();
        private updateScrubberProgress();
        private generateStyles();
        private addButton(tooltip, svg, clickEvent);
    }
}
declare module ProStyle.Extensions.Controllers.Track {
    class TrackController extends ProStyle.Controllers.Controller {
        autoHide: boolean;
        color: string;
        highlightColor: string;
        backColor: string;
        stepColor1: string;
        stepColor2: string;
        private canvas;
        private player;
        private trackBar;
        constructor(autoHide?: boolean, color?: string, highlightColor?: string, backColor?: string, stepColor1?: string, stepColor2?: string);
        start(canvas: Views.CanvasView, player: Play.IPlayer): void;
        stop(): void;
        resize(): void;
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Controllers.Track {
    function deserialize(json: any): TrackController;
}
declare module ProStyle.Extensions.Controllers.Track {
    function serialize(controller: TrackController): any;
}
declare module ProStyle.Extensions.Controllers.Unknown {
    class UnknownController extends ProStyle.Controllers.Controller {
        originalJson: any;
        constructor(originalJson: any);
        start(canvas: Views.CanvasView, player: Play.IPlayer): void;
        stop(): void;
        resize(): void;
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Controllers.Unknown {
    function deserialize(json: any): UnknownController;
}
declare module ProStyle.Extensions.Controllers.Unknown {
    function serialize(controller: UnknownController): any;
}
declare module ProStyle.Extensions.Flows.Simple {
    import Models = ProStyle.Models;
    import Types = ProStyle.Types;
    class SimpleFlowModel extends Models.Flows.FlowModel {
        constructor(story: Models.Story, placement: Types.Placement, defaultPageClass: string, pageAspectRatio: number);
        getDefaultPageClassName(): string;
        serialize(): any;
        createView(camera: Views.CameraView, flowIndex: number): Views.Flows.FlowView;
    }
}
declare module ProStyle.Views.Flows {
    interface IFlowView {
        pages: PageView[];
        initializePlacement(timeline: TimelineMax): any;
        pageAspectRatio(): number;
    }
}
declare module ProStyle.Views {
    interface IItemViewSet {
        items: Items.ItemView[];
        div: HTMLDivElement;
    }
}
declare module ProStyle.Views.Items {
    import Models = ProStyle.Models;
    class ItemView extends View {
        model: Models.Items.ItemModel;
        itemViewSet: IItemViewSet;
        constructor(model: Models.Items.ItemModel, itemViewSet: IItemViewSet, element?: Element);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
        generateStepActions(itemViewSet: IItemViewSet, pageSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string): void;
    }
}
declare module ProStyle.Util {
    function logWarning(method: string, message: string): void;
}
declare module ProStyle.Models.Properties.Variables {
    class VariableType<T> implements IVariableType {
        label: string;
        jsonNames: string[];
        cssName: string;
        text: string;
        defaultValue: T;
        alwaysInitializeCss: boolean;
        constructor(label: string, jsonNames: string[], cssName: string, text: string, defaultValue: T, alwaysInitializeCss: boolean);
        createVariable(): IVariable;
        scrubValue(value: any): any;
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, variable: IVariable, buckets: any[], initializing: boolean): void;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: T): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class StringVariableType extends VariableType<string> {
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, alwaysInitializeCss: boolean);
        scrubValue(value: any): string;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class BackgroundImageVariableType extends StringVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: string): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class BooleanVariableType extends VariableType<boolean> {
        private falseValue;
        private trueValue;
        constructor(label: string, jsonNames: string[], cssName: string, falseValue: any, trueValue: any, alwaysInitializeCss?: boolean);
        scrubValue(value: any): boolean;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: boolean): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class EnumVariableType extends StringVariableType {
        private enumValues;
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, enumValues: string[], alwaysInitializeCss: boolean);
        scrubValue(value: any): string;
        getValueByIndex(index: number): string;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class BulletsVariableType extends EnumVariableType {
        constructor();
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: string): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class ColorVariableType extends StringVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, defaultValue: string, alwaysInitializeCss: boolean);
        scrubValue(value: any): string;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class NumberVariableType extends VariableType<number> {
        private _minValue;
        private _maxNumber;
        private _decimalPlaces;
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        scrubValue(value: any): number;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class ContainerDepthPctVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class ContainerHeightPctVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class ContainerWidthPctVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module ProStyle.Types {
    enum EazeEffect {
        Back = 0,
        Bounce = 1,
        Circle = 2,
        Curve = 3,
        Elastic = 4,
        Expo = 5,
        Linear = 6,
        Sine = 7,
        SlowMo = 8,
        SlowMoBack = 9,
        Stepped = 10,
        Stop = 11,
        StopAndReturn = 12,
    }
}
declare module ProStyle.Types {
    enum EazeAmount {
        Less = 0,
        Normal = 1,
        More = 2,
        Extra = 3,
    }
}
declare module ProStyle.Types {
    enum EazeEnding {
        In = 0,
        Out = 1,
        InOut = 2,
    }
}
declare module ProStyle.Types {
    class Eaze {
        static DEFAULT_EFFECT: EazeEffect;
        static DEFAULT_AMOUNT: EazeAmount;
        static DEFAULT_ENDING: EazeEnding;
        static DEFAULT: Eaze;
        effect: EazeEffect;
        amount: EazeAmount;
        ending: EazeEnding;
        ease: Ease;
        constructor(effect?: EazeEffect, amount?: EazeAmount, ending?: EazeEnding);
        private setBackEase(inOut);
        private setCurveEase(inOut);
        private setElasticEase(inOut);
        private setSlowMoEase(index, yoyo?);
        private setSteppedEase();
        static getByText(text: string): Eaze;
    }
}
declare module ProStyle.Models.Properties.Variables {
    import Types = ProStyle.Types;
    class EaseVariableType extends VariableType<Types.Eaze> {
        constructor();
        scrubValue(value: any): Types.Eaze;
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: Types.Eaze): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class NumberOffsetVariableType extends NumberVariableType {
        private inverted;
        offset: number;
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, decimalPlaces: number, offset: number, inverted: boolean, text: string, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    import Types = ProStyle.Types;
    class OriginVariableType extends VariableType<Types.Xyz> {
        private transform;
        constructor(transform: boolean);
        scrubValue(value: any): Types.Xyz;
        private scrubArray(a, expand);
        private scrubString(s);
        writeCssBuckets(story: Story, model: Model, containerSize: Types.Size, variable: IVariable, buckets: any[], initializing: boolean): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class PercentVariableType extends NumberVariableType {
        constructor(label: string, jsonNames: string[], cssName: string, minValue: number, maxValue: number, defaultValue: number, alwaysInitializeCss: boolean);
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module ProStyle.Util {
    function getSign(n: number): number;
}
declare module ProStyle.Types {
    class Shadow {
        x: number;
        y: number;
        blur: number;
        color: any;
        spread: number;
        inset: boolean;
        constructor(x?: number, y?: number, blur?: number, color?: any, spread?: number, inset?: boolean);
        render(xScale: number, yScale: number, isBoxShadow: boolean): string;
        static fromJson(json: any[]): Shadow;
        toJson(): any[];
        equals(other: Shadow): boolean;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class ShadowVariableType extends VariableType<Types.Shadow[]> {
        private isBoxShadow;
        constructor(cssName: string, isBoxShadow: any);
        scrubValue(value: any): Types.Shadow[];
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, shadows: Types.Shadow[]): void;
    }
}
declare module ProStyle.Models.Properties.Variables {
    class TextAlignVariableType extends EnumVariableType {
        constructor();
    }
}
declare module ProStyle.Models.Properties.Variables {
    class TextWidthVariableType extends NumberVariableType {
        constructor();
        writeCssBucket(story: Story, model: Model, containerSize: Types.Size, bucket: any, value: number): void;
    }
}
declare module ProStyle.Models.Properties {
    class PropertyType implements IPropertyType {
        label: string;
        jsonNames: string[];
        variableTypes: Variables.IVariableType[];
        constructor(label: string, jsonNames: string[], variableTypes: Variables.IVariableType[]);
        createPropertyFromArray(json: any[]): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromObject(json: {}): IProperty;
        renderLabel(property: IProperty): string;
        countOfValues(property: IProperty): number;
        renderVariables(property: IProperty, includeLabel: boolean, includeText: boolean): string;
    }
}
declare module ProStyle.Models.Items {
    class ItemModel extends Model {
        itemModelSet: IItemModelSet;
        itemType: string;
        typeLabel: string;
        scriptSets: Scripts.ScriptSet[];
        scriptSet: Scripts.ScriptSet;
        constructor(itemModelSet: IItemModelSet, itemType: string, typeLabel: string, initPropertyLists: Properties.PropertyList[], scriptSets: Scripts.ScriptSet[]);
        getScriptSet(index: number): Scripts.ScriptSet;
        getCountOfStepsUsed(): number;
        serialize(): any;
        createView(itemViewSet: Views.IItemViewSet): Views.Items.ItemView;
    }
}
declare module ProStyle.Views.Items {
    import Models = ProStyle.Models;
    class SequencedItemView extends ItemView {
        model: Models.Items.SequencedItemModel;
        constructor(model: Models.Items.SequencedItemModel, itemViewSet: IItemViewSet);
        moveToSubStep(position: number, animate: boolean, cameraSize: Types.Size): void;
        getCountOfSubSteps(): number;
    }
}
declare module ProStyle.Models.Scripts {
    class Script {
        scriptSet: ScriptSet;
        type: ScriptType;
        x: number;
        y: number;
        constructor(scriptSet: ScriptSet, type: ScriptType);
    }
}
declare module ProStyle.Models.Scripts {
    class ScriptSet {
        itemModelSet: IItemModelSet;
        name: string;
        itemProperties: Properties.IPropertyType[];
        scripts: Script[];
        constructor(itemModelSet: IItemModelSet, name: string, itemProperties: Properties.IPropertyType[]);
        getCountOfStepsUsed(): number;
        insertStep(index: number): void;
        deleteStep(index: number): void;
    }
}
declare module ProStyle.Extensions.Items.Unknown {
    import Models = ProStyle.Models;
    import Items = Models.Items;
    class UnknownItemModel extends Items.ItemModel {
        unknownType: string;
        constructor(itemModelSet: Models.IItemModelSet, unknownType: string);
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Items.Unknown {
    function deserialize(itemModelSet: Models.IItemModelSet, json: any): UnknownItemModel;
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class ItemReader {
        static read(itemSet: Models.IItemModelSet, json: any): Models.Items.ItemModel;
        static lookupExtension(itemType: string): any;
    }
}
declare module ProStyle.Views {
    import Models = ProStyle.Models;
    class PageView extends View implements IItemViewSet {
        model: Models.PageModel;
        flow: Flows.FlowView;
        flowIndex: number;
        pageIndex: number;
        steps: Step[];
        items: Items.ItemView[];
        constructor(model: Models.PageModel, flow: Flows.FlowView, flowIndex: number, pageIndex: number);
        static createItems(itemViewSet: Views.IItemViewSet, items: Models.Items.ItemModel[]): void;
        generateStepsActions(timeline: TimelineMax, priorStep: Views.Step): Views.Step;
    }
}
declare module ProStyle.Views.Flows {
    import Models = ProStyle.Models;
    class FlowView extends View implements IFlowView {
        model: Models.Flows.FlowModel;
        camera: CameraView;
        flowIndex: number;
        pages: PageView[];
        constructor(model: Models.Flows.FlowModel, camera: CameraView, flowIndex: number);
        initializePlacement(timeline: TimelineMax): void;
        initializePerspective(): void;
        initializeFlowPlacement(timeline: TimelineMax): void;
        private generateCameraMovement(timeline, label);
        initializePages(timeline: TimelineMax): void;
        generatePageMovement(timeline: TimelineMax, label: string, pageIndex: number): void;
        generateStepsActions(timeline: TimelineMax, priorStep: Views.Step): Views.Step;
        pageAspectRatio(): number;
    }
}
declare module ProStyle.Extensions.Flows.Simple {
    import Views = ProStyle.Views;
    class SimpleFlowView extends Views.Flows.FlowView {
        model: SimpleFlowModel;
        constructor(model: SimpleFlowModel, camera: Views.CameraView, flowIndex: number);
        initializePages(timeline: TimelineMax): void;
        generatePageMovement(timeline: TimelineMax, label: string, pageIndex: number): void;
        private applyCss(timeline, div, label, duration, css, ease);
    }
}
declare module ProStyle.Extensions.Flows.Simple {
    import Models = ProStyle.Models;
    function deserialize(story: Models.Story, json: any): SimpleFlowModel;
}
declare module ProStyle.Extensions.Flows.Simple {
    function serialize(flow: SimpleFlowModel): any;
}
declare module ProStyle.Extensions.Flows.Unknown {
    import Models = ProStyle.Models;
    import Types = ProStyle.Types;
    class UnknownFlowModel extends Simple.SimpleFlowModel {
        constructor(story: Models.Story, placement: Types.Placement, defaultPageClass: string, pageAspectRatio: number);
        serialize(): any;
    }
}
declare module ProStyle.Extensions.Flows.Unknown {
    class UnknownFlowView extends Simple.SimpleFlowView {
        constructor(model: UnknownFlowModel, camera: Views.CameraView, flowIndex: number);
    }
}
declare module ProStyle.Extensions.Flows.Unknown {
    import Models = ProStyle.Models;
    function deserialize(story: Models.Story, json: any): UnknownFlowModel;
}
declare module ProStyle.Extensions.Flows.Unknown {
    function serialize(flow: UnknownFlowModel): any;
}
declare module ProStyle.Models.Properties {
    class AnchorPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        private parseString(s);
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class AnimationPropertyType extends PropertyType {
        constructor(initializeFontSize?: boolean);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class BackgroundPropertyType extends PropertyType {
        constructor(backgroundColor?: string);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class BorderPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class BulletsPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class ClassPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
    }
}
declare module ProStyle.Models.Properties {
    class ColorPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class CornersPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class CropPropertyType extends PropertyType {
        constructor(isSvg?: boolean);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class FontPropertyType extends PropertyType {
        constructor(initializeFontSize?: boolean);
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class MoveToPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
    }
}
declare module ProStyle.Models.Properties {
    class OpacityPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class PaddingPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class PositionPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class RotationPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class ScalePropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class SizePropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class SkewPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class ShadowPropertyType extends PropertyType {
        constructor(label?: string, jsonNames?: string[], cssName?: string);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        private parseString(s);
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        private parseObject(o);
        createPropertyFromObject(json: any): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class SvgFillPropertyType extends PropertyType {
        constructor(backgroundColor?: string);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
    }
}
declare module ProStyle.Models.Properties {
    class TextAlignPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class TextShadowPropertyType extends ShadowPropertyType {
        constructor();
    }
}
declare module ProStyle.Models.Properties {
    class TextStylePropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class TextWidthPropertyType extends PropertyType {
        constructor();
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class TransformOriginPropertyType extends PropertyType {
        constructor();
        private createProperty(json);
        createPropertyFromBoolean(json: boolean): IProperty;
        createPropertyFromNumber(json: number): IProperty;
        createPropertyFromString(json: string): IProperty;
        createPropertyFromArray(json: any[]): IProperty;
        createPropertyFromObject(json: any): IProperty;
        renderLabel(property: IProperty): string;
    }
}
declare module ProStyle.Models.Properties {
    class Cache {
        static ANCHOR: AnchorPropertyType;
        static ANIMATION: AnimationPropertyType;
        static BACKGROUND: BackgroundPropertyType;
        static BORDER: BorderPropertyType;
        static BULLET: BulletsPropertyType;
        static CLASS: ClassPropertyType;
        static CORNERS: CornersPropertyType;
        static CROP: CropPropertyType;
        static CROP_SVG: CropPropertyType;
        static FILL_SVG: SvgFillPropertyType;
        static FONT: FontPropertyType;
        static MOVE_TO: MoveToPropertyType;
        static OPACITY: OpacityPropertyType;
        static PADDING: PaddingPropertyType;
        static POSITION: PositionPropertyType;
        static ROTATION: RotationPropertyType;
        static SCALE: ScalePropertyType;
        static SIZE: SizePropertyType;
        static SKEW: SkewPropertyType;
        static SHADOW: ShadowPropertyType;
        static TEXT_ALIGN: TextAlignPropertyType;
        static TEXT_COLOR: ColorPropertyType;
        static TEXT_SHADOW: TextShadowPropertyType;
        static TEXT_STYLE: TextStylePropertyType;
        static TEXT_WIDTH: TextWidthPropertyType;
        static TRANSFORM_ORIGIN: TransformOriginPropertyType;
    }
}
declare module ProStyle.Extensions.Items.Image {
    import Models = ProStyle.Models;
    import Items = Models.Items;
    import Properties = Models.Properties;
    import Scripts = Models.Scripts;
    class ImageItemModel extends Items.ItemModel {
        src: string;
        width: number;
        height: number;
        constructor(itemModelSet: Models.IItemModelSet, src: string, width: number, height: number, init: Properties.PropertyList, scriptSet: Scripts.ScriptSet);
        serialize(): any;
        createView(itemViewSet: Views.IItemViewSet): ImageItemView;
    }
}
declare module ProStyle.Extensions.Items.Image {
    import Items = ProStyle.Views.Items;
    class ImageItemView extends Items.ItemView {
        model: ImageItemModel;
        constructor(model: ImageItemModel, itemSetElem: ProStyle.Views.IItemViewSet);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
    }
}
declare module ProStyle.Extensions.Items.Image {
    import Properties = ProStyle.Models.Properties;
    class ImagePropertyTypes {
        private static _propertyTypes;
        static get(): Properties.IPropertyType[];
    }
}
declare module ProStyle.Serialization {
    import Properties = ProStyle.Models.Properties;
    class PropertyReader {
        static read(type: Properties.IPropertyType, json: any): Properties.IProperty;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    import Properties = ProStyle.Models.Properties;
    class PropertyListReader {
        static read(story: Models.Story, json: any, propertyTypes: Properties.IPropertyType[], defaultClassName?: string, defaultClassValue?: any, priorClasses?: string[]): Properties.PropertyList;
    }
}
declare module ProStyle.Serialization {
    import Scripts = ProStyle.Models.Scripts;
    import Properties = ProStyle.Models.Properties;
    class ScriptSetReader {
        private static read(itemModelSet, name, json, propertyTypes);
        static readJson(itemModelSet: Models.IItemModelSet, name: string, json: any, labels: string[], propertyTypes: Properties.IPropertyType[]): Scripts.ScriptSet;
    }
}
declare module ProStyle.Extensions.Items.Image {
    import Models = ProStyle.Models;
    function deserialize(itemModelSet: Models.IItemModelSet, json: any): ImageItemModel;
}
declare module ProStyle.Serialization {
    import Properties = ProStyle.Models.Properties;
    class PropertyWriter {
        static writeSet(json: any, properties: Properties.IProperty[]): void;
        static write(property: Properties.IProperty): any;
    }
}
declare module ProStyle.Serialization {
    import Properties = ProStyle.Models.Properties;
    class PropertyListWriter {
        static write(propertyList: Properties.PropertyList): any;
    }
}
declare module ProStyle.Serialization {
    import Scripts = ProStyle.Models.Scripts;
    class ScriptWriter {
        static write(script: Scripts.Script): any;
        private static writeInitEvent(script);
        private static writeStepEvent(script);
        private static writeSwitchEvent(script);
        private static writeActionsOrphan(script);
        private static writePropertyOrphan(script);
    }
}
declare module ProStyle.Extensions.Items.Image {
    function serialize(item: ImageItemModel): any;
}
declare module ProStyle.Extensions.Items.Layer {
    import Scripts = ProStyle.Models.Scripts;
    class LayerItemModel extends Models.Items.ItemModel implements Models.IItemModelSet {
        items: Models.Items.ItemModel[];
        flow: Models.Flows.FlowModel;
        story: Models.Story;
        constructor(itemModelSet: Models.IItemModelSet, init: Models.Properties.PropertyList, scriptSet: Scripts.ScriptSet);
        getCountOfStepsUsed(): number;
        serialize(): any;
        createView(itemViewSet: Views.IItemViewSet): LayerItemView;
    }
}
declare module ProStyle.Extensions.Items.Layer {
    import Items = ProStyle.Views.Items;
    class LayerItemView extends Views.Items.ItemView implements Views.IItemViewSet {
        model: LayerItemModel;
        items: Items.ItemView[];
        constructor(model: LayerItemModel, itemViewSet: Views.IItemViewSet);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
        generateStepActions(itemViewSet: Views.IItemViewSet, pageSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string): void;
    }
}
declare module ProStyle.Extensions.Items.Layer {
    import Properties = ProStyle.Models.Properties;
    class LayerPropertyTypes {
        private static _propertyTypes;
        static get(): Properties.IPropertyType[];
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    import Flows = ProStyle.Models.Flows;
    import Items = ProStyle.Models.Items;
    class PageReader {
        static read(flow: Flows.FlowModel, json: any): Models.PageModel;
        private static readSteps(page, json, items);
        static readItems(itemModelSet: Models.IItemModelSet, json: any): Items.ItemModel[];
    }
}
declare module ProStyle.Extensions.Items.Layer {
    import Models = ProStyle.Models;
    function deserialize(itemModelSet: Models.IItemModelSet, json: any): LayerItemModel;
}
declare module ProStyle.Extensions.Items.Layer {
    function serialize(model: LayerItemModel): any;
}
declare module ProStyle.Extensions.Items.Text {
    import Models = ProStyle.Models;
    import Items = Models.Items;
    import Properties = Models.Properties;
    import Scripts = Models.Scripts;
    class TextItemModel extends Items.ItemModel {
        text: string;
        stackedLines: boolean;
        stackedWords: boolean;
        stackedChars: boolean;
        linesInit: Properties.PropertyList;
        linesScriptSet: Scripts.ScriptSet;
        wordsInit: Properties.PropertyList;
        wordsScriptSet: Scripts.ScriptSet;
        charsInit: Properties.PropertyList;
        charsScriptSet: Scripts.ScriptSet;
        constructor(itemModelSet: Models.IItemModelSet, text: string, stackedLines: boolean, stackedWords: boolean, stackedChars: boolean, init: Properties.PropertyList, scriptSet: Scripts.ScriptSet, linesInit: Properties.PropertyList, linesScriptSet: Scripts.ScriptSet, wordsInit: Properties.PropertyList, wordsScriptSet: Scripts.ScriptSet, charsInit: Properties.PropertyList, charsScriptSet: Scripts.ScriptSet);
        serialize(): any;
        createView(itemViewSet: Views.IItemViewSet): TextItemView;
    }
}
declare module ProStyle.Extensions.Items.Text {
    import Items = ProStyle.Views.Items;
    class TextItemView extends Items.ItemView {
        model: TextItemModel;
        splitText: any;
        lines: boolean;
        words: boolean;
        chars: boolean;
        constructor(model: TextItemModel, itemViewSet: ProStyle.Views.IItemViewSet);
        initializeItem(timeline: TimelineMax, cameraSize: Types.Size): void;
        generateStepActions(itemViewSet: Views.IItemViewSet, pageSize: Types.Size, timeline: TimelineMax, stepIndex: number, label: string): void;
    }
}
declare module ProStyle.Extensions.Items.Text {
    import Properties = ProStyle.Models.Properties;
    class TextPropertyTypes {
        private static _propertyTypes;
        private static _linePropertyTypes;
        private static _wordPropertyTypes;
        private static _charPropertyTypes;
        private static cacheProperties();
        private static addPropertyType(arrays, propertyType);
        static get(): Properties.IPropertyType[];
        static getForLines(): Properties.IPropertyType[];
        static getForWords(): Properties.IPropertyType[];
        static getForChars(): Properties.IPropertyType[];
    }
}
declare module ProStyle.Extensions.Items.Text {
    import Models = ProStyle.Models;
    function deserialize(itemModelSet: Models.IItemModelSet, json: any): TextItemModel;
}
declare module ProStyle.Extensions.Items.Text {
    function serialize(model: TextItemModel): any;
}
declare module ProStyle.Extensions.Items.Unknown {
    import Items = ProStyle.Views.Items;
    class UnknownItemView extends Items.ItemView {
        model: UnknownItemModel;
        private divs;
        constructor(model: UnknownItemModel, itemViewSetElem: ProStyle.Views.IItemViewSet);
    }
}
declare module ProStyle.Extensions.Items.Unknown {
    function serialize(model: UnknownItemModel): any;
}
declare module ProStyle.Models.Scripts {
    class ActionsScript extends Script {
        actions: Actions.Action[];
        constructor(scriptSet: ScriptSet, type: ScriptType);
        removeAction(action: Actions.Action): void;
    }
}
declare module ProStyle.Models.Actions {
    enum ActionType {
        SetProperties = 0,
    }
}
declare module ProStyle.Models.Actions.ActionType {
    function fromString(value: string): ActionType;
    function toString(value: ActionType): string;
}
declare module ProStyle.Models.Actions {
    class Action {
        script: Scripts.ActionsScript;
        actionType: ActionType;
        delay: number;
        constructor(script: Scripts.ActionsScript, actionType: ActionType, delay: number);
        saveJson(): any;
    }
}
declare module ProStyle.Models.Properties {
    interface IPropertySet {
        properties: IProperty[];
    }
}
declare module ProStyle.Models.Actions {
    class SetPropertiesAction extends Action implements Properties.IPropertySet {
        properties: Properties.IProperty[];
        constructor(script: Scripts.ActionsScript, delay: number, properties: Properties.IProperty[]);
    }
}
declare module ProStyle.Models {
    class CanvasPropertyTypes {
        private static _propertyTypes;
        static get(): Properties.IPropertyType[];
    }
}
declare module ProStyle.Models.Flows {
    class PlacementFlowModel extends FlowModel {
        private defaultPageClassIfNotGiven;
        constructor(story: Story, flowType: string, placement: Types.Placement, defaultPageClass: string, pageAspectRatio: number, defaultPageClassIfNotGiven: string);
        getDefaultPageClassName(): string;
        getDefaultPageClassValue(): any;
    }
}
declare module ProStyle.Models {
    class FramePropertyTypes {
        private static _propertyTypes;
        static get(): Properties.IPropertyType[];
    }
}
declare module ProStyle.Types {
    class Stacks {
        current: Placement;
        future: Placement;
        futureOffset: Placement;
        past: Placement;
        pastOffset: Placement;
        constructor(current: Placement, future: Placement, futureOffset: Placement, past: Placement, pastOffset: Placement);
        static fromJson(json: any): Stacks;
    }
}
declare module ProStyle.Models.Items {
    class SequencedItemModel extends ItemModel {
        sequenceOnStepIndex: number;
        constructor(itemModelSet: IItemModelSet, itemType: string, typeLabel: string, sequenceOnStepIndex: number, init: Properties.PropertyList, scriptSet: Scripts.ScriptSet);
    }
}
declare module ProStyle.Models {
    class PagePropertyTypes {
        private static _propertyTypes;
        static get(): Properties.IPropertyType[];
    }
}
declare module ProStyle.Models.Properties.Variables {
    class Variable<T> implements IVariable {
        type: IVariableType;
        private _value;
        defaultValueOverride: T;
        constructor(type: IVariableType);
        getValue(getDefaultIfMissing?: boolean): T;
        setValue(value: T): void;
        render(includeLabel: boolean, includeText: any): string;
    }
}
declare module ProStyle.Models.Scripts {
    class ActionsOrphan extends ActionsScript {
        scriptSet: ScriptSet;
        actions: Actions.Action[];
        constructor(scriptSet: ScriptSet);
    }
}
declare module ProStyle.Models.Scripts {
    class PropertiesScript extends Script implements Properties.IPropertySet {
        properties: Properties.IProperty[];
        constructor(scriptSet: ScriptSet, type: ScriptType);
    }
}
declare module ProStyle.Models.Scripts {
    class InitEvent extends PropertiesScript {
        scriptSet: ScriptSet;
        constructor(scriptSet: ScriptSet);
    }
}
declare module ProStyle.Models.Scripts {
    class PropertyOrphan extends PropertiesScript {
        scriptSet: ScriptSet;
        constructor(scriptSet: ScriptSet);
    }
}
declare module ProStyle.Models.Scripts {
    class StepEvent extends ActionsScript {
        stepIndex: number;
        constructor(scriptSet: ScriptSet, stepIndex: number);
    }
}
declare module ProStyle.Models.Scripts {
    class SwitchEvent extends ActionsScript {
        switchName: string;
        constructor(scriptSet: ScriptSet, switchName: string);
    }
}
declare module ProStyle.Models {
    class Step {
        autoAdvanceDelay: number;
        startLabel: string;
        stopLabel: string;
        time: number;
        constructor(autoAdvanceDelay?: number);
    }
}
declare module ProStyle.Serialization {
    import Actions = ProStyle.Models.Actions;
    import Scripts = ProStyle.Models.Scripts;
    class ActionReader {
        static readArray(script: Scripts.ActionsScript, json: any): Actions.Action[];
        static read(script: Scripts.ActionsScript, json: any): Actions.Action;
        private static readPropertiesAction(script, json);
    }
}
declare module ProStyle.Serialization {
    import Actions = ProStyle.Models.Actions;
    class ActionWriter {
        static writeArray(actions: Actions.Action[]): any[];
        static write(action: Actions.Action): any;
        private static writePropertiesAction(action);
    }
}
declare module ProStyle.Serialization {
    class CanvasReader {
        static read(json: any): Models.CanvasModel;
    }
}
declare module ProStyle.Serialization {
    class CanvasWriter {
        static write(canvas: Models.CanvasModel): any;
    }
}
declare module ProStyle.Serialization {
    class ControllerReader {
        static read(json: any): Controllers.Controller;
        static lookupExtension(itemType: string): any;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class FlowWriter {
        static write(flow: Models.Flows.FlowModel): any;
    }
}
declare module ProStyle.Serialization {
    class FrameReader {
        static DEFAULT_ASPECT_RATIO: number;
        static read(json: any): Models.FrameModel;
    }
}
declare module ProStyle.Serialization {
    class FrameWriter {
        static write(frame: Models.FrameModel): any;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class ItemWriter {
        static write(item: Models.Items.ItemModel): any;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class PageWriter {
        static write(page: Models.PageModel): any;
        static writeItems(itemModelSet: Models.IItemModelSet, json: any): void;
    }
}
declare module ProStyle.Serialization {
    import Scripts = ProStyle.Models.Scripts;
    class ScriptReader {
        static read(scriptSet: Scripts.ScriptSet, json: any): Scripts.Script;
        private static readInitEvent(scriptSet, json);
        private static readStepEvent(scriptSet, json);
        private static readSwitchEvent(scriptSet, json);
        private static readActionsOrphan(scriptSet, json);
        private static readPropertyOrphan(scriptSet, json);
    }
}
declare module ProStyle.Serialization {
    import Scripts = ProStyle.Models.Scripts;
    class ScriptSetWriter {
        static write(scriptSet: Scripts.ScriptSet): any;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class StepReader {
        static read(page: Models.PageModel, json: any): Models.Step;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class StepWriter {
        static write(step: Models.Step): any;
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class StoryReader {
        static read(json: any): Models.Story;
        private static checkPL(story);
    }
}
declare module ProStyle.Serialization {
    import Models = ProStyle.Models;
    class StoryWriter {
        static write(story: Models.Story): any;
        static stringify(story: Models.Story): string;
    }
}
declare module ProStyle.Util {
    function autoButton(btn: any, action: any, start?: number, speedup?: number): void;
}
declare module ProStyle.Util {
    function checkBrowserSupport(): boolean;
}
declare module ProStyle.Util {
    function configureMetaViewport(): void;
}
declare module ProStyle.Util {
    function contentLoaded(win: any, fn: any): void;
}
declare module ProStyle.Util {
    function createChildImageElement(parentDiv: HTMLDivElement, cssClass: string, src: string, width?: number, height?: number): HTMLImageElement;
}
declare module ProStyle.Util {
    function createStyleElement(id: string): HTMLStyleElement;
}
declare module ProStyle.Util {
    function createSvgElement(name: any, attrs: any, opt_parent: any): SVGElement;
}
declare module ProStyle.Util {
    function prefixCssStyleIfNeeded(cssStyle: string): string;
}
declare module ProStyle.Util {
    function encodeStyle(cssStyle: string, value: string): string;
}
declare module ProStyle.Util {
    function encodeStyles(cssStyles: any): string;
}
declare module ProStyle.Util {
    function encodeStyleSheet(styles: any): string;
}
declare module ProStyle.Util {
    function getElementText(element: HTMLElement): string;
}
declare module ProStyle.Util {
    function lowercaseProperties(json: any): any;
}
declare module ProStyle.Util {
    function getSetup(json: any, name: string): any;
}
declare module ProStyle.Util {
    function getGSTransform(div: HTMLElement): any;
}
declare module ProStyle.Util {
    function getStyleElement(styleId: string): HTMLStyleElement;
}
declare module ProStyle.Util {
    function insertIntoArray(array: any[], index: number, item: any): void;
}
declare module ProStyle.Util {
    function logStepValues(flowIndex: number, pageIndex: number, itemIndex: number, stepIndex: number, values: any): void;
}
declare module ProStyle.Util {
    function makeArray(a: any): any;
}
declare module ProStyle.Util {
    function querySelectorAll(selector: string, context?: NodeSelector): any;
}
declare module ProStyle.Util {
    function svgAddClass(svgElement: SVGElement, className: string): void;
}
declare module ProStyle.Util {
    function svgGetBounds(svgElement: SVGElement): any;
}
declare module ProStyle.Util {
    function svgRemoveClass(svgElement: SVGElement, className: string): void;
}
declare module ProStyle.Util {
    function createChildSvgElement(parent: Element, tag: string, attrs?: any): SVGElement;
}
declare module ProStyle.Util {
    function getOffset(elem: HTMLElement): {
        top: number;
        left: number;
    };
}
declare module ProStyle.Views.Actions {
    import Actions = ProStyle.Models.Actions;
    class SetPropertiesAction {
        static generateTimeline(itemViewSet: IItemViewSet, view: View, divs: Element[], action: Actions.SetPropertiesAction, timeline: TimelineMax, containerSize: Types.Size, afterCssBuckets?: AfterCssBuckets): number;
        private static getMoveTo(properties, items);
        static generateMoveTo(div: HTMLDivElement, targetDiv: HTMLDivElement, timeline: TimelineMax): void;
    }
}
declare module ProStyle.Views.Flows {
    import Models = ProStyle.Models;
    class PlacementFlowView extends FlowView {
        model: Models.Flows.FlowModel;
        constructor(model: Models.Flows.FlowModel, camera: CameraView, flowIndex: number);
    }
}
declare module ProStyle.Views {
    import Models = ProStyle.Models;
    class Step {
        step: Models.Step;
        flowIndex: number;
        pageIndex: number;
        stepIndex: number;
        sequencedItems: Views.Items.SequencedItemView[];
        label: string;
        startLabel: string;
        startTime: number;
        stopLabel: string;
        stopTime: number;
        time: number;
        playerStepIndex: number;
        constructor(step: Models.Step, flowIndex: number, pageIndex: number, stepIndex: number, sequencedItems: Views.Items.SequencedItemView[]);
        isAtStart(time: number): boolean;
        isAtEnd(time: number): boolean;
        getSubStepCount(): number;
    }
}
declare module ProStyle.Views {
    class Timeline {
        timeline: TimelineMax;
        constructor(frame: Views.FrameView, positionChanged: () => void);
        private generateTimeline(frame, positionChanged);
    }
}
declare module ProStyle {
    function reload(): void;
    function bootstrap(): void;
}
