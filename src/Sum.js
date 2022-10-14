export function Sum({numbers= [1, 2, 3, 4, 5, 6]}) {
    let result = numbers.reduce((sum, current) => sum + current, 0)

    return (
        <h1>{result}</h1>
    )
}