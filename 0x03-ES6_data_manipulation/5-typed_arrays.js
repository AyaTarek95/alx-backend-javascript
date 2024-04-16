export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const int8view = new DataView(buffer);

  if (position > length - 1) {
    throw new Error('Position outside range');
  }

  int8view.setInt8(position, value);

  return int8view;
}
