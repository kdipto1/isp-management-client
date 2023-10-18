export interface IMeta {
  limit: number;
  page: number;
  total: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface Name {
  firstName: string;
  lastName: string;
  middleName?: string;
}

export interface IUser {
  id?: string;
  email: string;
  password?: string;
  firstName: string;
  middleName?: string | null;
  lastName: string;
  contactNo: number;
  profileImage?: string | null;
  role: UserRole;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IBlog {
  id?: string | undefined;
  title: string;
  message: string;
  blogImage?: string | null | undefined;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
}

export interface ICustomerConnectionStatus {
  id: string;
  customerId: string;
  broadbandAccountType: BroadbandAccountType;
  broadbandAccount: string;
  broadbandAccountPassword: string;
  internetConnectionStatus: InternetConnectionStatus;
  paymentStatus: PaymentStatus;
  broadbandPackageId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPackage {
  id?: string | undefined;
  name: string;
  price: number;
  bandwidth: number;
  iptv: boolean;
  bdix: boolean;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
}

export interface INewConnectionReq {
  id?: string;
  customerId: string;
  connectionDate: Date;
  connectionAddress: string;
  status: NewConnectionReqStatus;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
}

export interface INotification {
  id?: string | undefined;
  message: string;
  notificationFor?: NotificationFor | undefined;
  createdAt?: string | Date | undefined;
  updatedAt?: string | Date | undefined;
}

export interface IPayment {
  id?: string;
  packagePaymentId: string;
  customerId: string;
  paymentForDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IReview {
  id?: string;
  customerId: string;
  message: string;
  ratting: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

enum UserRole {
  super_admin,
  admin,
  user,
}

enum NewConnectionReqStatus {
  pending,
  accepted,
  canceled,
  completed,
}

enum NotificationFor {
  all,
  single,
}

enum BroadbandAccountType {
  PPoE,
  static,
}

enum PaymentStatus {
  due,
  paid,
}

enum InternetConnectionStatus {
  disconnected,
  connected,
}
