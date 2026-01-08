export default function BotonAlerta() {
    const handleClick = () => {
        alert('Ten cuidao payico');
    }
    return (
        <button onClick={handleClick}>Clickea payo</button>
    )
}
