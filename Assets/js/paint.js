    function drawPencil (e) {
         if (type === 'trait') {
            trait.push(e.pageX - pos.left, e.pageY - pos.top);
            ctx.beginPath();
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.moveTo(trait[0], trait[1]);
            ctx.lineTo(trait[2], trait[3]);
            ctx.strokeStyle = backgroundcolor;
            ctx.lineWidth = width;
            ctx.stroke();
        }
        if (trait.length >= 4) {
            trait = [];
        }
        if (type === 'viderectangle') {
            viderectangle.push(e.pageX - pos.left, e.pageY - pos.top);
            ctx.beginPath();
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.rect(viderectangle[0], viderectangle[1], (viderectangle[2] - viderectangle[0]), (viderectangle[3] - viderectangle[1]));
            ctx.strokeStyle = contourcolor;
            ctx.lineWidth = width;
            ctx.stroke();
        }
        if (viderectangle.length >= 3) {
            viderectangle = [];
        }
        if (type === 'backgroundrectangle') {
            backgroundrectangle.push(e.pageX - pos.left, e.pageY - pos.top);
            ctx.beginPath();
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.fillRect(backgroundrectangle[0], backgroundrectangle[1], (backgroundrectangle[2] - backgroundrectangle[0]), (backgroundrectangle[3] - backgroundrectangle[1]));
            ctx.fillStyle = backgroundcolor;
            ctx.strokeStyle = contourcolor;
            ctx.lineWidth = width;
            ctx.stroke();
        }
        if (backgroundrectangle.length >= 3) {
            backgroundrectangle = [];
        }
        if (type === 'videcircle') {
            videcircle.push(e.pageX - pos.left, e.pageY - pos.top);
            ctx.beginPath();
            if (videcircle[0] > videcircle[2]) {
                ctx.shadowBlur = shadow;
                ctx.shadowColor = shadowcolor;
                ctx.arc(videcircle[0], videcircle[1], Math.sqrt(Math.pow(videcircle[0] - videcircle[2], 2) + Math.pow(videcircle[1] - videcircle[3], 2)), 0, 2 * Math.PI);
                ctx.strokeStyle = contourcolor;
                ctx.lineWidth = width;
                ctx.stroke();
            } else {
                ctx.shadowBlur = shadow;
                ctx.shadowColor = shadowcolor;
                ctx.arc(videcircle[0], videcircle[1], Math.sqrt(Math.pow(videcircle[2] - videcircle[0], 2) + Math.pow(videcircle[3] - videcircle[1], 2)), 0, 2 * Math.PI);
                ctx.strokeStyle = contourcolor;
                ctx.lineWidth = width;
                ctx.stroke();
            }
        }
        if (videcircle.length >= 3) {
            videcircle = [];
        }
        if (type === 'backgroundcircle') {
            backgroundcircle.push(e.pageX - pos.left, e.pageY - pos.top);
            ctx.beginPath();
            if (backgroundcircle[0] > backgroundcircle[2]) {
                ctx.shadowBlur = shadow;
                ctx.shadowColor = shadowcolor;
                ctx.arc(backgroundcircle[0], backgroundcircle[1], Math.sqrt(Math.pow(backgroundcircle[0] - backgroundcircle[2], 2) + Math.pow(backgroundcircle[1] - backgroundcircle[3], 2)), 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = backgroundcolor;
                ctx.strokeStyle = contourcolor;
                ctx.lineWidth = width;
                ctx.stroke();
            } else {
                ctx.shadowBlur = shadow;
                ctx.shadowColor = shadowcolor;
                ctx.arc(backgroundcircle[0], backgroundcircle[1], Math.sqrt(Math.pow(backgroundcircle[2] - backgroundcircle[0], 2) + Math.pow(backgroundcircle[3] - backgroundcircle[1], 2)), 0, 2 * Math.PI);
                ctx.fill();
                ctx.fillStyle = backgroundcolor;
                ctx.strokeStyle = contourcolor;
                ctx.lineWidth = width;
                ctx.stroke();
            }
        }
        if (backgroundcircle.length >= 3) {
            backgroundcircle = [];
        }
        if(type === 'backgroundheart') {
            ctx.beginPath();
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.moveTo(e.pageX - pos.left, e.pageY - pos.top);
            ctx.bezierCurveTo((e.pageX - pos.left), (e.pageY - pos.top - 10), (e.pageX - pos.left - 10), (e.pageY - pos.top - 20), (e.pageX - pos.left - 23), (e.pageY - pos.top - 20));
            ctx.bezierCurveTo((e.pageX - pos.left - 60), (e.pageY - pos.top - 20), (e.pageX - pos.left - 60), (e.pageY - pos.top + 23), (e.pageX - pos.left - 60), (e.pageY - pos.top + 23));
            ctx.bezierCurveTo((e.pageX - pos.left - 60), (e.pageY - pos.top + 40), (e.pageX - pos.left - 35), (e.pageY - pos.top + 65), (e.pageX - pos.left), (e.pageY - pos.top + 80));
            ctx.bezierCurveTo((e.pageX - pos.left + 35), (e.pageY - pos.top + 65), (e.pageX - pos.left + 60), (e.pageY - pos.top + 40), (e.pageX - pos.left + 60), (e.pageY - pos.top + 23));
            ctx.bezierCurveTo((e.pageX - pos.left + 60), (e.pageY - pos.top + 23), (e.pageX - pos.left + 60), (e.pageY - pos.top - 20), (e.pageX - pos.left + 23), (e.pageY - pos.top - 20));
            ctx.bezierCurveTo((e.pageX - pos.left + 10), (e.pageY - pos.top - 20), (e.pageX - pos.left), (e.pageY - pos.top - 3), (e.pageX - pos.left), (e.pageY - pos.top));
            ctx.fillStyle = backgroundcolor;
            ctx.strokeStyle = contourcolor;
            ctx.lineWidth = width;
            ctx.fill();
            ctx.stroke();
        }
        if(type === 'videheart') {
            ctx.beginPath();
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.moveTo(e.pageX - pos.left, e.pageY - pos.top);
            ctx.bezierCurveTo((e.pageX - pos.left), (e.pageY - pos.top - 10), (e.pageX - pos.left - 10), (e.pageY - pos.top - 20), (e.pageX - pos.left - 23), (e.pageY - pos.top - 20));
            ctx.bezierCurveTo((e.pageX - pos.left - 60), (e.pageY - pos.top - 20), (e.pageX - pos.left - 60), (e.pageY - pos.top + 23), (e.pageX - pos.left - 60), (e.pageY - pos.top + 23));
            ctx.bezierCurveTo((e.pageX - pos.left - 60), (e.pageY - pos.top + 40), (e.pageX - pos.left - 35), (e.pageY - pos.top + 65), (e.pageX - pos.left), (e.pageY - pos.top + 80));
            ctx.bezierCurveTo((e.pageX - pos.left + 35), (e.pageY - pos.top + 65), (e.pageX - pos.left + 60), (e.pageY - pos.top + 40), (e.pageX - pos.left + 60), (e.pageY - pos.top + 23));
            ctx.bezierCurveTo((e.pageX - pos.left + 60), (e.pageY - pos.top + 23), (e.pageX - pos.left + 60), (e.pageY - pos.top - 20), (e.pageX - pos.left + 23), (e.pageY - pos.top - 20));
            ctx.bezierCurveTo((e.pageX - pos.left + 10), (e.pageY - pos.top - 20), (e.pageX - pos.left), (e.pageY - pos.top - 3), (e.pageX - pos.left), (e.pageY - pos.top));
            ctx.fillStyle = backgroundcolor;
            ctx.strokeStyle = contourcolor;
            ctx.lineWidth = width;
            ctx.closePath();
            ctx.stroke();
        }
        if(type === 'backgroundcaret') {
            ctx.beginPath();
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.moveTo(e.pageX - pos.left, e.pageY - pos.top);
            ctx.moveTo((e.pageX - pos.left - 75), (e.pageY - pos.top - 50));
            ctx.lineTo((e.pageX - pos.left - 100), (e.pageY - pos.top - 75));
            ctx.lineTo((e.pageX - pos.left - 100), (e.pageY - pos.top - 25)); 
            ctx.fillStyle = backgroundcolor;
            ctx.strokeStyle = contourcolor;
            ctx.lineWidth = width;
            ctx.fill();
            ctx.closePath();
            ctx.stroke();
        }
        if(type === 'videcaret') {
            ctx.beginPath();
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.moveTo(e.pageX - pos.left, e.pageY - pos.top);
            ctx.moveTo((e.pageX - pos.left - 75), (e.pageY - pos.top - 50));
            ctx.lineTo((e.pageX - pos.left - 100), (e.pageY - pos.top - 75));
            ctx.lineTo((e.pageX - pos.left - 100), (e.pageY - pos.top - 25)); 
            ctx.fillStyle = backgroundcolor;
            ctx.strokeStyle = contourcolor;
            ctx.lineWidth = width;
            ctx.closePath();
            ctx.stroke();
        }
        if (type === 'text') {
            styleText = sizeText + " " + font;
            ctx.font = styleText;
            ctx.shadowBlur = shadow;
            ctx.shadowColor = shadowcolor;
            ctx.fillStyle = backgroundcolor;
            ctx.strokeStyle = contourcolor;
            ctx.fill();
            ctx.fillText(document.getElementById('text').value, e.pageX - pos.left, e.pageY - pos.top);
        }
    }

    function drawMove(e) {
        if (type === 'pencil' || type === 'rubber') {
            if (departClique === true) {
                if (departMove === false) {
                    ctx.beginPath();
                    ctx.moveTo(e.pageX - pos.left, e.pageY - pos.top);
                    departMove = true;
                } else {
                    ctx.lineTo(e.pageX - pos.left, e.pageY - pos.top);
                    if (type === 'pencil') {
                        ctx.shadowBlur = shadow;
                        ctx.shadowColor = shadowcolor;
                        ctx.strokeStyle = backgroundcolor;
                        ctx.lineWidth = width;
                    }
                    if (type === 'rubber') {
                        ctx.shadowBlur = 0;
                        ctx.shadowColor = shadowcolor;
                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.lineWidth = width;
                    }
                    ctx.stroke();
                    ctx.globalCompositeOperation = 'source-over';
                }
            }
        }
    }
    document.getElementById('paint').onclick = function (e) {
       drawPencil(e);
    }
     document.getElementById('paint').onmousemove = function (e) {
       drawMove(e);
    }