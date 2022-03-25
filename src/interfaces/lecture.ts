export enum GroupOption {
  'one' = 'ONE',
  'group' = 'GROUP',
  'none' = 'NONE',
}

interface User {
  id?: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
}

interface Category {
  id?: number;
  name: string;
  created_at?: string;
  updated_at?: string;
}

export enum DayOption {
  'one' = 'ONE',
  'many' = 'MANY',
  'none' = 'NONE',
}

export enum ClassMedias {
  'VOD' = 'VOD',
  'LIVE' = 'LIVE',
  'EBOOK' = '전자책',
  'OFFLINE' = '오프라인',
}

export interface ClassMedia {
  id?: number;
  name: 'VOD' | 'LIVE' | 'EBOOK' | 'OFFLINE';
  created_at?: string;
  updated_at?: string;
}

export interface Lecture {
  id: number;
  name: string;
  price_for_hour: number;
  time_for_session: number;
  view_count: number;
  group_option: GroupOption;
  day_option: DayOption;
  total_time: number;
  image: string;
  user: User;
  category: Category;
  class_media: ClassMedia;
}

export interface LectureDto {
  data: Lecture[];
}
