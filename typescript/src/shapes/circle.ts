// function circle(radius: number): Shape {
//     return {
//         radius,
//         computeArea: function (): number {
//             return Math.PI * radius * radius
//         }
//     }
// }

// export { circle }

// shapes/circle.ts
import { Shape } from './shape.js';

export class Circle implements Shape {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    computeArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
