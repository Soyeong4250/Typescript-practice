type Person1 = {
  name: string;
}

interface Developer1 {
  name: string;
  skill?: string;
}

var joo: Person1 = {
  name: '형주',
};

var capt: Developer1 = {
  name: '캡틴',
  skill: '방패 던지기',
}

joo = capt;
capt = joo;