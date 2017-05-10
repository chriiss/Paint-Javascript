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
    function ajoutPictures() {
        type = 'image';
        results = document.getElementById('picturePaint').value;
        picture = new Image(document.getElementById('widthpicture').value, document.getElementById('heightpicture').value);
        picture.src = results;
        $('#picture').html(picture);
    }
    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }

    document.getElementById('contourcolor').onchange = function() {
        contourcolor = document.getElementById('contourcolor').value;
    }
    document.getElementById('backgroundcolor').onchange = function() {
        backgroundcolor = document.getElementById('backgroundcolor').value;
    }
    document.getElementById('shadowcolor').onchange = function() {
        shadowcolor = document.getElementById('shadowcolor').value;
    }
    document.getElementById('width').onchange = function() {
        width = document.getElementById('width').value;
        document.getElementById('valuewidth').innerHTML = width;
    }
    document.getElementById('shadow').onchange = function () {
        shadow = document.getElementById('shadow').value;
        document.getElementById('valueShadow').innerHTML = shadow;
    };
    document.getElementById('font').onchange = function () {
        font = document.getElementById('font').value;
    }
    document.getElementById('textSize').onchange = function () {
        sizeText = document.getElementById('textSize').value + "px";
        document.getElementById('valueText').innerHTML = sizeText;
    }
    document.getElementById('ajouter').onclick = function () {
       ajoutPictures();
    }
    document.getElementById('textValidator').onclick = function () {
        type = 'text';
    }
    document.getElementById('trait').onclick = function () {
        type = 'trait';
    }
    document.getElementById('viderectangle').onclick = function () {
        type = 'viderectangle';
    }
    document.getElementById('backgroundrectangle').onclick = function () {
        type = 'backgroundrectangle';
    }
    document.getElementById('videcircle').onclick = function () {
        type = 'videcircle';
    }
    document.getElementById('backgroundcircle').onclick = function () {
        type = 'backgroundcircle';
    }
    document.getElementById('pencil').onclick = function () {
        type = 'pencil';
    }
    document.getElementById('rubber').onclick = function () {
        type = 'rubber';
    }
    document.getElementById('reset').onclick = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    document.getElementById('save').onclick = function () {
      downloadCanvas(this, 'paint', 'painting.png');
    }
    document.getElementById('paint').onmousedown = function() {
        if (type === 'pencil' || type === 'rubber') {
            departClique = true;
        }
    }
    document.getElementById('paint').onmouseup = function() {
        if (type === 'pencil' || type === 'rubber') {
            departClique = false;
            departMove = false;
        }
    }