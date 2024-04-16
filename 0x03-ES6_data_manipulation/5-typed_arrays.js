export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  const int8view = new Int8Array(length);

  int8view[position] = value;

  return int8view.buffer;
}
