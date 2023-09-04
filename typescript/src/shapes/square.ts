// function square(sideLen: number): Shape {
//     return {
//         sideLen,
//         computeArea: function (): number {
//             return sideLen * sideLen
//         }
//     }
// }

// export { square }

// shapes/square.ts
import { Rectangle } from './rectangle.js';

export class Square extends Rectangle {
    constructor(sideLen: number) {
        super(sideLen, sideLen); // Call the parent class (Rectangle) constructor
    }
}
