export interface ChinaTotal {
  dead: number;
  showLocalConfirm: number;
  highRiskAreaNum: number;
  suspect: number;
  nowSevere: number;
  confirm: number;
  importedCase: number;
  local_acc_confirm: number;
  localWzzAdd: number;
  confirmAdd: number;
  nowLocalWzz: number;
  deadAdd: number;
  mtime: string;
  localConfirm: number;
  heal: number;
  noInfect: number;
  showlocalinfeciton: number;
  noInfectH5: number;
  localConfirmH5: number;
  localConfirmAdd: number;
  mediumRiskAreaNum: number;
  nowConfirm: number;
  mRiskTime: string;
}

export interface ChinaAdd {
  dead: number;
  nowSevere: number;
  noInfectH5: number;
  importedCase: number;
  noInfect: number;
  localConfirm: number;
  localConfirmH5: number;
  confirm: number;
  heal: number;
  nowConfirm: number;
  suspect: number;
}

export interface ShowAddSwitch {
  suspect: boolean;
  dead: boolean;
  nowSevere: boolean;
  nowConfirm: boolean;
  importedCase: boolean;
  noInfect: boolean;
  localConfirm: boolean;
  localinfeciton: boolean;
  all: boolean;
  confirm: boolean;
  heal: boolean;
}

export interface Today {
  local_confirm_add: number;
  abroad_confirm_add: number;
  dead_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
  wzz_add: number;
}

export interface Total {
  continueDayZeroLocalConfirmAdd: number;
  showRate: boolean;
  heal: number;
  showHeal: boolean;
  wzz: number;
  continueDayZeroConfirm: number;
  confirm: number;
  highRiskAreaNum: number;
  continueDayZeroConfirmAdd: number;
  provinceLocalConfirm: number;
  mediumRiskAreaNum: number;
  mtime: string;
  nowConfirm: number;
  dead: number;
  adcode: string;
}

export interface Today {
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  wzz_add: number;
  local_confirm_add: number;
}

export interface Total {
  adcode: string;
  showRate: boolean;
  wzz: number;
  highRiskAreaNum: number;
  showHeal: boolean;
  mtime: string;
  confirm: number;
  dead: number;
  heal: number;
  nowConfirm: number;
  provinceLocalConfirm: number;
  mediumRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
}

export interface Children {
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
}

export interface Children {
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface Today {
  isUpdated: boolean;
  confirm: number;
}

export interface Total {
  nowConfirm: number;
  confirm: number;
  showRate: boolean;
  highRiskAreaNum: number;
  dead: number;
  showHeal: boolean;
  wzz: number;
  provinceLocalConfirm: number;
  mediumRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
  adcode: string;
  heal: number;
  mtime: string;
}

export interface AreaTree {
  children: Children[];
  name: string;
  today: Today;
  total: Total;
}

export interface Diseaseh5Shelf {
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
}

export interface LocalCityNCOVDataList {
  local_confirm_add: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  city: string;
  adcode: string;
  isUpdated: boolean;
  mtime: string;
  province: string;
  date: string;
  local_wzz_add: string;
  isSpecialCity: boolean;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  localCityNCOVDataList: LocalCityNCOVDataList[];
}
