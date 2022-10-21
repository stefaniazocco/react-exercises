import { useRef, useState } from "react"

export function CarDetails({initialData}) {
    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState('')
    function modelHandler() {
        setModel(modelRef.current.value)
    }
    function yearHandler() {
        setYear(yearRef.current.value)
    }
    function colorHandler() {
        setColor(colorRef.current.value)
    }


    function handleFormReset(e) {
        e.preventDefault()
        modelRef.current.value = initialData.model;
        yearRef.current.value = initialData.year;
        colorRef.current.value = initialData.color;
        console.log(model, year, color)
    }


    return (
        <form onSubmit={handleFormReset}>
            <label for="model">Model:</label>
            <input name="model" defaultValue={initialData.model} ref={modelRef} onChange={modelHandler} />
            <label for="year">Year:</label>
            <input name="year" type="number" defaultValue={initialData.year} ref={yearRef} onChange={yearHandler} />
            <label for="color">Color:</label>
            <input name="color" defaultValue={initialData.color} ref={colorRef} onChange={colorHandler} />
            <button type="submit">reset</button>
        </form>
    )
}