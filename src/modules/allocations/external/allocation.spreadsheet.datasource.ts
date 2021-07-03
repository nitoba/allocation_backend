import { Injectable } from '@nestjs/common';
import {
  allocationLog,
  summaryAllocation,
} from 'src/shared/constants/app.constants';
import { api } from 'src/shared/services/api';
import { AllocationItemDTO } from '../domain/dto/allocation.item.dto';
import { AllocationProjectItemDTO } from '../domain/dto/allocation.project.item.dto';

@Injectable()
export class AllocationSpreadsheetDatasource {
  async getAllocationsBydatasource(
    page: number,
    limit: number,
  ): Promise<AllocationItemDTO[]> {
    const response = await api.get(
      `exec?type=${allocationLog}&page=${page}&limit=${limit}`,
    );
    return response.data;
  }

  async getAllocationProjectsBydatasource(): Promise<
    AllocationProjectItemDTO[]
  > {
    const response = await api.get(`exec?type=${summaryAllocation}`);
    return response.data;
  }
}
