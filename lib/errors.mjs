export class HttpError extends Error {
  constructor(status, code, message, details = undefined) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export class RevisionConflictError extends HttpError {
  constructor(payload) {
    super(409, 'revision_conflict', 'The file changed after it was read.', payload);
    this.name = 'RevisionConflictError';
  }
}
