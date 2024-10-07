import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import SegmentationResult from './components/SegmentationResult';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [segmentationResult, setSegmentationResult] = useState({
    result: null,
    isLoading: false,
    error: null,
  });

  const handleImageUpload = (imageFile) => {
    setUploadedImage(imageFile);
    callSegmentationAPI(imageFile);
  };

  const callSegmentationAPI = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    setSegmentationResult({ ...segmentationResult, isLoading: true });

    try {
      const response = await fetch('/api/segment-image', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setSegmentationResult({ ...segmentationResult, result: data.segmentedImage, isLoading: false });
      } else {
        throw new Error(data.message || 'An error occurred during image segmentation.');
      }
    } catch (error) {
      setSegmentationResult({ ...segmentationResult, error: error.message, isLoading: false });
    }
  };

  return (
    <div className="App">
      <Header />
      <ImageUploader onImageUpload={handleImageUpload} />
      <SegmentationResult segmentationResult={segmentationResult} />
    </div>
  );
}

export default App;