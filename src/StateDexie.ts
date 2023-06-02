import Dexie, { Table } from 'dexie';

export interface Level {
  id?: number;
}

export interface Progress {
  id?: number;
  levelId: number;
  userId: number;
  code: string;
  x: number;
  y: number;
}

export interface Option {
  id?: number;
  editorVisible?: boolean;  // 编辑器是否显示
  width?: number;  // 编辑器宽度
  placement?: any;
  target?: string;
  blockIndex?: number;   // 手上的积木
  size?: 'large' | 'default'   // 编辑窗口大小
  debugEnabled?: boolean   // 是否显示调试功能
  classVisible?: boolean,
  closeEnabled?: boolean,
  runEnabled?: boolean,
  codeText?: string
}

export class StateDateDexie extends Dexie {

  // 'books' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  levels!: Table<Level>;
  progress!: Table<Progress>;

  options!: Table<Option>;



  getOptions() {
    return this.options.toCollection().first();
  }

  constructor() {
    super('jianguoke.code');
    this.version(19).stores({
      levels: '++id',
      progress: '++id, levelId, userId',
      options: '++id',
    });
  }

  async init() {

    if (await this.options.count() <= 0) {
      await this.options.add({
        placement: 'bottom',
        closeEnabled: true,
        editorVisible: true
      })
    }
  }

  async setCodeEditorVisible(editorVisible: boolean, placement?: string) {
    const opt = await this.getOptions();
    if (opt?.editorVisible === editorVisible) {
      return;
    }
    const update: any = {
      editorVisible
    };
    if (placement && opt?.placement !== placement) {
      update['placement'] = placement;
    }
    await this.options.update(opt!.id!, update);
  }

  async setCodeEditorWidth(width: number) {
    const opt = await this.getOptions();
    if (opt?.width === width) {
      return;
    }
    await this.options.update(opt!.id!, {
      width
    });
  }

  async switchCodeEditorVisible() {
    const opt = await this.getOptions();
    await this.options.update(opt!.id!, { editorVisible: !opt?.editorVisible });
  }

  async setTarget(target: string) {
    const opt = await this.getOptions();
    if (opt?.target === target) {
      return;
    }
    await this.options.update(opt!.id!, { target });
  }

  async setBlock(blockIndex: number) {
    const opt = await this.getOptions();
    if (opt?.blockIndex === blockIndex) {
      return;
    }
    await this.options.update(opt!.id!, { blockIndex });
  }

  async setSize(size: 'large' | 'default') {
    const opt = await this.getOptions();
    if (opt?.size === size) {
      return;
    }
    await this.options.update(opt!.id!, { size });
  }

  async setClassCupVisible(classVisible: boolean) {
    const opt = await this.getOptions();
    if (opt?.classVisible === classVisible) {
      return;
    }
    await this.options.update(opt!.id!, { classVisible });
  }


  async setCodeText(codeText: string) {
    const opt = await this.getOptions();
    if (opt?.codeText === codeText) {
      return;
    }
    await this.options.update(opt!.id!, { codeText });
  }
}

export const state = new StateDateDexie(); 