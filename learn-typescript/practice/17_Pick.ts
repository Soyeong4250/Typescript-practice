interface Profile {
	id: string;
	address: string;
}

type ProfileId = Pick<Profile, 'id'>;

var captProfile: ProfileId = {
	id: '캡틴 아이디'
};

interface UserProfile {
	id: string;
	name: string;
	address: string;
}

type HulkProfile = Pick<UserProfile, 'id' | 'name'>;

var hulk: HulkProfile = {
	id: '1',
	name: '헐크',
}