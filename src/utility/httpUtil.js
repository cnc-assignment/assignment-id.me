export const handleAxiosError = (error) => {
  if (error.response) {
    return `There is an error ${error.response.status}: ${
      error.response.data.message || "Unknown error"
    }`;
  }
  if (error.request) {
    return "Response not received, verify your internet.";
  }
  return `Data fetching failed: ${error.message}`;
};
