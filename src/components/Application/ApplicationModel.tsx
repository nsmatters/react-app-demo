export interface PlatformItem {
  id: number;
  name: string;
}

export interface GitRepo {
  name: string;
  git: string;
}

export interface ApplicationItem {
  gitRepo?: GitRepo[];
  name: string;
  icon: string;
  desc: string;
  id: number;
}