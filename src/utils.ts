// Download DataURL
export function dataURL_downloader(dataURL: string, name: string) {
  const hyperlink = document.createElement('a');
  hyperlink.download = name;
  hyperlink.target = '_blank';
  hyperlink.href = dataURL;
  hyperlink.click();
  hyperlink.remove();
}

export function actOnUploadedTextFile(
  fn: (text: string) => void,
  accept: string = 'application/json'
) {
  let input = document.createElement('input');
  input.type = 'file';
  input.accept = accept;
  input.style.display = 'none';
  const parent = document.getElementById('anchor');
  if (!parent) return;
  parent.append(input);

  input.onchange = () => {
    const files: FileList | null = input.files;
    if (!files) {
      input.remove();
      return;
    }
    const file = files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        const result = reader.result;
        if (typeof result == 'string') {
          fn(result);
        }
        input.remove();
      },
      false
    );

    if (file) {
      reader.readAsText(file);
    }
  };
  input.click();
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
