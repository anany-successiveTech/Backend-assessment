const errorMessages: Record<number, string> = {

  200: "OK - Request succeeded",
  201: "Created - Resource created successfully",
  204: "No Content - Success with no response body",

  301: "Moved Permanently - Resource moved to a new URL",
  302: "Found - Resource temporarily moved",
  304: "Not Modified - Cached version is still valid",

  400: "Bad Request - Invalid request syntax/data",
  401: "Unauthorized - Authentication required",
  403: "Forbidden - Access denied",
  404: "Not Found - Route or resource not found",
  409: "Conflict - Resource conflict (e.g., duplicate entry)",

  500: "Internal Server Error - Something went wrong on the server",
  502: "Bad Gateway - Invalid response from upstream server",
  503: "Service Unavailable - Server is overloaded or down",
};

export default errorMessages;
