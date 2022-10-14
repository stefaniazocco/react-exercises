export function Sum(props) {
    const numbers = props.numbers
    console.log(numbers)
    let result = numbers.reduce((sum, current) => sum + current, 0)

    return (
        <h1>{result}</h1>
    )
}