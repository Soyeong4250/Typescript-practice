interface Hero {
	name: string;
	skill: string;
}

type HeroPropCheck = {
  [H in keyof Hero]: boolean;
}

type HeroNames1 = keyof Hero;
type HeroNames2 = 'name' | 'skill';