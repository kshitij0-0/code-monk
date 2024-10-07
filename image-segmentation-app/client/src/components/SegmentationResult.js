
class SegmentationResult extends React.Component {
  render() {
    const { result, isLoading, error } = this.props.segmentationResult;

    if (error) {
      return <div className="segmentation-error">Error: {error}</div>;
    }

    if (isLoading) {
      return <div className="segmentation-loading">Processing image...</div>;
    }

    if (result) {
      return (
        <div className="segmentation-result">
          <img src={result} alt="Segmentation result" />
        </div>
      );
    }

    return <div className="segmentation-placeholder">No results to display</div>;
  }
}

export default SegmentationResult;