interface Todo {
    id: string;
    title: string;
}

interface Student {
  name: string;
  grade: number;
}

type MyPartial<Type> = {
  [Property in keyof Type]?: Type[Property];
};

type TodoPartial = MyPartial<Todo>;
type StudentPartial = MyPartial<Student>;

type TodoPartial2 = Partial<Todo>;