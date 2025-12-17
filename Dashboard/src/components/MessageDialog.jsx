import React from "react";

export default function MessageDialog({ show, message, onClose }) {
  if (!show) return null;

  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow rounded-4">

            <div className="modal-body text-center px-4 py-4">
              <p className="mb-4 text-muted">{message}</p>

              <div className="d-flex justify-content-center gap-4">
                <a
                  type="button"
                  className="btn btn-outline-secondary px-4 py-2"
                  onClick={onClose}
                >
                  Cancel
                </a>

                <a
                  type="button"
                  className="btn btn-primary px-4 py-2 fw-semibold"
                  onClick={onClose}
                >
                  OK
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}
