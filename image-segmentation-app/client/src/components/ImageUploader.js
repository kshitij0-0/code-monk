
function ImageUploader({ onImageUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file to upload.');
      return;
    }
    onImageUpload(selectedFile);
  };

  return (
    <div className="image-uploader">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image-upload" className="upload-instructions">
          Select an image to segment:
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default ImageUploader;