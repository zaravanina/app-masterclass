export default interface PageData {
  contentType: string;
  id: string;
  name: string;
  createDate?: string;
  updateDate?: string;
  route: Culture;
  properties: PageProperties;

  cultures: {
    [key: string]: Culture;
  };
}

export interface PageProperties {
  blocks?: {
    items?: any[];
  };
}

export interface Culture {
  path: string | undefined;
  startItem: {
    id: string;
    path: string;
  };
}
