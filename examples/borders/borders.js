var borders = Pro.Motion.Stories.borders = Pro.Motion.Stories.borders || {};

borders.story = {
    frame: {
        padding:5,
        init: {background:"#BADA55", corners:true}
    },
    items: [
        {   text:"padding",
            init: {border: [1, "green", "double"]},
            actions: [
                {anim:2, padding:[7, 0, 0, 0]},
                {anim:2, padding:[7, 0, 7, 0]},
                {anim:2, padding:[7, 0, 7, 7]},
                {anim:2, padding:[7, 7, 7, 7]},
                {anim:1, padding:[0, 0, 0, 0]}
            ]
        },
        {   text:"corners",
            init: {pos:[-35, -35], border:true, corners:true, padding:true},
            actions: [
                {anim:2, corners:10},
                {anim:2, corners:[10, 0, 10, 0], padding:true},
                {anim:2, corners:[0, 10, 0, 10]},
                {anim:2, corners:true, padding:true},
            ]
        },
        {   text:"border",
            init: {pos:[35, 35], border:true, padding:true},
            actions: [
                {anim:2, border:[5, "blue"]},
                {anim:3, border:[2, "green", "groove"]},
                {anim:2, border:[2, "blue", "outset"]},
                {anim:2, border:true}
            ]
        },
        {   text:"border",
            init: {pos:[35, -35], border:true, padding:true},
            actions: [
                {anim:2, border:[2, "green", "dashed"]},
                {anim:2, border:[2, "red", "dotted"]},
                {anim:2, border:[2, "blue", "inset"]},
                {anim:2, border:true}
            ]
        },
        {   text:"shadow",
            init: {pos:[-35, 35], border:true, padding:true, shadow:true, corners:true},
            actions: [
                {anim:2, shadow:[2, 2, 5]},
                {anim:2, shadow:true},
                {anim:2, shadow:[-2, 2, 5]},
                {anim:2, shadow:[0, 0, 5, "rgba(12,40,255,1)"]},
                {anim:1, shadow:true}
            ]
        }
    ]
};
