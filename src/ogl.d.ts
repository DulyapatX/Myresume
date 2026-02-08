declare module 'ogl' {
  export class Renderer {
    constructor(options?: any);
    gl: WebGLRenderingContext | WebGL2RenderingContext;
    setSize(width: number, height: number): void;
    render(options: { scene: any }): void;
  }

  export class Program {
    constructor(gl: any, options?: any);
    uniforms: Record<string, { value: any }>;
  }

  export class Mesh {
    constructor(gl: any, options?: any);
    setParent(parent?: any): void;
  }

  export class Geometry {
    constructor(gl: any, options?: any);
    attributes: Record<string, any>;
  }

  export class Color {
    constructor(color?: string | number | number[]);
    r: number;
    g: number;
    b: number;
  }
}
