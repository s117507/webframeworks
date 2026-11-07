import type { TextInputProps } from "../types/interfaces";

export default function TextInput({size}: TextInputProps) {
    return (
        <div>
            {Array.from({length: size}).map((_, i) => (
                <input
                    key={i}
                    type="text"
                    onChange={(e) => alert(`TextBox ${i + 1} changed to ${e.target.value}`)}
                />
            ))}
        </div>
    )
}
