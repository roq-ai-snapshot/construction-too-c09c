import { OutletInterface } from 'interfaces/outlet';
import { ToolInterface } from 'interfaces/tool';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  outlet?: OutletInterface[];
  tool?: ToolInterface[];
  user?: UserInterface;
  _count?: {
    outlet?: number;
    tool?: number;
  };
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
