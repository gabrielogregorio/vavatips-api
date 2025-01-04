import { UniqueId } from '@/domain/contexts/common/utils/UniqueId';

export interface UserEntityInterface {
  get id(): UniqueId;
  get username(): string;
  get password(): string;
  get imageUrl(): string;

  changeUsername(username: string): void;
  changePassword(passwordHash: string): void;
  changeImageUrl(imageUrl: string): void;
}
