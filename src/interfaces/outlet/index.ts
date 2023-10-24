import { InventoryInterface } from 'interfaces/inventory';
import { RentalInterface } from 'interfaces/rental';
import { SupplierInterface } from 'interfaces/supplier';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  location: string;
  supplier_id: string;
  opening_hours: string;
  closing_hours: string;
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

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  supplier_id?: string;
  opening_hours?: string;
  closing_hours?: string;
}
