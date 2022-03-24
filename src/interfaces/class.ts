interface ClassRequestUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  introduce?: string;
  is_tutor?: string;
}

interface ClassRequestCategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface ClassRequestClassMedia {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

interface ClassRequestLinks {
  first: string;
  last: string;
  prev?: string;
  next?: string;
}

interface ClassRequestMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: [];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface ClassRequestDataDto {
  id: number;
  tutor_id: number;
  category_id: number;
  class_media_id: number;
  name: string;
  is_event: boolean;
  price_for_hour: number;
  time_for_session: number;
  view_count: number;
  group_option: string;
  day_option: string;
  total_time: number;
  image: string;
  created_at: string;
  updated_at: string;
  user: ClassRequestUser;
  category: ClassRequestCategory;
  class_media: ClassRequestClassMedia;
}

export interface ClassRequestDto {
  data: [];
  links: ClassRequestLinks;
  meta: ClassRequestMeta;
}
