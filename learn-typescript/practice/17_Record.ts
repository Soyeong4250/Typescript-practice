type HeroProfile = {
  skill: string;
  age: number;
}
type HeroNames = 'thor' | 'hulk' | 'capt';

type Heroes = Record<HeroNames, HeroProfile>;

var avengers: Heroes = {
  capt: {
    skill: '방패',
    age: 100
  },
  thor: {
    skill: '해머',
    age: 3000
  },
  hulk: {
    skill: '괴성',
    age: 47
  },
}




type PhoneBook = Record<string, string>;

var familyPhones: PhoneBook = {
  dad: '010-1111-2222',
  mom: '010-1234-5678',
};