Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera= document.getElementById("camera");

Webcam.attach(" #camera ");

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ='<img id="captures_image" src="'+data_uri+'"/>';

    });
}

console.log('m15 version:', ml5.version);

classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/J3et4v2X8/',modelLoaded);

