// document.getElementById("mainFrame").style.backgroundImage=`url("https://picsum.photos/${parseInt(window.innerWidth*0.9)}/${parseInt(window.innerHeight*0.75)}")`

document.getElementById("mainFrame2").setAttribute('src',`https://picsum.photos/${parseInt(window.innerWidth*0.9)}/${parseInt(window.innerHeight*0.75)}`);

document.getElementById("mainFrame").setAttribute('height',`${parseInt(window.innerHeight*0.75)}`);
document.getElementById("mainFrame").setAttribute('width',`${parseInt(window.innerWidth*0.9)}`);
document.getElementById("mainFrame2").setAttribute('height',`${parseInt(window.innerHeight*0.75)}`);
document.getElementById("mainFrame2").setAttribute('width',`${parseInt(window.innerWidth*0.9)}`);

window.addEventListener('resize',()=>{
    document.getElementById("mainFrame2").setAttribute('src',`https://picsum.photos/${parseInt(window.innerWidth*0.9)}/${parseInt(window.innerHeight*0.75)}`);

    document.getElementById("mainFrame").setAttribute('height',`${parseInt(window.innerHeight*0.75)}`);
    document.getElementById("mainFrame").setAttribute('width',`${parseInt(window.innerWidth*0.9)}`);
    document.getElementById("mainFrame2").setAttribute('height',`${parseInt(window.innerHeight*0.75)}`);
    document.getElementById("mainFrame2").setAttribute('width',`${parseInt(window.innerWidth*0.9)}`);
})


function takeShot(){
    // html2canvas(document.getElementById('mainFrame'),{dpi:300}).then(canvas=>{
    //     console.log(canvas.toDataURL('image/png'));
    // });

    canvasFrame = document.getElementById('mainFrame');
    imgObject = document.getElementById('mainFrame2');

    canvasFrame.style.display='block';
    imgObject.style.display='none';

    ctx = canvasFrame.getContext("2d")
    ctx.drawImage(imgObject, 0, 0);

    console.log(canvasFrame.toDataURL('image/png'));

    imageLink = document.getElementById('imageLink');
    imageLink.setAttribute('href',`${canvasFrame.toDataURL('image/png')}`);

    dt = new Date();

    imageLink.setAttribute('download',`${dt.getTime()}.png`);
    imageLink.click();

    imgObject.style.display='block';
    canvasFrame.style.display='none';
};