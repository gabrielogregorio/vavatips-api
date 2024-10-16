import { RepositoryInterface } from 'src/domain/@shared/repository/customRepository.interface';
import { CodeEntity } from '../enttity';

export interface CodeAggregateRepositoryInterface extends RepositoryInterface<CodeEntity> {
  save: (code: CodeEntity) => Promise<CodeEntity>;
  findByCode: (code: string) => Promise<CodeEntity | null>;
  updateEntity: (code: CodeEntity) => Promise<CodeEntity | null>; // trocar para save, para ser agnostico
}
