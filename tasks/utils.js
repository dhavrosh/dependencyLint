exports.handleRequest = (method, url, agent) => {
    return `Received request: ${method} ${url} from ${agent}`;
};
