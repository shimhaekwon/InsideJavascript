// JavaScript (script.js)
window.onload = async function() {
  const model = await tf.loadLayersModel('path_to_model/model.json');

  const imageInput = document.getElementById('imageInput');
  const imagePreview = document.getElementById('imagePreview');
  const predictButton = document.getElementById('predictButton');
  const predictionResult = document.getElementById('predictionResult');

  // 이미지 선택 시 미리보기 업데이트
  imageInput.addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function() {
      imagePreview.src = reader.result;
    }
    reader.readAsDataURL(e.target.files[0]);
  });

  // 예측 버튼 클릭 시 이미지 인식 수행
  predictButton.addEventListener('click', function() {
    const image = tf.browser.fromPixels(imagePreview);
    const resizedImage = tf.image.resizeBilinear(image, [224, 224]);
    const preprocessedImage = resizedImage.expandDims(0).toFloat().div(255);
    const predictions = model.predict(preprocessedImage);
    const topPredictions = Array.from(predictions.dataSync())
      .map((prob, i) => ({ probability: prob, className: classNames[i] }))
      .sort((a, b) => b.probability - a.probability)
      .slice(0, 5);

    predictionResult.innerHTML = '';
    topPredictions.forEach((prediction) => {
      predictionResult.innerHTML += `${prediction.className}: ${Math.round(prediction.probability * 100)}%<br>`;
    });
  });
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Load pre-trained model
// tf.loadLayersModel('path_to_model/model.json').then(model => {
//   // Image upload event listener
//   const uploadInput = document.getElementById('uploadInput');
//   uploadInput.addEventListener('change', event => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = e => {
//       const img = document.getElementById('imageElement');
//       img.src = e.target.result;
//     };

//     reader.readAsDataURL(file);
//   });

//   // Image recognition function
//   function recognizeImage() {
//     const img = document.getElementById('imageElement');

//     // Preprocess image (resize, normalization, etc.)
//     const preprocessedImage = preprocessImage(img);

//     // Perform inference
//     const predictions = model.predict(preprocessedImage);

//     // Process prediction results
//     const topPredictions = getTopPredictions(predictions, 5);

//     // Display top predictions
//     const predictionsDiv = document.getElementById('predictions');
//     predictionsDiv.innerHTML = '';
//     for (const prediction of topPredictions) {
//       const p = document.createElement('p');
//       p.textContent = `Label: ${prediction.label}, Confidence: ${prediction.confidence}`;
//       predictionsDiv.appendChild(p);
//     }
//   }

//   // Preprocess image function
//   function preprocessImage(image) {
//     // Resize image to desired dimensions
//     const resizedImage = tf.image.resizeBilinear(tf.browser.fromPixels(image), [224, 224]);

//     // Normalize image pixels
//     const normalizedImage = resizedImage.div(tf.scalar(255));

//     // Expand dimensions to match model input shape
//     const preprocessedImage = normalizedImage.expandDims();

//     return preprocessedImage;
//   }

//   // Get top predictions function
//   function getTopPredictions(predictions, k) {
//     const topPredictions = [];

//     const values = predictions.dataSync();
//     const indices = Array.from(values)
//       .map((value, index) => ({ value, index }))
//       .sort((a, b) => b.value - a.value)
//       .slice(0, k);

//     for (const { value, index } of indices) {
//       const label = getLabelByIndex(index);
//       topPredictions.push({ label, confidence: value });
//     }

//     return topPredictions;
//   }

//   // Get label by index function
//   function getLabelByIndex(index) {
//     // Define your label mapping or load it from a file
//     const labelMapping = {
//       0: 'label_1',
//       1: 'label_2',
//       // Add more label mappings as needed
//     };

//     return labelMapping[index];
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////////
