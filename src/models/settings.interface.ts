export default interface SettingsData {
  contentType: "siteSettings";
  id: string;
  name: string;
  createDate?: string;
  updateDate?: string;
  route: Culture;
  properties: SettingsProperties;
}

export interface SettingsProperties {
  headerLinks?: { items?: HeaderLink[] };
}

export interface HeaderLink {
  content: {
    contentType: "internalSimpleMenuLink";
    id: string;
    properties: {
      label?: string;
      link?: LinkModel;
    };
  };
}

export interface Culture {
  path: string | undefined;
  startItem: {
    id: string;
    path: string;
  };
}

export interface LinkModel {
  contentType: string;
  createDate: string;
  id: string;
  name: string;
  route: Culture;
  updateDate: string;
}
