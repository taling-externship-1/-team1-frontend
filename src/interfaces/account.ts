export interface CreateUserDto {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface CreatedUserDto {
  id: number;
  name: string;
  email: string;
  access_token: string;
  token_type: string;
}

export interface LoginUserDto {
  email: string;
  password: string;
}

export interface LoginedUserDto {
  id?: number;
  name: string;
  email: string;
  access_token: string;
  token_type: string;
}
