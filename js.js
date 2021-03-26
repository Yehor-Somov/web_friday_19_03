$(function() {
    $("#R").knob({
        'min': 0,
        'max': 255,
        'bgColor' : '#333',
        'fgColor' : 'rgb(255, 0, 0)', 
        'displayInput' : false,
        'width' : 300,
        'height' : 300,
        'thickness': 0.3
    });
    $("#G").knob({
        'min': 0,
        'max': 255,
        'bgColor' : '#333',
        'fgColor' : 'rgb(0, 255, 0)',
        'displayInput' : false,
        'width' : 300,
        'height' : 300,
        'thickness': 0.3
    });
    $("#B").knob({
        'min': 0,
        'max': 255,
        'bgColor' : '#333',
        'fgColor' : 'rgb(0, 0, 255)', 
        'displayInput' : false,
        'width' : 300,
        'height' : 300,
        'thickness': 0.3
    });

    setInterval(() => $('.container').css({
        'background' : `rgb(${$("#R").val()}, ${$("#G").val()}, ${$("#B").val()})`
    }), 1);

});