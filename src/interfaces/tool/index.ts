import { InventoryInterface } from 'interfaces/inventory';
import { RentalInterface } from 'interfaces/rental';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  supplier_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  rental?: RentalInterface[];
  supplier?: SupplierInterface;
  _count?: {
    inventory?: number;
    rental?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  supplier_id?: string;
}
