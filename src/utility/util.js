export function formatDate(date) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

  return formattedDate;
}

//removes any special charactres from the input string
export const cleanString = (str) => str.replace(/[^a-zA-Z0-9 ]/g, "");
