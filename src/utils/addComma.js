export default function addComma(number) {
  const numberAsString = number.toString();
  const length = numberAsString.length;
  if (length <= 3) {
    return numberAsString;
  }
  const start = numberAsString.slice(0, length - 2);
  const end = numberAsString.slice(length - 2);
  return start + ',' + end;
}
