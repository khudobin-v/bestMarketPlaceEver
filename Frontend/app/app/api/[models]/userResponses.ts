type Role = 'ADMIN' | "MANAGER" | "USER";
export interface UserData {
    username: string;
    email: string;
    phone: string;
    card_number: string;
    CVC: number;
    validity: Date;
    user_discount: number;
    amount_spent: number;
    order_count: number;
    redemption_percent: number;
}

export interface AdminPanelUserInfo {
    username: string;
    role: Role;
    amount_spent: number;
    user_discount: number;
}