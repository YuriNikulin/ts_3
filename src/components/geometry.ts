export default function() {
  interface Vector2dInterface {
    toArray(callback: (x: number[]) => void): void;
    length?(): number;
    normalize?();
  }

  class Vector2d implements Vector2dInterface {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
      this._x = x;
      this._y = y;
    }

    toArray(callback: (x: number[]) => void ): void {
      callback([this._x, this._y]);
    }
  }

  let myVector = new Vector2d(5, 10);
  myVector.toArray((numbers) => {
    console.log(numbers);
  })
}