export default function SelectedBeast({ handleModal, imgData }) {
  return (
    <div className="selected">
      <img src={imgData} />
      <button onClick={handleModal}>Make it small again!</button>
    </div>
  );
}
