function identify<T>(id: T): T {
    console.log(id);
    return id

}
identify<number[]>([123456])

function printID<T, U>(id: T, name: U): [T, U] {
    console.log(id, name);
    return [id, name]

}
printID(18,'pzx')