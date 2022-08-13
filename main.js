Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
camera= document.getElementById("camera");

Webcam.attach('#camera');



function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lLKemjp9z/model.json', modelLoaded);
function modelLoaded(){console.log("modelo cargado")}

function check() {
     img = document.getElementById('captured_image');
      classifier.classify(img, gotResult); 
    }

    function gotResult(error, results) {
         // Muestra el error en la consola 
         if (error) { console.error(error); } else { 
            // Los resultados están en un array ordenado por presición. 
            console.log(results);
             document.getElementById("result_object_name").innerHTML = results[0].label;
              document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
             } }
