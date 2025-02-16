const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    maxNumBoxes: 1,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.6,    // confidence threshold for predictions.
}

handTrack.load(modelParams).then(model => {
    // Run the detection
    handTrack.startVideo(video).then(status => {
        if (status) {
            navigator.mediaDevices.getUserMedia({ video: {} }).then(stream => {
                video.srcObject = stream;
                setInterval(() => {
                    model.detect(video).then(predictions => {
                        if (predictions.length > 0) {
                            const hand = predictions[0];
                            const bbox = hand.bbox;
                            const x = bbox[0] + bbox[2] / 2;
                            const y = bbox[1] + bbox[3] / 2;
                            drawHandPosition(x, y);
                        }
                    });
                }, 100);
            });
        }
    });
});

function drawHandPosition(x, y) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.fillStyle = 'red';
    context.fill();
}