type HeroNames = 'capt' | 'hulk' | 'thor';



type HeroAttendance = {
	[Name in HeroNames]: boolean;
};