    /** CK My_Paint alias Painting projet 2017 */
    "use-strict";

    var canvas = document.getElementById('paint');
    var ctx = canvas.getContext('2d');
    var pos = $('#paint').offset();
    var trait = [];
    var viderectangle = [];
    var backgroundrectangle = [];
    var videcircle = [];
    var backgroundcircle = [];
    var resize = [];
    var departClique = false;
    var departMove = false;
    var type;
    var contourcolor = '#000000';
    var backgroundcolor = '#000000';
    var shadowcolor = '#000000';

    $('#contourcolor').change(function () {
        contourcolor = $('#contourcolor').val();
    });
    $('#backgroundcolor').change(function () {
        backgroundcolor = $('#backgroundcolor').val();
    });
    $('#shadowcolor').change(function () {
        shadowcolor = $('#shadowcolor').val();
    });
    $('#width').change(function () {
        width = $('#width').val();
        $('#valuewidth').html(width);
    });
    $('#shadow').change(function () {
        shadow = $('#shadow').val();
        $('#valueShadow').html(shadow);
    });
    $('#font').change(function () {
        font = $('#font').val();
    });
    $('#textSize').change(function () {
        sizeText = $('#textSize').val() + "px";
        $('#valueText').html(sizeText);
    });
    $('#ajouter').click(function () {
        type = 'image';
        image = $('#picturePaint').val();
        picture = new Image($('#widthpicture').val(), $('#heightpicture').val());
        picture.src = image;
        $('#picture').html(picture);
    });
    $('#textValidator').click(function () {
        type = 'text';
    });
    $('#trait').click(function () {
        type = 'trait';
    });
    $('#viderectangle').click(function () {
        type = 'viderectangle';
    });
    $('#backgroundrectangle').click(function () {
        type = 'backgroundrectangle';
    });
    $('#videcircle').click(function () {
        type = 'videcircle';
    });
    $('#backgroundcircle').click(function () {
        type = 'backgroundcircle';
    });
    $('#pencil').click(function () {
        type = 'pencil';
    });
    $('#rubber').click(function () {
        type = 'rubber';
    });
    $('#resize').click(function () {
        type = 'resize';
    });
    $('#reset').click(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
    $('#save').click(function () {
      downloadCanvas(this, 'paint', 'test.png');
    });
    $('#paint').on("mousedown", function () {
        if (type === 'pencil' || type === 'rubber') {
            departClique = true;
        }
    });
    $('#paint').on("mouseup", function () {
        if (type === 'pencil' || type === 'rubber') {
            departClique = false;
            departMove = false;
        }
    });