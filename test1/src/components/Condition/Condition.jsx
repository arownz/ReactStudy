export default function Condition() {
    let message;
    const display = false;

    if (display) {
        message = <h1>Display is true</h1>;
    } else {
        message = <h1>Display is false</h1>;
    }

    return (
        <div>
            {message}
        </div>
    );
}