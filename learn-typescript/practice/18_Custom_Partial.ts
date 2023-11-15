interface Todo {
    id: string;
    title: string;
}

type MyPartial = {
    [Property in keyof Todo]?: Todo[Property];
};