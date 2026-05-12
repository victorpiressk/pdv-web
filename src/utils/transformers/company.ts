import type { Company } from '../../types/models';
import type { CompanyDTO } from '../../types/dtos';

export const toCompany = (dto: CompanyDTO): Company => ({
    id: dto.id,
    name: dto.name,
    document: dto.document,
    createdAt: dto.created_at,
  })
