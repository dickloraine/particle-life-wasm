export class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor(canvasId: string) {
    const canvas = document.querySelector<HTMLCanvasElement>(canvasId);
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) {
      throw new Error('Canvas element does not exist!');
    }
    this.canvas = canvas;
    this.ctx = ctx;
    this.updateDimensions();
  }

  updateDimensions() {
    this.canvas.width = window.innerWidth - 60;
    this.canvas.height = window.innerHeight - 60;
    const ctx = this.canvas.getContext('2d');
    if (ctx) this.ctx = ctx;
  }

  get width() {
    return this.canvas.width;
  }

  get height() {
    return this.canvas.height;
  }

  drawSquare(x: number, y: number, color: string, radius: number) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x - radius, y - radius, 2 * radius, 2 * radius);
  }

  drawRectangle(x: number, y: number, width: number, height: number, color: string) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, width, height);
  }

  drawCircle(x: number, y: number, color: string, radius: number, fill = true) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI); // x, y, radius, ArcStart, ArcEnd
    this.ctx.closePath();
    this.ctx.strokeStyle = this.ctx.fillStyle = color;
    fill ? this.ctx.fill() : this.ctx.stroke();
  }

  drawLineBetweenPoints(ax: number, ay: number, bx: number, by: number, color: string) {
    this.ctx.beginPath();
    this.ctx.moveTo(ax, ay);
    this.ctx.lineTo(bx, by);
    this.ctx.closePath();
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
  }

  drawCross(x: number, y: number, rx: number, ry: number, color: string) {
    this.ctx.beginPath();
    this.ctx.moveTo(x - rx, y);
    this.ctx.lineTo(x + rx, y);
    this.ctx.moveTo(x, y - ry);
    this.ctx.lineTo(x, y + ry);
    this.ctx.closePath();
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
  }
}
