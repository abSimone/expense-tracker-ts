declare module "bootstrap" {
  export class Modal {
    constructor(element: Element, options?: any);
    toggle(): void;
    show(): void;
    hide(): void;
    handleUpdate(): void;
    dispose(): void;
    static getInstance(element: Element): Modal;
  }
}
