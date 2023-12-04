import { Repository } from 'typeorm';
import { BaseCrud } from './crud.interface';
import { BaseDTO } from './dto.base';
import { BaseModel } from './model.base';

export abstract class BaseService<E extends BaseModel, T extends BaseDTO>
  implements BaseCrud<T>
{
  serviceName: string;
  repo: Repository<E>;
  constructor(serviceName: string, repository: Repository<E>) {
    this.serviceName = serviceName;
    this.repo = repository;
  }

  async create(dto: E) {
    return await this.repo.save(dto);
  }

  async findAll() {
    return this.repo.find();
  }

  async findOne(id: any) {
    if (id) {
      return this.repo.findOneByOrFail({ id: id });
    }
  }

  async update(id: any, updateUserDto: T) {
    console.log(updateUserDto);
    const entity = await this.findOne(id);
    Object.keys(updateUserDto).map((k) => {
      if (updateUserDto[k]) {
        entity[k] = updateUserDto[k];
      }
    });

    return this.repo.save(entity);
  }

  async delete(id: string) {
    const entity = await this.findOne(id);
    this.repo.remove(entity);
  }
  getServiceName() {
    return this.serviceName;
  }
}
