var properties = Pro.Motion.Stories.properties = Pro.Motion.Stories.properties || {};

properties.story = {
    frame: {
        padding:10,
        init:{background: "#BADA55", corners: true}
    },
    items: [
        {   text: "opacity",
            init: {font:15, opacity:100, pos:[30, -45]},
            actions: [{anim:3, opacity:0}, {anim:3, opacity:100}]
        },
        {   text: "X",
            init: {font:15},
            actions: [{anim:3, pos:{x:-30}}, {anim:3, pos:{x:0}}]
        },
        {   text: "Y",
            init: {font:15},
            actions: [{anim:3, pos:{y:-40}}, {anim:3, pos:{y:0}}]
        },
        {   text: "Z",
            init: {font:15},
            actions: [{anim:3, pos:{z:50}}, {anim:3, pos:{z:0}}]
        },
        {   text: "scale",
            init: {font:30, position:[-25, -45], scale:100},
            actions: [{anim:3, scale:0}, {anim:3, scale:100}]
        },
        {   text: "skew",
            init: {font:15, pos:[-35, 25], skew:30},
            actions: [{anim:3, skew:-30}, {anim:3, skew:30}]
        },
        {   text: "rotation x",
            init: {font:10, position:[-5, 47]},
            action: {anim:{dur:6, ease:"linear"}, rot:{x:720}}
        },
        {   text: "rotation y",
            init: {font:10, position:[30, -10]},
            action: {anim:{dur:6, ease:"linear"}, rot:{y:720}}
        },
        {   text: "rotation z",
            init: {font:10, position:[32, 32]},
            action: {anim:{dur:6, ease:"linear"}, rot:{z:720}}
        }
    ]
};
