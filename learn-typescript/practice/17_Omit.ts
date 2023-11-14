interface UserProfile {
    id: string;
    name: string;
    address: string;
}

type User  = Omit<UserProfile, 'address'>;