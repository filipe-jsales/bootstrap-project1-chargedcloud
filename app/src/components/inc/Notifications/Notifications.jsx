function Notifications() {
  return (
    <div>
      <div className="w-100 mb-5 mt-5">
        <button type="button" className="btn btn-primary">
          Notifications <span className="badge text-bg-secondary">4</span>
        </button>
      </div>
      <div className="w-100 mb-5 mt-5">
        <button type="button" className="btn btn-primary position-relative">
          Inbox
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
      <span className="badge text-bg-primary">Primary</span>
      <span className="badge text-bg-secondary">Secondary</span>
      <span className="badge text-bg-success">Success</span>
      <span className="badge text-bg-danger">Danger</span>
      <span className="badge text-bg-warning">Warning</span>
      <span className="badge text-bg-info">Info</span>
      <span className="badge text-bg-light">Light</span>
      <span className="badge text-bg-dark">Dark</span>
    </div>
  );
}
export default Notifications;
