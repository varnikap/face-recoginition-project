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
        document.getElementById("result").innerHTML ='<img id="selfie_image" src="'+data_uri+'"/>';

    });
}

console.log('m15 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ZxjMu7qYb/model.json',modelLoaded);
function modelLoaded() 
{ 
    console.log('Model Loaded!'); 
} 
function identify()
{
      img= document.getElementById("selfie_image");
      classifier.classify(img, gotResult);
}
function gotResult(error, results)

{
    if(error)
    {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("obj").innerHTML = "Object: " + results[0].label;    
        document.getElementById("acc").innerHTML = "Accurancy: " + results[0].confidence.toFixed(3);
    }

}
