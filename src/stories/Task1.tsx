export default function Task1({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <div className="list-item">
      <label htmlFor="title" aria-label={title}>
        <input type="text" value={title} readOnly={true} name="title" />
      </label>
    </div>
  );
}
