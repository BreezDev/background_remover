document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting immediately

    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    const formData = new FormData(this);
    const xhr = new XMLHttpRequest();

    // Progress elements
    const progressContainer = document.getElementById('progress-container');
    const progressText = document.getElementById('progress-text');
    const progressInfo = document.getElementById('progress-info');

    progressContainer.style.display = 'block';  // Show the progress container

    xhr.upload.addEventListener('progress', function(e) {
        if (e.lengthComputable) {
            const percentComplete = Math.round((e.loaded / e.total) * 100);
            const loadedMB = (e.loaded / (1024 * 1024)).toFixed(2);
            const totalMB = (e.total / (1024 * 1024)).toFixed(2);

            progressText.textContent = percentComplete + '%';
            progressContainer.style.background = `conic-gradient(#4CAF50 ${percentComplete}%, #555 ${percentComplete}% 100%)`;
            progressInfo.textContent = `Uploaded: ${loadedMB} MB of ${totalMB} MB`;
        }
    });

    xhr.addEventListener('load', function() {
        if (xhr.status == 200) {
            // The upload completed successfully
            window.location.reload();
        } else {
            // Handle error
            progressInfo.textContent = 'Upload failed. Please try again.';
        }
    });

    xhr.open('POST', '/');
    xhr.send(formData);
});
