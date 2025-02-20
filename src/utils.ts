// Download DataURL
export function dataURL_downloader(dataURL: string, name: string) {
  const hyperlink = document.createElement('a');
  hyperlink.download = name;
  hyperlink.target = '_blank';
  hyperlink.href = dataURL;
  hyperlink.click();
  hyperlink.remove();
}

export function getMediaRecorder(
  canvas: HTMLCanvasElement,
  name: string
): MediaRecorder {
  // Recorde a video Stream
  const videoStream = canvas.captureStream();
  // Video Recorder
  const mediaRecorder = new MediaRecorder(videoStream);
  // temp chunks
  const chunks: BlobPart[] = [];
  // Store chunks
  mediaRecorder.ondataavailable = function (e) {
    chunks.push(e.data);
  };
  // Download video after recording is stopped
  mediaRecorder.onstop = function (_) {
    // Chunks ---> Blob
    const blob = new Blob(chunks, { type: 'video/mp4' });
    // Blob -----> DataURL
    const videoDataURL = URL.createObjectURL(blob);

    // Download video
    dataURL_downloader(videoDataURL, name);

    // Reset Chunks
    chunks.length = 0;
  };
  return mediaRecorder;
}
