interface Identites<K, V> {
    key: K,
    value: V
}
function identify<T, U>(key: T, value: U): Identites<T, U> {
    let id: Identites<T, U> = {
        key,
        value
    }
    return id
}
console.log(123);

