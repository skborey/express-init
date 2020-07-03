export class ValidationError extends Error {
    constructor(message, ...params) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super(...params)

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ValidationError)
        }

        this.name = 'VALIDATION';
        this.message = message
    }
}

export function getErrorRefId(name) {
    return `DRONEBE${Date.now()}${name.toUpperCase().substring(0, 3)}`;
}

export function handleError(err, req, res, next) {

    const name = err.name || 'UNK';
    const refId = getErrorRefId(name);

    if (req && req.body && req.body.password) {
        req.body.password = '***'; //mask sensitive data
    }
    switch (name) {
        case 'VALIDATION':
            res.status(400)
                .json({
                    status_code: 400,
                    status_message: err.message,
                    reference_id: refId,
                });
            break;
        default:
            res.status(500)
                .json({
                    status_code: err.status || 500,
                    status_message: err.message,
                    reference_id: refId,
                });
    }
}